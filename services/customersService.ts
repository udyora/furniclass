import { Customer } from "@/types/customer";
import { apiClient } from "./apiClient";
import { BaseResponse, PaginatedResponse } from "@/types/common";

export const customersService = {
  getCustomers: (page = 1, limit = 10, search = "") => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(search && { search }),
    });
    return apiClient<PaginatedResponse<Customer>>(
      `/api/customers?${params.toString()}`,
    );
  },

  getCustomerById: (id: string) => {
    return apiClient<BaseResponse<Customer>>(`/api/customers/${id}`);
  },
};
