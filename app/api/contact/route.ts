import { NextResponse } from "next/server";
import { contactFormSchema } from "../../../lib/contact";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Please send the form as JSON." },
      { status: 400 },
    );
  }

  const result = contactFormSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields and try again.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Replace this boundary with a mail provider when one is configured. Keeping
  // the transport here makes the route easy to connect to Resend, Postmark, or
  // another provider without changing the client contract.
  console.info("[contact] enquiry received", result.data);

  return NextResponse.json(
    { success: true, message: "Thanks - your message is on its way." },
    { status: 200 },
  );
}
