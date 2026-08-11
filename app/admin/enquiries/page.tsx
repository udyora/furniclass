"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import { TableRowSkeleton } from "@/components/common/skeleton";
import { ReplyModal } from "@/components/admin/reply-modal";
import { CustomSelect } from "@/components/common/custom-select";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Send,
  Package,
  Eye,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

export default function EnquiriesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedEnquiryForReply, setSelectedEnquiryForReply] = useState<
    any | null
  >(null);
  const [viewDetailEnquiry, setViewDetailEnquiry] = useState<any | null>(null);

  const statusOptions = [
    { label: "All Statuses", value: "" },
    { label: "New Enquiries", value: "NEW" },
    { label: "Replied", value: "REPLIED" },
    { label: "Closed", value: "CLOSED" },
  ];

  const {
    data: enquiriesList = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sanity-enquiries", statusFilter, search],
    queryFn: async () => {
      let filterStr = `_type == "enquiry"`;
      if (statusFilter) filterStr += ` && status == "${statusFilter}"`;
      if (search)
        filterStr += ` && (name match "*${search}*" || email match "*${search}*" || productName match "*${search}*")`;

      const query = `*[${filterStr}] | order(createdAt desc) {
        _id,
        name,
        email,
        phone,
        productName,
        quantity,
        location,
        details,
        status,
        createdAt,
        "imageUrl": referenceImage.asset->url,
        replies
      }`;

      return await client.fetch(query);
    },
  });

  return (
    <div className="space-y-6 font-quicksand">
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <h2 className="text-xl md:text-2xl font-bold font-poppins text-dark">
          Customer Enquiries
        </h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Custom Select Box */}
          <CustomSelect
            options={statusOptions}
            value={statusFilter}
            onChange={(val) => setStatusFilter(val)}
          />

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search enquiries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-border-light rounded-lg text-sm text-dark focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Responsive Horizontal Scroll Wrapper */}
      <div className="bg-white border border-border-light rounded-xl overflow-x-auto shadow-xs">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="bg-bg-card/50 border-b border-border-light text-xs font-bold text-muted uppercase">
              <th className="py-3.5 px-4">Customer</th>
              <th className="py-3.5 px-4">Product / Item</th>
              <th className="py-3.5 px-4">Contact</th>
              <th className="py-3.5 px-4">Location</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light text-sm">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRowSkeleton key={i} columns={6} />
              ))
            ) : enquiriesList.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-12 text-muted font-medium"
                >
                  No enquiries found.
                </td>
              </tr>
            ) : (
              enquiriesList.map((enquiry: any) => (
                <tr
                  key={enquiry._id}
                  className="hover:bg-bg-cream/20 transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold text-dark">
                    {enquiry.name || "Guest User"}
                  </td>

                  <td className="py-3.5 px-4 font-bold text-primary text-xs">
                    <span className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-primary shrink-0" />
                      {enquiry.productName || "Custom Order"} (x
                      {enquiry.quantity || 1})
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-xs text-muted space-y-0.5">
                    <p className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-primary" />{" "}
                      {enquiry.email || "N/A"}
                    </p>
                    <p className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-gold" />{" "}
                      {enquiry.phone || "N/A"}
                    </p>
                  </td>

                  <td className="py-3.5 px-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-pink" />{" "}
                      {enquiry.location || "N/A"}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2.5 py-1 text-xs rounded-full font-bold ${
                        enquiry.status === "REPLIED"
                          ? "bg-green-100 text-green-700"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {enquiry.status || "NEW"}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right space-x-2 whitespace-nowrap">
                    <button
                      onClick={() => setViewDetailEnquiry(enquiry)}
                      className="px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 text-dark text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                    <button
                      onClick={() => setSelectedEnquiryForReply(enquiry)}
                      className="px-3 py-1.5 bg-primary/10 hover:bg-primary hover:text-white text-primary text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" /> Reply
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {viewDetailEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 font-quicksand backdrop-blur-xs">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewDetailEnquiry(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-dark font-bold text-lg"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-dark border-b pb-2">
              Enquiry Details
            </h3>

            <div className="space-y-3 text-sm">
              <p>
                <span className="font-bold text-muted">Customer Name:</span>{" "}
                {viewDetailEnquiry.name}
              </p>
              <p>
                <span className="font-bold text-muted">
                  Product / Custom Item:
                </span>{" "}
                {viewDetailEnquiry.productName}
              </p>
              <p>
                <span className="font-bold text-muted">Quantity:</span>{" "}
                {viewDetailEnquiry.quantity}
              </p>
              <p>
                <span className="font-bold text-muted">Location:</span>{" "}
                {viewDetailEnquiry.location}
              </p>
              <p>
                <span className="font-bold text-muted">Contact:</span>{" "}
                {viewDetailEnquiry.email} | {viewDetailEnquiry.phone}
              </p>

              <div>
                <span className="font-bold text-muted block mb-1">
                  Customization Specifications:
                </span>
                <p className="bg-bg-card p-3 rounded-md text-xs leading-relaxed border border-border-light text-dark">
                  {viewDetailEnquiry.details ||
                    "No specific customization notes provided."}
                </p>
              </div>

              {viewDetailEnquiry.imageUrl ? (
                <div>
                  <span className="font-bold text-muted block mb-1.5 flex items-center gap-1">
                    <ImageIcon className="w-4 h-4 text-primary" /> Customer
                    Reference Image:
                  </span>
                  <div className="relative h-48 w-full rounded-md overflow-hidden border border-border-light bg-gray-50">
                    <img
                      src={viewDetailEnquiry.imageUrl}
                      alt="Reference Design"
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-xs text-muted italic">
                  No custom reference image attached.
                </p>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedEnquiryForReply(viewDetailEnquiry);
                  setViewDetailEnquiry(null);
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-hover flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" /> Send Reply Email
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedEnquiryForReply && (
        <ReplyModal
          enquiryId={selectedEnquiryForReply._id}
          customerName={selectedEnquiryForReply.name}
          customerEmail={selectedEnquiryForReply.email}
          productName={selectedEnquiryForReply.productName}
          onClose={() => {
            setSelectedEnquiryForReply(null);
            refetch();
          }}
        />
      )}
    </div>
  );
}
