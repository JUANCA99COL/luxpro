import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex h-48 w-72 items-center justify-center">
            {/* smoke puffs rising from the wheel */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full bg-gradient-to-t from-zinc-400/50 via-zinc-300/30 to-transparent blur-xl"
                style={{
                  width: `${34 + i * 6}px`,
                  height: `${34 + i * 6}px`,
                  marginLeft: `${-8 - i * 4}px`,
                }}
                animate={{
                  y: [0, -70 - i * 12],
                  x: [0, -10 - i * 6],
                  scale: [0.6, 1.6 + i * 0.2],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 1.8 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.4,
                }}
              />
            ))}

            {/* spinning wheel */}
            <motion.svg
              width="92"
              height="92"
              viewBox="0 0 92 92"
              className="relative z-10 drop-shadow-[0_0_16px_rgba(239,68,68,0.55)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="46" cy="46" r="41" stroke="#e5e5e5" strokeWidth="3" fill="none" />
              <circle cx="46" cy="46" r="34" stroke="#3f3f46" strokeWidth="6" fill="#18181b" />
              <circle cx="46" cy="46" r="9" fill="#e5e5e5" />
              <circle cx="46" cy="46" r="3.5" fill="#18181b" />
              {Array.from({ length: 5 }).map((_, i) => {
                const angle = (i * 72 * Math.PI) / 180;
                const x2 = 46 + 30 * Math.cos(angle);
                const y2 = 46 + 30 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1="46"
                    y1="46"
                    x2={x2}
                    y2={y2}
                    stroke="#e5e5e5"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                );
              })}
            </motion.svg>
          </div>

          <motion.p
            className="mt-6 text-xs uppercase tracking-[0.4em] text-zinc-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
