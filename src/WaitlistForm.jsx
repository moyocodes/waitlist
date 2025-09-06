import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";

// async function sendWelcomeEmail(email, passcode) {
//   try {
//     const res = await axios.post(
//       "/api/send-email",
//       {
//         from: "onboarding@resend.dev", // custom sender
//         to: email,
//         subject: "🎉 Welcome to the Waitlist",
//         html: `
//           <div style="font-family: Arial, sans-serif; padding: 20px;">
//             <h1>Welcome!</h1>
//             <p>Thanks for joining our waitlist . Your unique passcode is:</p>
//             <h2 style="color: #4F46E5;">${passcode}</h2>
//             <p>Keep it safe — you’ll need it laternn!</p>
//           </div>
//         `,
//       },
//       {
//         headers: {
//           Authorization: `Bearer re_Y8cQdW6f_BzDxsh8XAoCBDBfrj6LT4u3Q`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("✅ Email sent:", res.data);
//   } catch (error) {
//     console.error("❌ Email failed:", error.response?.data || error.message);
//   }
// }
function generatePasscode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const passcode = generatePasscode();

      // 1. Save to Firestore
      await addDoc(collection(db, "waitlist"), {
        email,
        passcode,
        createdAt: new Date(),
      });

      // 2. Send Email
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, passcode }),
      });
      
      setMessage("✅ Check your inbox for your passcode!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white p-2 rounded"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
