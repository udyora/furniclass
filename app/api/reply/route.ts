import { NextResponse } from "next/server";
import { Resend } from "resend";
import { client } from "@/sanity/lib/client";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { enquiryId, customerEmail, subject, message } = await req.json();

    if (!enquiryId || !customerEmail || !message) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 },
      );
    }

    // 1. Send Email via Resend using verified udyora.com domain
    const fromAddress = `${process.env.RESEND_FROM_NAME || "Furniclass Studio"} <${process.env.RESEND_FROM_EMAIL || "info@udyora.com"}>`;

    const emailResult = await resend.emails.send({
      from: fromAddress,
      to: [customerEmail],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #18181b;">
          <h2 style="color: #0d9488; margin-bottom: 16px;">Furniclass Studio</h2>
          <div style="background-color: #f4f4f5; padding: 16px; border-radius: 8px; font-size: 15px; line-height: 1.6;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #71717a;">
            &copy; ${new Date().getFullYear()} Furniclass Studio. All rights reserved.
          </p>
        </div>
      `,
    });

    // Catch Resend API level failure
    if (emailResult.error) {
      console.error("Resend Dispatch Error:", emailResult.error);
      return NextResponse.json(
        {
          error:
            emailResult.error.message || "Failed to dispatch email via Resend",
        },
        { status: 400 },
      );
    }

    // 2. Patch Sanity Document Status -> REPLIED & Append History
    await client
      .patch(enquiryId)
      .set({ status: "REPLIED" })
      .append("replies", [
        {
          subject,
          message,
          sentAt: new Date().toISOString(),
        },
      ])
      .commit();

    return NextResponse.json({ success: true, emailId: emailResult.data?.id });
  } catch (error: any) {
    console.error("Server API Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
