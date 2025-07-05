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
    label: "Github",
    href: "https://github.com/sainadh-936",
    icon: "github",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jsn_manhwa/",
    icon: "instagram",
    external: true,
  },
  { label: "Projects", href: "/projects", icon: "folder" },
  { label: "Resume", href: "/resume", icon: "file", external: true },
  { label: "Blog", href: "/blog", icon: "book" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sainadh-jammigumpala-a7a9a1196/",
    icon: "linkedin",
    external: true,
  },
];
