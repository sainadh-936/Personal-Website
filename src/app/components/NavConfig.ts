export type NavItem = {
  label: string;
  href: string;
  icon: string; // icon name or path
  external?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About Me", href: "/about", icon: "user" },
  { label: "Contact Me", href: "/contact", icon: "mail" },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: "instagram",
    external: true,
  },
  { label: "Projects", href: "/projects", icon: "folder" },
  { label: "Resume", href: "/resume", icon: "file" },
  { label: "Blog", href: "/blog", icon: "book" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: "linkedin",
    external: true,
  },
];
