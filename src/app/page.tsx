"use client";
import Image from "next/image";
import { NAV_ITEMS } from "./components/NavConfig";
import { NavItem } from "./components/NavItem";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  // Use a realistic avatar from i.pravatar.cc
  const profileUrl = "/profile.png";

  // Animated rotation state
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number | null>(null);

  // For mobile nav item tap wobble
  const [wobbleIndex, setWobbleIndex] = useState<number | null>(null);

  // Animation variants for pop-in, floating, and wobble (merged)
  const mobileNavVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
        delay: custom * 0.08,
      },
    }),
    floating: {
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    wobble: {
      rotate: [0, -15, 12, -8, 6, 0],
      transition: { duration: 0.5, type: "tween" as const },
    },
  };

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      // Rotate 20 degrees per second
      setRotation((prev) => prev + (20 * delta) / 1000);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-main-gradient overflow-hidden">
      {/* Navigation - Desktop Circular, Mobile Stacked */}
      <div className="relative w-[800px] h-[800px] hidden md:block">
        {/* Circular navigation with animated rotation */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {NAV_ITEMS.map((item, i) => {
            const angle = (i / NAV_ITEMS.length) * 2 * Math.PI;
            const radius = 250;
            const center = 400;
            const itemSize = 120;
            const x = Math.cos(angle) * radius + center - itemSize / 2;
            const y = Math.sin(angle) * radius + center - itemSize / 2;
            return (
              <div
                key={item.label}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  // Counter-rotate to keep upright
                  transform: `rotate(${-rotation}deg)`,
                }}
              >
                <NavItem item={item} large />
              </div>
            );
          })}
        </div>
        {/* Center profile photo (again for layering) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src={profileUrl}
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full border-8 border-blue-200 shadow-2xl bg-white"
            priority
          />
        </div>
      </div>
      {/* Mobile stacked navigation */}
      <div className="flex flex-col items-center w-full max-w-sm md:hidden mt-8">
        <div className="mb-6">
          <Image
            src={profileUrl}
            alt="Profile Photo"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-200 shadow-xl bg-white"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {NAV_ITEMS.map((item, i) => {
            // Glow effect on tap
            const isGlowing = wobbleIndex === i;
            return (
              <motion.div
                key={item.label}
                className="w-full flex justify-center"
                custom={i}
                initial="hidden"
                animate={wobbleIndex === i ? "wobble" : ["visible", "floating"]}
                variants={mobileNavVariants}
                onTap={() => {
                  setWobbleIndex(i);
                  setTimeout(() => setWobbleIndex(null), 500);
                }}
                style={
                  isGlowing
                    ? {
                        boxShadow:
                          "0 0 24px 8px #60a5fa, 0 0 48px 16px #a5b4fc",
                      }
                    : {}
                }
              >
                <NavItem item={item} large />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
