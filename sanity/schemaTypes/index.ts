import { type SchemaTypeDefinition } from "sanity";
import { enquiryType } from "./enquiry";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [enquiryType],
};
