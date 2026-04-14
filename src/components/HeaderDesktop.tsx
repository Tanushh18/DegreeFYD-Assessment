"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Search,
  User,
  ChevronDown,
  Globe,
} from "lucide-react";

export default function Header() {
  const comingSoon = () => alert("🚧 Feature coming soon!");

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-6 md:px-10 py-2 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-5">
          <a
            href="tel:9306508369"
            className="flex items-center gap-2 hover:text-gray-700 transition-colors"
          >
            <Phone size={13} />
            <span>9306508369</span>
          </a>
          <a
            href="mailto:example@degreefyd.com"
            className="flex items-center gap-2 hover:text-gray-700 transition-colors"
          >
            <Mail size={13} />
            <span>example@degreefyd.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-gray-400">
            Connect with us on your Favorite Socials –
          </span>
          <div className="flex items-center gap-2">
            <SocialIcon href="#" label="Website">
              <Globe size={13} />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200 px-6 md:px-10 h-16 flex items-center gap-6 md:gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <LogoIcon />
          <span className="text-xl font-bold text-gray-900">
            Degree<span className="text-orange-500">FYD</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          <NavItem label="Universities" onClick={comingSoon} />
          <NavItem label="Courses" onClick={comingSoon} />
          <NavItem label="More" onClick={comingSoon} />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={comingSoon}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-700 font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Regular
            <ChevronDown size={14} className="text-gray-500" />
          </button>

          <button
            onClick={comingSoon}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm text-gray-700 font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Search size={14} />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            onClick={comingSoon}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-white font-medium bg-[#1e3a5f] hover:bg-[#162d4a] transition-colors"
          >
            <User size={14} />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors"
    >
      {label}
      <ChevronDown size={14} className="text-gray-400" />
    </button>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
    >
      {children}
    </a>
  );
}

function LogoIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#fff3ed" />
      <path
        d="M10 28 Q14 12 20 10 Q26 12 30 28"
        stroke="#f97316"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M15 28 Q18 20 20 18 Q22 20 25 28"
        stroke="#f97316"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="20" cy="10" r="2.5" fill="#f97316" />
      <path
        d="M8 30 h24"
        stroke="#1e3a5f"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
