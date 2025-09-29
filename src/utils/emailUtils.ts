import nodeMailer from "nodemailer";
import { emailpass, emailuser } from "./envValue";
export const sendVerificationEmail = async (email: string, link: string) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: emailuser,
      pass: emailpass,
    },
  });

  await transporter.sendMail({
    from: `Verify your email ${emailuser}`,
    to: email,
    subject: "Email verification",
    html: `<p>Click to verify your email: <a href="${link}">${link}</a></p>`,
  });
};
