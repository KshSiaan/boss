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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import SignIn from "./sign-in";
import JoinPopup from "./join-popup";

export default function Navbar() {
  const path = usePathname();

  return (
    <>
      <div className="h-16"></div>
      <nav className="fixed top-0 left-0 w-full h-16 border-b flex items-center px-12! bg-background z-30">
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
                  <Link
                    href="/become"
                    className={cn(path.includes("/become") && "text-primary")}
                  >
                    Become a Boss Pro
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-normal" noArrow>
                  Why Boss?
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4! w-[600px]! grid grid-cols-2 gap-6">
                  <div className="">
                    <p className="font-semibold mb-4 px-2">Overview</p>
                    <Link href="/about">
                      <div className="border border-transparent hover:border-gray-300 rounded-lg text-sm p-2">
                        <p className="font-medium">About Boss Pro</p>
                        <p className="text-sm pt-2">
                          Discover tools to find freelancers and manage projects
                          collaboratively
                        </p>
                      </div>
                    </Link>
                    <Link href="/boss-pro">
                      <div className="border border-transparent hover:border-gray-300 rounded-lg text-sm p-2">
                        <p className="font-medium">
                          What makes a Pro freelancer
                        </p>
                        <p className="text-sm pt-2">
                          See how we vet our freelancers for skills and
                          experience
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="">
                    <div className="">
                      <p className="font-semibold mb-4 px-2">Resources</p>
                      <Link href="/stories">
                        <div className="border border-transparent hover:border-gray-300 rounded-lg text-sm p-2">
                          <p className="font-medium">Success stories</p>
                          <p className="text-sm pt-2">
                            Read why companies are adopting Boss Pro
                          </p>
                        </div>
                      </Link>
                      <Link href="/help">
                        <div className="border border-transparent hover:border-gray-300 rounded-lg text-sm p-2">
                          <p className="font-medium">Help Center</p>
                          <p className="text-sm pt-2">
                            Can&apos;t find what you&apos;re looking for? We’re
                            here to help
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(path.includes("/contact") && "text-primary")}
                  >
                    Contact Sales
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-end gap-2 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">Sign In</Button>
            </DialogTrigger>
            <DialogContent className="min-w-[90dvw] rounded-4xl px-6 pb-6">
              <DialogHeader className="hidden">
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <SignIn />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="">JOIN</Button>
            </DialogTrigger>
            <DialogContent className="min-w-[90dvw] rounded-4xl px-6 pb-6">
              <DialogHeader className="hidden">
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <JoinPopup />
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </>
  );
}
