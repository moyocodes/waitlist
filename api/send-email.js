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
        subject: "💎 Welcome to Yagso — Your Exclusive Passcode",
        html: `
  <div style="font-family:'Helvetica Neue',Arial,sans-serif;background:#ffffff;padding:40px;text-align:center;color:#222;">

    <!-- CARD -->
    <div style="background:#fff;border-radius:18px;padding:40px 30px;max-width:560px;margin:0 auto;
                box-shadow:0 8px 28px rgba(212,175,55,0.18);border:1px solid #f2e6b3;">
      
      <!-- LOGO INSIDE CARD -->
      <div style="margin-bottom:20px;">
        <img src="https://waitlist-bay-kappa.vercel.app/logo.png" alt="Yagso Logo" style="max-width:95px;" />
        <div style="height:3px;width:60px;background:linear-gradient(90deg,#d4af37,#b8860b);
                    margin:12px auto;border-radius:2px;"></div>
      </div>

      <!-- TITLE -->
      <h1 style="font-size:28px;color:#b8860b;margin-bottom:14px;font-weight:700;">Welcome to Yagso ✨</h1>
      <p style="font-size:16px;color:#555;line-height:1.6;margin-bottom:28px;">
        Thank you for joining our waitlist 💎 <br/>
        Here’s your exclusive access passcode:
      </p>

      <!-- PASSCODE -->
      <div style="margin:20px auto;max-width:300px;">
        <div style="padding:14px;font-size:20px;font-weight:bold;text-align:center;
                    border:2px solid #b8860b;border-radius:10px;
                    background:#fffdf6;color:#b8860b;letter-spacing:3px;
                    box-shadow:0 4px 14px rgba(184,134,11,0.25);">
          ${passcode}
        </div>
        <p style="font-size:13px;color:#888;margin-top:6px;">(Copy this code & keep it safe)</p>
      </div>

      <!-- CTA BUTTON -->
      <a href="https://waitlist-bay-kappa.vercel.app/" 
        style="display:inline-block;margin-top:28px;padding:14px 36px;
               background:linear-gradient(135deg,#d4af37,#b8860b);
               color:#111;text-decoration:none;border-radius:50px;
               font-size:16px;font-weight:bold;letter-spacing:.5px;
               box-shadow:0 6px 18px rgba(184,134,11,0.3);">
        Explore Yagso
      </a>
    </div>

    <!-- FOOTER -->
    <p style="margin-top:40px;font-size:12px;color:#777;">
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
