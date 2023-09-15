import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { type NextRequest } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, fname, lname, contry, budget, service, measge } = body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.emailid,
      pass: process.env.password,
    },
  });
  try {
    await transporter.sendMail({
      from: process.env.emailid,
      to: process.env.emailid,
      subject: service,
      html: `<p>First name:${fname}</p>
           <p>Last name:${lname} </p>
          <p>Email::${email} </p>
          <p>Country:${contry} </p>
          <p>Budget:${budget} </p>
          <p>Service :${service} </p>`,
    });
    return new NextResponse("email sent successfully!", { status: 200 });
  } catch (error) {
    return new NextResponse("error sending email", { status: 500 });
  }

  return NextResponse.json({ body });
}
