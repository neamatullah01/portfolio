import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-8xl md:text-[150px] font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm mb-2 md:mb-6 leading-tight">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Oops! It seems you've ventured into the unknown. The page you're
          looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="group flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
