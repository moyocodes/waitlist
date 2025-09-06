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
  <div
      style="
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: linear-gradient(
          135deg,
          #ffffff 0%,
          #f0fdf4 50%,
          #ecfdf5 100%
        );
        min-height: 100vh;
        padding: 30px 10px;
        color: #111827;
      "
    >
      <!-- Main Content Container -->
      <div style="max-width: 400px; margin: 0 auto; text-align: center">
        <!-- Logo Section -->
        <div style="margin-bottom: 30px">
          <img
            src="https://waitlist-bay-kappa.vercel.app/logo.png"
            alt="Yagso Logo"
            style="max-width: 100px; height: auto; margin-bottom: 10px"
          />
          <div
            style="
              height: 2px;
              width: 80px;
              background: linear-gradient(90deg, #065f46, #047857);
              margin: 0 auto;
              border-radius: 1px;
              opacity: 0.7;
            "
          ></div>
        </div>

        <!-- Welcome Message -->
        <div style="margin-bottom: 60px">
          <h1
            style="
              font-size: 42px;
              font-weight: 300;
              color: #065f46;
              margin: 0 0 24px 0;
              line-height: 1.2;
              letter-spacing: -0.5px;
            "
          >
            Welcome to Yagso
          </h1>

          <p
            style="
              font-size: 18px;
              color: #6b7280;
              line-height: 1.7;
              margin: 0;
              max-width: 480px;
              margin: 0 auto;
            "
          >
            Thank you for joining our exclusive collection launch. Your journey
            into luxury begins now with your personal access code.
          </p>
        </div>

        <!-- Passcode Section -->
        <div style="margin: 50px auto; max-width: 320px">
          <div
            style="
              background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
              border: 3px solid #065f46;
              border-radius: 16px;
              padding: 32px 24px;
              position: relative;
              box-shadow: 0 10px 40px rgba(6, 95, 70, 0.15);
            "
          >
            <p
              style="
                font-size: 14px;
                color: #065f46;
                margin: 0 0 12px 0;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
              "
            >
              Your Access Code
            </p>

            <div
              style="
                font-size: 32px;
                font-weight: 700;
                color: #065f46;
                letter-spacing: 8px;
                margin: 8px 0;
                font-family: 'Courier New', monospace;
              "
            >
              123456
            </div>

            <p
              style="
                font-size: 12px;
                color: #6b7280;
                margin: 12px 0 0 0;
                font-style: italic;
              "
            >
              Keep this code secure and accessible
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div style="margin: 60px 0">
          <a
            href="https://waitlist-bay-kappa.vercel.app/"
            style="
              display: inline-block;
              padding: 18px 48px;
              background: linear-gradient(135deg, #065f46 0%, #047857 100%);
              color: #ffffff;
              text-decoration: none;
              border-radius: 50px;
              font-size: 16px;
              font-weight: 600;
              letter-spacing: 0.5px;
              box-shadow: 0 8px 32px rgba(6, 95, 70, 0.3);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            "
          >
            <span style="position: relative; z-index: 1"
              >Enter Yagso Collection</span
            >
          </a>

          <p style="font-size: 14px; color: #9ca3af; margin: 20px 0 0 0">
            Click above to access your exclusive jewelry collection
          </p>
        </div>

        <!-- Divider -->
        <div
          style="
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              #d1d5db,
              transparent
            );
            margin: 60px auto;
            width: 200px;
          "
        ></div>

        <!-- What's Next Section -->
        <div
          style="
            background: rgba(6, 95, 70, 0.03);
            border: 1px solid rgba(6, 95, 70, 0.1);
            border-radius: 12px;
            padding: 30px;
            margin: 40px 0;
            text-align: left;
            max-width: 500px;
            margin: 40px auto;
          "
        >
          <h3
            style="
              font-size: 18px;
              color: #065f46;
              margin: 0 0 16px 0;
              font-weight: 600;
              text-align: center;
            "
          >
            What Happens Next?
          </h3>

          <div style="display: flex; align-items: flex-start; margin: 12px 0">
            <span
              style="
                color: #065f46;
                font-size: 16px;
                margin-right: 12px;
                font-weight: bold;
              "
              >1.</span
            >
            <span style="color: #4b5563; font-size: 14px; line-height: 1.5"
              >Use your access code to unlock exclusive collections</span
            >
          </div>

          <div style="display: flex; align-items: flex-start; margin: 12px 0">
            <span
              style="
                color: #065f46;
                font-size: 16px;
                margin-right: 12px;
                font-weight: bold;
              "
              >2.</span
            >
            <span style="color: #4b5563; font-size: 14px; line-height: 1.5"
              >Browse our curated luxury jewelry pieces</span
            >
          </div>

          <div style="display: flex; align-items: flex-start; margin: 12px 0">
            <span
              style="
                color: #065f46;
                font-size: 16px;
                margin-right: 12px;
                font-weight: bold;
              "
              >3.</span
            >
            <span style="color: #4b5563; font-size: 14px; line-height: 1.5"
              >Receive priority notifications for new arrivals</span
            >
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        style="
          text-align: center;
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid rgba(6, 95, 70, 0.1);
        "
      >
        <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0">
          Thank you for choosing Yagso for your luxury jewelry needs
        </p>

        <p style="font-size: 12px; color: #9ca3af; margin: 0; line-height: 1.5">
          © 2025 Yagso. All rights reserved.<br />
          You received this email because you requested exclusive access to our
          collection.
        </p>

        <!-- Social Links Placeholder -->
        <div style="margin-top: 20px">
          <span style="color: #d1d5db; font-size: 12px"
            >Follow us for updates</span
          >
        </div>
      </div>
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
