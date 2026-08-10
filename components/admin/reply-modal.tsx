"use client";

import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CustomToast } from "@/components/common/toast";
import { X, Send, Loader2 } from "lucide-react";

interface ReplyModalProps {
  enquiryId: string;
  customerName: string;
  customerEmail: string;
  productName?: string;
  initialSubject?: string;
  onClose: () => void;
}

export function ReplyModal({
  enquiryId,
  customerName,
  customerEmail,
  productName,
  initialSubject,
  onClose,
}: ReplyModalProps) {
  const queryClient = useQueryClient();

  const [subject, setSubject] = useState(
    initialSubject ||
      `Update on your enquiry for ${productName || "Furniclass Studio"}`,
  );
  const [message, setMessage] = useState(
    `Hi ${customerName},\n\nThank you for reaching out to Furniclass Studio regarding your enquiry for ${productName || "custom furniture"}.\n\n`,
  );
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Direct hit to Next.js /api/reply endpoint (Bypassing NestJS)
  const replyMutation = useMutation({
    mutationFn: async (payload: { subject: string; message: string }) => {
      const response = await fetch("/api/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enquiryId,
          customerEmail,
          subject: payload.subject,
          message: payload.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send reply email.");
      }

      return await response.json();
    },
    onSuccess: () => {
      setToast({ message: "Custom email sent successfully!", type: "success" });
      // Invalidate Sanity queries so table updates status to REPLIED
      queryClient.invalidateQueries({ queryKey: ["sanity-enquiries"] });
      setTimeout(() => {
        onClose();
      }, 1200);
    },
    onError: (err: any) => {
      setToast({
        message: err.message || "Failed to send email. Please try again.",
        type: "error",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    replyMutation.mutate({ subject, message });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 font-quicksand">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-border-light">
        <div className="flex justify-between items-center border-b border-border-light pb-3">
          <div>
            <h3 className="font-bold text-lg font-poppins text-dark">
              Send Email to {customerName}
            </h3>
            <p className="text-xs text-muted">{customerEmail}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-muted hover:text-dark transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-dark mb-1">
              Subject
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-white border border-border-light rounded-lg px-3.5 py-2 text-sm text-dark focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-dark mb-1">
              Message
            </label>
            <textarea
              required
              rows={6}
              placeholder="Write your custom reply or status update here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border border-border-light rounded-lg px-3.5 py-2.5 text-sm text-dark focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-border-light rounded-lg text-sm font-bold text-muted hover:bg-bg-card transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={replyMutation.isPending}
              className="px-5 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {replyMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Email
                </>
              )}
            </button>
          </div>
        </form>

        {toast && (
          <CustomToast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
}
