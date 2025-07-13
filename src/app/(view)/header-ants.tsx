"use client";

import Image from "next/image";
import React, { JSX } from "react";
import { motion } from "motion/react"; // ✅ correct import

const floatTransition = {
  y: {
    duration: 10,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const, // ✅ FIXED HERE
  },
};

export default function HeaderAnts(): JSX.Element {
  return (
    <div className="absolute h-full w-full top-0 left-0 -z-10 overflow-hidden hidden lg:block">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ ...floatTransition.y, delay: 0 }}
        className="absolute w-[200px] top-[16.66%] left-[14.28%]"
      >
        <Image
          height={266}
          width={458}
          alt="ant-1"
          src="/resource/Frame 79.svg"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ ...floatTransition.y, delay: 1 }}
        className="absolute w-[200px] top-1/2 left-[14.28%]"
      >
        <Image
          height={200}
          width={400}
          alt="ant-2"
          src="/resource/Frame 80.svg"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ ...floatTransition.y, delay: 0.5 }}
        className="absolute w-[200px] top-[16.66%] right-[14.28%]"
      >
        <Image
          height={400}
          width={400}
          alt="ant-3"
          src="/resource/Frame 81.svg"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ ...floatTransition.y, delay: 1.5 }}
        className="absolute w-[450px] top-1/2 right-0 xl:right-[12.5%]"
      >
        <Image
          height={100}
          width={500}
          alt="ant-4"
          src="/resource/Frame 84.svg"
        />
      </motion.div>
    </div>
  );
}
