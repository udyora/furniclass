import { apiClient } from "./apiClient";
import { LoginDto, AuthUser } from "@/types/auth";
import { BaseResponse } from "@/types/common";

export const authService = {
  login: async (dto: LoginDto) => {
    const res = await apiClient<any>("/admin/auth/login", {
      method: "POST",
      body: JSON.stringify(dto),
    });

    const token = res?.token || res?.data?.token;
    if (token) {
      localStorage.setItem("admin_token", token);
    }
    return res;
  },

  logout: async () => {
    localStorage.removeItem("admin_token");
    return apiClient<BaseResponse<null>>("/admin/auth/logout", {
      method: "POST",
    });
  },

  getMe: () => {
    return apiClient<BaseResponse<AuthUser>>("/admin/auth/me", {
      method: "GET",
    });
  },
};
