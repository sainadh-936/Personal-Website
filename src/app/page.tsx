import Image from "next/image";
import { NAV_ITEMS } from "./components/NavConfig";
import { NavItem } from "./components/NavItem";

export default function HomePage() {
  // Use a realistic avatar from i.pravatar.cc
  const profileUrl = "/profile.png";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-main-gradient">
      {/* Navigation - Desktop Circular, Mobile Stacked */}
      <div className="relative w-[480px] h-[480px] hidden md:block">
        {/* Circular navigation */}
        {NAV_ITEMS.map((item, i) => {
          const angle = (i / NAV_ITEMS.length) * 2 * Math.PI;
          const radius = 200;
          const x = Math.cos(angle) * radius + 240 - 48;
          const y = Math.sin(angle) * radius + 240 - 48;
          return (
            <div
              key={item.label}
              style={{ position: "absolute", left: x, top: y }}
            >
              <NavItem item={item} large />
            </div>
          );
        })}
        {/* Center profile photo (again for layering) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src={profileUrl}
            alt="Profile Photo"
            width={200}
            height={200}
            className="rounded-full border-8 border-blue-200 shadow-2xl bg-white"
            priority
          />
        </div>
      </div>
      {/* Mobile stacked navigation */}
      <div className="flex flex-col gap-6 w-full max-w-sm md:hidden mt-8">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="w-full">
            <NavItem item={item} large />
          </div>
        ))}
      </div>
    </div>
  );
}
