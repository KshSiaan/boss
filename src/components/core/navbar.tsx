"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b flex items-center px-12!">
      {/* Left Side */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-semibold text-primary">
          BOSS
        </Link>
      </div>

      {/* Center */}
      <div className="flex gap-6 justify-center text-sm">
        <NavigationMenu>
          <NavigationMenuList className="gap-6 justify-center text-sm">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/become" className="">
                  Become a Boss Pro
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal" noArrow>
                Why Boss?
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4! w-[600px]! grid grid-cols-2 gap-6">
                <ul className="grid gap-2 w-full">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/features" className="block hover:underline">
                        Features
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/testimonials"
                        className="block hover:underline"
                      >
                        Testimonials
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/pricing" className="block hover:underline">
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
                <ul className="grid gap-2 w-full">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/features" className="block hover:underline">
                        Features
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/testimonials"
                        className="block hover:underline"
                      >
                        Testimonials
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/pricing" className="block hover:underline">
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="hover:underline">
                  Contact Sales
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-end gap-2 items-center">
        <Button variant="ghost">Log in</Button>
        <Button className="">JOIN</Button>
      </div>
    </nav>
  );
}
