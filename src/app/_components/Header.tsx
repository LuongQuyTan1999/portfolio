"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION_LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about-me", label: "about-me" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="top-0 z-50 fixed flex justify-center bg-[#282C33] pt-8 pb-4 w-full">
      <div className="flex justify-between items-center w-full container">
        <div className="font-bold">Jackson</div>

        <ul className="flex items-center gap-4">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-background transition-colors ${
                    isActive ? " text-background font-medium" : "text-secondary"
                  }`}
                >
                  <span className="text-primary">#</span>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="top-0 left-4 absolute flex flex-col justify-center items-center gap-2 h-[311px]">
        <div className="bg-background w-[1px] h-[191px]" />
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex justify-center items-center w-8 h-8">
            <Mail />
          </Link>

          <Link href="/" className="flex justify-center items-center w-8 h-8">
            <Github />
          </Link>

          <Link href="/" className="flex justify-center items-center w-8 h-8">
            <Linkedin />
          </Link>
        </div>
      </div>
    </header>
  );
}
