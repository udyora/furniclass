import { client } from "@/sanity/lib/client";

export interface CreateEnquiryInput {
  name: string;
  email: string;
  phone: string;
  productName?: string;
  quantity: number;
  location: string;
  details?: string;
  selectedColor?: string;
  referenceImage?: File | null;
}

export const enquiriesService = {
  createEnquiry: async (payload: CreateEnquiryInput | FormData) => {
    let body: FormData;

    if (payload instanceof FormData) {
      body = payload;
    } else {
      body = new FormData();
      body.append("name", payload.name);
      body.append("email", payload.email);
      body.append("phone", payload.phone);
      if (payload.productName) body.append("productName", payload.productName);
      body.append("quantity", String(payload.quantity || 1));
      body.append("location", payload.location);
      if (payload.details) body.append("details", payload.details);
      if (payload.selectedColor)
        body.append("selectedColor", payload.selectedColor);
      if (payload.referenceImage)
        body.append("referenceImage", payload.referenceImage);
    }

    const response = await fetch("/api/enquiries", {
      method: "POST",
      body, // Browser automatically sets Content-Type to multipart/form-data
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
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
      selectedColor,
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

  // 3. Single Enquiry Details by ID
  getEnquiryById: async (id: string) => {
    const query = `*[_type == "enquiry" && _id == $id][0] {
      _id,
      name,
      email,
      phone,
      productName,
      selectedColor,
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

  // 4. Update Status in Sanity
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
