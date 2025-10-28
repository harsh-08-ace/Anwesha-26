// src/pages/register/Step5Success.jsx
import React, { useEffect, useState } from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function Step5Success({ anweshaId }) {
  const { currentUser } = useAuthUser();
  const navigate = useNavigate();
  const displayId = anweshaId || currentUser?.anweshaId || "N/A";

  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/login");
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center mb-14 px-6">
      <div className="rounded-3xl shadow-2xl border p-10 w-full max-w-md text-center animate-fade-in bg-white/80 backdrop-blur-lg">
        
        {/* Heading */}
        <h3 className="text-5xl font-extrabold mb-6 bg-gradient-to-l text-[#433D7F] bg-clip-text ">
          Registration Successful!
        </h3>

        {/* Success Icon */}
        <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-green-500/10 border border-green-500 mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>

        {/* Anwesha ID */}
        <p className="text-xl text-gray-700">Your unique Anwesha ID is:</p>
        <p className="text-4xl font-mono font-bold text-yellow-600 mt-3 tracking-wide">
          {displayId}
        </p>

        {/* Save Notice */}
        <p className="mt-3 text-gray-500 text-sm italic">
          ⚠️ Please save this ID for future reference.
        </p>

        {/* Redirect Info */}
        <div className="mt-8 bg-gray-100 px-5 py-3 rounded-xl shadow-inner border border-gray-200">
          <p className="text-gray-700">
            Redirecting to your <span className="font-semibold text-black text-lg">Login Page</span> in{" "}
            <span className="text-yellow-600 font-bold">{countdown}</span> seconds...
          </p>
        </div>

        {/* Manual Redirect Button */}
        <button
          onClick={() => navigate("/login")}
          className="mt-8 px-6 py-3 w-full text-2xl tracking-widest bg-[url('/bg_2_cropped.jpg')] bg-cover bg-bottom rounded-xl text-white mb-4 hover:scale-102"
        >
          Go to Login Page Now
        </button>
      </div>
    </div>
  );
}
