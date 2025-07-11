import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const hireTalentLinks = [
  { label: "Hire Freelance Developers", to: "#" },
  { label: "Hire Freelance Designers", to: "#" },
  { label: "Hire Freelance Finance Experts", to: "#" },
  { label: "Hire Freelance Project Managers", to: "#" },
  { label: "Hire Freelance Product Managers", to: "#" },
  { label: "Hire Freelance Marketers", to: "#" },
];

const aboutLinks = [
  { label: "Contact Us", to: "/contact" },
  { label: "Press Center", to: "#" },
  { label: "Careers", to: "#" },
  { label: "FAQ", to: "#" },
  { label: "Community", to: "#" },
  { label: "About Us", to: "#" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", to: "#" },
  { icon: Facebook, label: "Facebook", to: "#" },
  { icon: Linkedin, label: "LinkedIn", to: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-12 px-4 lg:px-[7%]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-6xl text-background font-medium">
              BOSS<span className="text-sm align-top">™</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>Email: help@seen.com</p>
              <p>Phone: 1-833-923-7336</p>
              <p>Available Monday - Friday: 9:00 a.m. - 9:00 p.m. ET</p>
              <p>& Saturday - 10:00 a.m. - 7:30 p.m. ET</p>
              <p>Location: 1193 W 2400 S West Valley City, UT 84119</p>
            </div>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map(({ icon: Icon, label, to }, i) => (
                <Link
                  key={i}
                  href={to}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Icon size={24} />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Hire Talent */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-background mb-12">
              Hire Talent
            </h3>
            <nav className="space-y-3">
              {hireTalentLinks.map(({ label, to }, i) => (
                <Link
                  key={i}
                  href={to}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-background mb-12">
              About
            </h3>
            <nav className="space-y-3">
              {aboutLinks.map(({ label, to }, i) => (
                <Link
                  key={i}
                  href={to}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <hr className="border-t border-muted-foreground mt-[100px]" />
      </div>
    </footer>
  );
}
