"use server";

import { Resend } from "resend";

const resend = new Resend("re_i3q1EZYo_NRYzHvEX5EnrwNqmjHYLyHoA");

export type ContactFormData = {
  email: string;
  name: string;
  message: string;
};

export const sendEmail = (contactData: ContactFormData) => {
  console.log(process.env.RESEND_API_KEY);
  resend.emails.send({
    from: `Portfolio Contact <onboarding@resend.dev>`,
    to: "jvdevelops@gmail.com",
    subject: `${contactData.name} is reaching out`,
    reply_to: contactData.email,
    text: contactData.message,
  });
};
