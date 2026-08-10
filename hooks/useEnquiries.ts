import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { enquiriesService } from "@/services/enquiriesService";
import { EnquiryStatus, ReplyEnquiryDto } from "@/types/enquiry";

export function useGetEnquiries(
  page = 1,
  limit = 10,
  search = "",
  status = "",
) {
  return useQuery({
    queryKey: ["enquiries", page, limit, search, status],
    queryFn: () => enquiriesService.getEnquiries(page, limit, search, status),
  });
}

export function useGetEnquiryById(id: string) {
  return useQuery({
    queryKey: ["enquiry", id],
    queryFn: () => enquiriesService.getEnquiryById(id),
    enabled: Boolean(id),
  });
}

export function useReplyEnquiry(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: ReplyEnquiryDto) =>
      enquiriesService.replyToEnquiry(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquiry", id] });
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
  });
}

export function useUpdateEnquiryStatus(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (status: EnquiryStatus) =>
      enquiriesService.updateStatus(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquiry", id] });
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
  });
}
