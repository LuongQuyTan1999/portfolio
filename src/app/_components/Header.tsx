"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION_LINKS = [
  { href: "/", label: "home" },
  { href: "/works", label: "works" },
  { href: "/about-me", label: "about-me" },
  { href: "/contacts", label: "contacts" },
];

export default function Header() {
  const pathname = usePathname();
  console.log({ pathname });

  return (
    <header className="flex justify-between items-center pt-8 pb-4 container">
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
    </header>
  );
}
