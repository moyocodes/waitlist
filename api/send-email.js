// api/send-email.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, passcode } = req.body;

  try {
    const response = await axios.post(
      "https://api.resend.com/emails",
      {
        from: "welcome@yourdomain.com",
        to: email,
        subject: "🎉 Welcome to the Waitlist",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h1>Welcome!</h1>
            <p>Thanks for joining our waitlist. Your unique passcode is:</p>
            <h2 style="color: #4F46E5;">${passcode}</h2>
            <p>Keep it safe — you’ll need it later!</p>
          </div>
        `,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
