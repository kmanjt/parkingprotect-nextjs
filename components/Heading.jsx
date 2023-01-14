import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Heading(title) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            duration: 3,
            bounce: 0.5,
          }}
        >
          <h1 className="lg:text-7xl text-5xl text-white font-bold">
            {title.title}.
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
