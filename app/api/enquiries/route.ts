import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const productName = formData.get("productName") as string;
    const quantity = Number(formData.get("quantity")) || 1;
    const location = formData.get("location") as string;
    const details = formData.get("details") as string;
    const imageFile = formData.get("referenceImage") as File | null;

    let imageAssetRef = null;

    // 1. Upload reference image asset to Sanity if attached
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const asset = await client.assets.upload("image", buffer, {
        filename: imageFile.name,
        contentType: imageFile.type,
      });
      imageAssetRef = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      };
    }

    // 2. Create Enquiry document in Sanity
    const doc: any = {
      _type: "enquiry",
      name,
      email,
      phone,
      productName: productName || "General Custom Furniture Order",
      quantity,
      location,
      details: details || "",
      status: "NEW",
      createdAt: new Date().toISOString(),
    };

    if (imageAssetRef) {
      doc.referenceImage = imageAssetRef;
    }

    const result = await client.create(doc);

    return NextResponse.json({ success: true, id: result._id });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to process enquiry" },
      { status: 500 },
    );
  }
}
