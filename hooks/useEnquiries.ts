import { client } from "@/sanity/lib/client";

export interface CreateEnquiryInput {
  name: string;
  email: string;
  phone: string;
  productName?: string;
  quantity: number;
  location: string;
  details?: string;
}

export const enquiriesService = {
  createEnquiry: async (dto: CreateEnquiryInput) => {
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error || "Failed to submit enquiry");
    }

    return await response.json();
  },

  // 2. All Enquiries fetch with filters
  getEnquiries: async (statusFilter?: string, searchQuery?: string) => {
    let filterStr = `_type == "enquiry"`;

    if (statusFilter) {
      filterStr += ` && status == "${statusFilter}"`;
    }

    if (searchQuery) {
      filterStr += ` && (name match "*${searchQuery}*" || email match "*${searchQuery}*" || productName match "*${searchQuery}*")`;
    }

    const query = `*[${filterStr}] | order(createdAt desc) {
      _id,
      name,
      email,
      phone,
      productName,
      quantity,
      location,
      details,
      status,
      createdAt,
      "imageUrl": referenceImage.asset->url,
      replies
    }`;

    return await client.fetch(query);
  },

  // 3. Single Enquiry Details by ID (Fixes getEnquiryById error)
  getEnquiryById: async (id: string) => {
    const query = `*[_type == "enquiry" && _id == $id][0] {
      _id,
      name,
      email,
      phone,
      productName,
      quantity,
      location,
      details,
      status,
      createdAt,
      "imageUrl": referenceImage.asset->url,
      replies
    }`;

    return await client.fetch(query, { id });
  },

  // 4. Update Status in Sanity (Fixes updateStatus error)
  updateStatus: async (id: string, status: string) => {
    return await client.patch(id).set({ status }).commit();
  },

  // 5. Customer Leads List
  getCustomers: async (searchQuery?: string) => {
    let filterStr = `_type == "enquiry"`;
    if (searchQuery) {
      filterStr += ` && (name match "*${searchQuery}*" || email match "*${searchQuery}*")`;
    }

    const query = `*[${filterStr}] | order(createdAt desc) {
      _id,
      name,
      email,
      phone,
      createdAt
    }`;

    const items = await client.fetch(query);

    const uniqueMap = new Map();
    items.forEach((item: any) => {
      if (!uniqueMap.has(item.email)) {
        uniqueMap.set(item.email, item);
      }
    });

    return Array.from(uniqueMap.values());
  },
};
