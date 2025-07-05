import Image from "next/image";
import { NAV_ITEMS } from "./components/NavConfig";
import { NavItem } from "./components/NavItem";

export default function HomePage() {
  // Use a realistic avatar from i.pravatar.cc
  const profileUrl = "https://i.pravatar.cc/120?img=3";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation - Desktop Circular, Mobile Stacked */}
      <div className="relative w-[340px] h-[340px] hidden md:block">
        {/* Circular navigation */}
        {NAV_ITEMS.map((item, i) => {
          const angle = (i / NAV_ITEMS.length) * 2 * Math.PI;
          const radius = 130;
          const x = Math.cos(angle) * radius + 170 - 32;
          const y = Math.sin(angle) * radius + 170 - 32;
          return (
            <div
              key={item.label}
              style={{ position: "absolute", left: x, top: y }}
            >
              <NavItem item={item} />
            </div>
          );
        })}
        {/* Center profile photo (again for layering) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src={profileUrl}
            alt="Profile Photo"
            width={120}
            height={120}
            className="rounded-full border-4 border-blue-200 shadow-xl bg-white"
            priority
          />
        </div>
      </div>
      {/* Mobile stacked navigation */}
      <div className="flex flex-col gap-4 w-full max-w-xs md:hidden mt-4">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="w-full">
            <NavItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
