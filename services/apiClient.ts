import { ApiErrorResponse } from "@/types/common";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: "include", // For HTTP-Only Cookies
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    let errorMessage = "An error occurred while fetching data.";
    try {
      const errorData: ApiErrorResponse = await response.json();
      errorMessage = Array.isArray(errorData.message)
        ? errorData.message.join(", ")
        : errorData.message || errorMessage;
    } catch {
      // JSON parse fallback
    }
    throw new ApiError(errorMessage, response.status);
  }

  return response.json();
}
