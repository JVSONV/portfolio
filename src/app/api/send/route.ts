"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export type ContactFormData = {
  email: string;
  name: string;
  message: string;
};

export async function POST(req: Request) {
  const contactData = await req.json();

  try {
    const data = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: "jvdevelops@gmail.com",
      subject: `${contactData.name} is reaching out`,
      reply_to: contactData.email,
      text: contactData.message,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
