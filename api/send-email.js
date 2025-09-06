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
        from: "onboarding@resend.dev",
        to: email,
        subject: "🎉 Welcome to Yagso — Your Access Pass",
        html: `
          <div style="font-family: Arial, sans-serif; background: #f8f5ff; padding: 30px; text-align: center; color: #111;">
            
            <!-- LOGO -->
            <div style="margin-bottom: 20px;">
              <img src="https://waitlist-bay-kappa.vercel.app/logo.png" alt="Yagso Logo" style="max-width: 180px;" />
            </div>

            <!-- HERO IMAGE -->
            <div style="margin-bottom: 20px;">
              <img src="https://waitlist-bay-kappa.vercel.app/hero.jpg" alt="Yagso Banner" style="max-width: 100%; border-radius: 10px;" />
            </div>

            <!-- WELCOME MESSAGE -->
            <h1 style="color: #4F46E5; font-size: 28px;">Welcome to Yagso 🎉</h1>
            <p style="font-size: 16px; color: #444;">Thank you for signing up to join our waitlist. You’re officially part of the community!</p>

            <!-- PASSCODE -->
            <div style="background: #4F46E5; color: white; padding: 15px; margin: 25px auto; width: fit-content; border-radius: 8px; font-size: 20px; font-weight: bold;">
              Your Passcode: ${passcode}
            </div>

            <!-- CTA -->
            <a href="https://waitlist-bay-kappa.vercel.app/" 
              style="display: inline-block; margin-top: 20px; padding: 14px 28px; background: #111; color: white; text-decoration: none; border-radius: 6px; font-size: 16px;">
              Visit Our Website
            </a>

            <!-- FOOTER -->
            <p style="margin-top: 30px; font-size: 12px; color: #777;">
              © ${new Date().getFullYear()} Yagso. All rights reserved.<br/>
              You received this email because you signed up for our waitlist.
            </p>
          </div>
        `,
      },
      {
        headers: {
          Authorization: `Bearer re_Y8cQdW6f_BzDxsh8XAoCBDBfrj6LT4u3Q`,
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
