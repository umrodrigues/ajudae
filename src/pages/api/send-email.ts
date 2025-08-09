import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  description: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, phone, description }: EmailData = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "luarodrigues1996@gmail.com",
      subject: "Nova Oportunidade de Voluntariado",
      text: `Nome da Organização/Projeto: ${name}\nEmail: ${email}\nTelefone: ${phone ?? "Não informado"}\nDescrição:\n${description}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ message: `Erro ao enviar e-mail: ${(error as Error).message}` });
  }
}