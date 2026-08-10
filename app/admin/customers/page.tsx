"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { enquiriesService } from "@/services/enquiriesService";
import { TableRowSkeleton } from "@/components/common/skeleton";
import { Search, Mail, Phone, Calendar } from "lucide-react";

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const { data: customersList = [], isLoading } = useQuery({
    queryKey: ["sanity-customers", search],
    queryFn: () => enquiriesService.getCustomers(search),
  });

  return (
    <div className="space-y-6 font-quicksand">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold font-poppins text-dark">
            Registered Customers
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Auto-created lead records from submitted studio enquiries.
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-border-light rounded-lg text-sm text-dark focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Overflow Scroll Wrapper with whitespace-nowrap */}
      <div className="bg-white border border-border-light rounded-xl overflow-x-auto shadow-xs">
        <table className="w-full text-left border-collapse min-w-[650px] whitespace-nowrap">
          <thead>
            <tr className="bg-bg-card/50 border-b border-border-light text-xs font-bold text-muted uppercase">
              <th className="py-3.5 px-4">Customer Name</th>
              <th className="py-3.5 px-4">Email</th>
              <th className="py-3.5 px-4">Phone</th>
              <th className="py-3.5 px-4">Joined Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light text-sm">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRowSkeleton key={i} columns={4} />
              ))
            ) : customersList.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-12 text-muted font-medium"
                >
                  <p className="text-base font-semibold text-dark mb-1">
                    No registered customers found
                  </p>
                  <p className="text-xs text-muted">
                    New customers will automatically appear here when they
                    submit an enquiry.
                  </p>
                </td>
              </tr>
            ) : (
              customersList.map((customer: any) => (
                <tr
                  key={customer._id}
                  className="hover:bg-bg-cream/20 transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold text-dark whitespace-nowrap">
                    {customer.name || "N/A"}
                  </td>
                  <td className="py-3.5 px-4 text-muted whitespace-nowrap">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Mail className="w-3.5 h-3.5 text-primary shrink-0" />{" "}
                      {customer.email || "N/A"}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-muted whitespace-nowrap">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Phone className="w-3.5 h-3.5 text-gold shrink-0" />{" "}
                      {customer.phone || "N/A"}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-muted whitespace-nowrap">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      {customer.createdAt
                        ? new Date(customer.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )
                        : "N/A"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
