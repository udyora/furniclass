export type EnquiryStatus = "NEW" | "AWAITING_REPLY" | "REPLIED" | "CLOSED";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface Attachment {
  id?: string;
  fileName: string;
  fileUrl: string;
  mimeType: string;
  fileSize: number;
}

export interface Message {
  id: string;
  senderType: "CUSTOMER" | "ADMIN";
  senderEmail: string;
  subject: string;
  body: string;
  createdAt: string;
  attachments?: Attachment[];
}

export interface Conversation {
  id: string;
  channel: string;
  subject: string;
  messages: Message[];
}

export interface Enquiry {
  id: string;
  productName?: string;
  quantity: number;
  location: string;
  details?: string;
  referenceImageUrl?: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
  customer: Customer;
  conversations?: Conversation[];
}

export interface ReplyEnquiryDto {
  subject: string;
  message: string;
  attachments?: Attachment[];
}

export interface EnquiryListResponse {
  items: Enquiry[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface CreateEnquiryDto {
  name: string;
  email: string;
  phone: string;
  productName?: string;
  quantity: number;
  location: string;
  details?: string;
  referenceImageUrl?: string;
}
