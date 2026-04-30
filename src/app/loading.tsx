export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing rings */}
        <div className="absolute w-24 h-24 md:w-32 md:h-32 border-t-2 border-r-2 border-purple-500 rounded-full animate-spin" />
        <div
          className="absolute w-20 h-20 md:w-28 md:h-28 border-b-2 border-l-2 border-cyan-400 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        />

        {/* Inner Logo */}
        <div className="flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full w-16 h-16 md:w-20 md:h-20 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          <svg
            viewBox="0 0 40 28"
            width="32"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            {/* N */}
            <path
              d="M3 24 L3 4 L17 24 L17 4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900 dark:text-white"
            />
            {/* U */}
            <path
              d="M17 4 L17 17 Q17 25 27 25 Q37 25 37 17 L37 4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900 dark:text-white"
            />
            <circle cx="17" cy="4" r="2" fill="#8b5cf6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
