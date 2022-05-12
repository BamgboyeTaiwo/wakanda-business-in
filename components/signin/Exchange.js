import Image from "next/image";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export const ExchangeInfo = () => {
  return (
    <div className="place-self-center">
      <AnimatePresence initial={false}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <Image
            src="/splash-banner.png"
            width={600}
            height={550}
            alt="Picture of Exchange"
          />
        </motion.button>
      </AnimatePresence>
    </div>
  );
};
