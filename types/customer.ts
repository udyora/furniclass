import { Enquiry } from "./enquiry";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  enquiries?: Enquiry[];
  _count?: {
    enquiries: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CustomerDetailResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  enquiries: Enquiry[];
  createdAt: string;
  updatedAt: string;
}
