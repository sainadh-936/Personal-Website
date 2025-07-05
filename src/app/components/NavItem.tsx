import React from "react";
import Link from "next/link";
import type { NavItem as NavItemType } from "./NavConfig";
import {
  UserOutlined,
  MailOutlined,
  InstagramOutlined,
  FolderOpenOutlined,
  FileTextOutlined,
  BookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const ICONS: Record<string, React.ReactNode> = {
  user: <UserOutlined style={{ fontSize: 32 }} />,
  mail: <MailOutlined style={{ fontSize: 32 }} />,
  instagram: <InstagramOutlined style={{ fontSize: 32 }} />,
  folder: <FolderOpenOutlined style={{ fontSize: 32 }} />,
  file: <FileTextOutlined style={{ fontSize: 32 }} />,
  book: <BookOutlined style={{ fontSize: 32 }} />,
  linkedin: <LinkedinOutlined style={{ fontSize: 32 }} />,
};

export function NavItem({ item }: { item: NavItemType }) {
  const icon = ICONS[item.icon] || ICONS["user"];
  const linkProps = item.external
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: item.href };

  return (
    <nav>
      <Link
        {...linkProps}
        className="flex flex-col items-center group transition-transform duration-200 hover:scale-110"
      >
        <span className="mb-1 text-black group-hover:text-black transition-colors duration-200">
          {icon}
        </span>
        <span className="text-xs font-semibold text-black group-hover:text-white transition-colors duration-200 bg-black-50 group-hover:bg-black rounded px-2 py-1 shadow-sm">
          {item.label}
        </span>
      </Link>
    </nav>
  );
}
