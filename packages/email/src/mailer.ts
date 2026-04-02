import nodemailer from "nodemailer";
import { pretty, render } from "@react-email/components";

const port = Number(process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465, // true for port 465, false otherwise
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendEmail({
  to,
  subject,
  react,
}: {
  to: string;
  subject: string;
  react: React.ReactElement;
}) {
  await transporter.sendMail({
    from: `Dwete <${process.env.SMTP_USER}>`,
    to,
    subject,
    html: await pretty(await render(react)),
  });
}
