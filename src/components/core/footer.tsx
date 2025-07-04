import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground py-12 px-4 lg:px-[7%]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Company Info */}
          <div className="space-y-6">
            <div className="text-6xl text-background mb-18 font-medium">
              BOSS<span className="text-sm align-top">™</span>
            </div>

            <div className="space-y-2 text-gray-300">
              <p>Email: help@seen.com</p>
              <p>Phone: 1-833-923-7336</p>
              <p>Available Monday - Friday: 9:00 a.m. - 9:00 p.m. ET</p>
              <p>& Saturday - 10:00 a.m. - 7:30 p.m. ET</p>
              <p>Location: 1193 W 2400 S West Valley City, UT 84119</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4 ">
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Middle Section - Hire Talent */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-background mb-12">
              Hire Talent
            </h3>
            <nav className="space-y-3">
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Hire Freelance Developers
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Hire Freelance Designers
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Hire Freelance Finance Experts
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Hire Freelance Project Managers
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Hire Freelance Product Managers
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Hire Freelance Marketers
              </Link>
            </nav>
          </div>

          {/* Right Section - About */}
          <div className="space-y-6 ">
            <h3 className="text-xl font-semibold text-background mb-12">
              About
            </h3>
            <nav className="space-y-3">
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Press Center
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Community
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </nav>
          </div>
        </div>
        <hr className="border-t border-muted-foreground mt-[100px]" />
      </div>
    </footer>
  );
}
