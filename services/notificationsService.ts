import { apiClient } from "./apiClient";
import { BaseResponse } from "@/types/common";

export const notificationsService = {
  getNotifications: () => {
    return apiClient<BaseResponse<Notification[]>>("/api/notifications");
  },

  markAsRead: (id: string) => {
    return apiClient<BaseResponse<Notification>>(
      `/api/notifications/${id}/read`,
      {
        method: "PATCH",
      },
    );
  },

  markAllAsRead: () => {
    return apiClient<BaseResponse<{ count: number }>>(
      "/api/notifications/read-all",
      {
        method: "PATCH",
      },
    );
  },
};
