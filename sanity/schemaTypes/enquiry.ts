import { defineType, defineField } from "sanity";

export const enquiryType = defineType({
  name: "enquiry",
  title: "Enquiry",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Customer Name", type: "string" }),
    defineField({ name: "email", title: "Customer Email", type: "string" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "productName", title: "Product Name", type: "string" }),
    defineField({ name: "quantity", title: "Quantity", type: "number" }),
    defineField({
      name: "location",
      title: "Delivery Location",
      type: "string",
    }),
    defineField({
      name: "details",
      title: "Custom Specifications",
      type: "text",
    }),
    defineField({
      name: "referenceImage",
      title: "Custom Reference Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "NEW" },
          { title: "Replied", value: "REPLIED" },
          { title: "Closed", value: "CLOSED" },
        ],
      },
      initialValue: "NEW",
    }),
    defineField({
      name: "replies",
      title: "Reply History",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "subject", title: "Subject", type: "string" },
            { name: "message", title: "Message Body", type: "text" },
            { name: "sentAt", title: "Sent At", type: "datetime" },
          ],
        },
      ],
    }),
    defineField({ name: "createdAt", title: "Created At", type: "datetime" }),
  ],
});
