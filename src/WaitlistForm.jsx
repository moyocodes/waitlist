import { useState } from "react";
import {
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
  Gem,
  Star,
} from "lucide-react";

function generatePasscode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [focusedInput, setFocusedInput] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
        loginAttempt: 0,
      });

      // 2. Send Email
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, passcode }),
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  const sparkles = Array.from({ length: 30 }, (_, i) => i);

  if (success) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://waitlist-bay-kappa.vercel.app/video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-emerald-800/50 to-emerald-900/70"></div>
        </div>

        {/* Success Sparkles */}
        {sparkles.map((i) => (
          <div
            key={i}
            className="absolute z-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "2s",
            }}
          >
            <Star className="w-3 h-3 text-emerald-300" />
          </div>
        ))}

        <div className="min-h-screen flex items-center justify-center p-8 relative z-10">
          <div className="text-center max-w-2xl transform transition-all duration-1000 ease-out">
            <div className="w-32 h-32 mx-auto mb-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-6xl md:text-7xl font-light bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent mb-8">
              Welcome to Yagso
            </h1>

            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              Your exclusive passcode has been sent.
              <br />
              Prepare to discover extraordinary luxury.
            </p>

            <button
              onClick={() => {
                setSuccess(false);
                setEmail("");
                setShowForm(false);
              }}
              className="px-12 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-lg font-medium rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              Join With Another Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://waitlist-bay-kappa.vercel.app/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-emerald-900/20 to-black/40"></div>
      </div>

      {/* Floating Gems */}
      {sparkles.slice(0, 15).map((i) => (
        <div
          key={i}
          className="absolute opacity-20 z-10 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        >
          <Gem className="w-6 h-6 text-emerald-300" />
        </div>
      ))}

      {/* Main Content */}
      <div className="min-h-screen flex flex-col relative z-10">
        {/* Header Section */}
        <div
          className="flex-1 flex flex-col items-center justify-center text-center px-2 py-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          {/* Logo */}
          <div className="mb-3 transform transition-all duration-1000 ease-out">
            <img
              src="https://waitlist-bay-kappa.vercel.app/logo.png"
              alt="Yagso"
              className="h-32 md:h-48 object-contain filter drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight drop-shadow-2xl">
            Exclusive
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Collection
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-100 mb-16 max-w-3xl leading-relaxed drop-shadow-lg">
            Be among the first to discover our most coveted pieces.
            <br />
            Limited access. Unlimited luxury.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowForm(true)}
            className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-lg font-medium rounded-full shadow-2xl hover:shadow-emerald-200/30 transition-all duration-500 relative overflow-hidden group transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center space-x-3">
              <span>Request Exclusive Access</span>
              <Gem className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Form Overlay - Full Screen */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-900/95 to-emerald-800/90 backdrop-blur-xl animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl font-light transition-all duration-300"
            >
              ×
            </button>

            <div className="max-w-lg w-full mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  Join Our Elite Circle
                </h2>
                <p className="text-lg text-emerald-100 leading-relaxed">
                  Enter your email to receive your exclusive access code and be
                  notified of our most precious releases.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <div
                    className={`relative transition-all duration-300 ${
                      focusedInput ? "scale-105" : "scale-100"
                    }`}
                  >
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                      <Mail
                        className={`w-6 h-6 transition-colors duration-300 ${
                          focusedInput ? "text-emerald-400" : "text-emerald-200"
                        }`}
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedInput(true)}
                      onBlur={() => setFocusedInput(false)}
                      className="w-full pl-16 pr-6 py-5 bg-white/10 border-2 border-emerald-200/30 rounded-full focus:border-emerald-300 focus:bg-white/20 focus:outline-none transition-all duration-300 text-white placeholder-emerald-200 text-lg backdrop-blur-sm"
                      required
                    />

                    <div
                      className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full transition-all duration-300 ${
                        focusedInput ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full py-5 bg-gradient-to-r from-white to-emerald-50 text-emerald-800 font-semibold rounded-full shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-emerald-200/50 text-lg relative overflow-hidden hover:scale-105 disabled:hover:scale-100"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-3">
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Securing Your Access...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <span>Reserve My Exclusive Access</span>
                      <span className="animate-pulse">→</span>
                    </div>
                  )}
                </button>

                {error && (
                  <div className="flex items-center justify-center space-x-2 text-red-300 bg-red-900/30 p-4 rounded-2xl backdrop-blur-sm animate-fade-in">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}
              </form>

              <div className="text-center mt-8 text-emerald-200 text-sm">
                <p>
                  By joining, you agree to receive exclusive updates about our
                  luxury collections.
                  <br />
                  Your privacy is as precious as our jewelry.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-30 z-20">
        <div className="animate-spin" style={{ animationDuration: "30s" }}>
          <Gem className="w-16 h-16 text-emerald-300" />
        </div>
      </div>

      <div className="absolute bottom-10 left-10 opacity-40 z-20">
        <div
          className="animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        >
          <Star className="w-12 h-12 text-emerald-300" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
