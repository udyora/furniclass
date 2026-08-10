"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { enquiriesService } from "@/services/enquiriesService";
import { CardSkeleton } from "@/components/common/skeleton";
import { MessageSquare, Clock, CheckCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const { data: enquiriesList = [], isLoading } = useQuery({
    queryKey: ["sanity-dashboard-enquiries"],
    queryFn: () => enquiriesService.getEnquiries(),
  });

  const newCount = enquiriesList.filter(
    (e: any) => e.status === "NEW" || !e.status,
  ).length;
  const repliedCount = enquiriesList.filter(
    (e: any) => e.status === "REPLIED",
  ).length;
  const closedCount = enquiriesList.filter(
    (e: any) => e.status === "CLOSED",
  ).length;

  return (
    <div className="space-y-6 font-quicksand">
      <h2 className="text-2xl font-bold font-poppins text-dark">Dashboard</h2>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <div className="bg-white p-5 border border-border-light rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-muted">
                  New Enquiries
                </span>
                <MessageSquare className="w-5 h-5 text-pink" />
              </div>
              <p className="text-3xl font-bold font-poppins text-dark">
                {newCount}
              </p>
            </div>

            <div className="bg-white p-5 border border-border-light rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-muted">
                  Replied Enquiries
                </span>
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <p className="text-3xl font-bold font-poppins text-dark">
                {repliedCount}
              </p>
            </div>

            <div className="bg-white p-5 border border-border-light rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-muted">
                  Resolved Orders
                </span>
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <p className="text-3xl font-bold font-poppins text-dark">
                {closedCount}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white border border-border-light rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold font-poppins text-dark">
            Recent Customer Enquiries
          </h3>
          <Link
            href="/admin/enquiries"
            className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <p className="text-sm text-muted py-4">Loading recent enquiries...</p>
        ) : enquiriesList.length === 0 ? (
          <p className="text-sm text-muted py-4 text-center">
            No enquiries found yet in Sanity.
          </p>
        ) : (
          <div className="divide-y divide-border-light">
            {enquiriesList.slice(0, 5).map((enquiry: any) => (
              <div
                key={enquiry._id}
                className="py-3 flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-bold text-dark">
                    {enquiry.name || "Guest Customer"}
                  </p>
                  <p className="text-xs text-muted">{enquiry.email || "N/A"}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-primary">
                    {enquiry.productName || "Custom Order"}
                  </span>
                  <p className="text-[10px] text-muted">
                    {enquiry.createdAt
                      ? new Date(enquiry.createdAt).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
