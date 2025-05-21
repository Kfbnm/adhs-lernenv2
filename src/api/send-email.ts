
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  from: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const { to, subject, message } = data; // 'from' entfernen, wenn nicht benötigt
  const sender = data.from; // Alternative Benennung

  // E-Mail-Konfiguration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: import.meta.env.VITE_EMAIL_USER,
      pass: import.meta.env.VITE_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: sender, // oder import.meta.env.VITE_EMAIL_USER verwenden
    to,
    subject, 
    text: message
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error('E-Mail-Fehler:', error);
    return { success: false, error: 'Fehler beim Versenden der E-Mail' };
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { to, subject, message } = req.body; // 'from' entfernen

    // E-Mail-Konfiguration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Absender fest definieren
      to,
      subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('E-Mail-Fehler:', error);
      res.status(500).json({ success: false, error: 'Fehler beim Versenden der E-Mail' });
    }
  } else {
    res.status(405).json({ error: 'Methode nicht erlaubt' });
  }
}