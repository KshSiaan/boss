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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import SignIn from "./sign-in";
import JoinPopup from "./join-popup";

export default function Navbar() {
  const path = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <>
      <div className="h-16"></div>
      <nav className="fixed top-0 left-0 w-full h-16 border-b flex items-center px-4 md:px-12 bg-background z-30">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SheetHeader className="p-6 pb-4 border-b">
                <SheetTitle className="text-left text-xl font-semibold text-primary">
                  BOSS
                </SheetTitle>
              </SheetHeader>
              <div className="p-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-4">
                  <Link
                    href="/become"
                    className={cn(
                      "block py-2 text-base font-medium transition-colors hover:text-primary",
                      path.includes("/become") && "text-primary"
                    )}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Become a Boss Pro
                  </Link>

                  {/* Why Boss Collapsible */}
                  <Collapsible className="space-y-2">
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-base font-medium hover:text-primary [&[data-state=open]>svg]:rotate-90">
                      Why Boss?
                      <ChevronRight className="h-4 w-4 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-3 pl-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-sm mb-3 text-muted-foreground">
                            Overview
                          </p>
                          <div className="space-y-2">
                            <Link
                              href="/about"
                              className="block p-3 rounded-lg border border-transparent hover:border-gray-300 transition-colors"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              <p className="font-medium text-sm">
                                About Boss Pro
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Discover tools to find freelancers and manage
                                projects collaboratively
                              </p>
                            </Link>
                            <Link
                              href="/boss-pro"
                              className="block p-3 rounded-lg border border-transparent hover:border-gray-300 transition-colors"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              <p className="font-medium text-sm">
                                What makes a Pro freelancer
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                See how we vet our freelancers for skills and
                                experience
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-3 text-muted-foreground">
                            Resources
                          </p>
                          <div className="space-y-2">
                            <Link
                              href="/stories"
                              className="block p-3 rounded-lg border border-transparent hover:border-gray-300 transition-colors"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              <p className="font-medium text-sm">
                                Success stories
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Read why companies are adopting Boss Pro
                              </p>
                            </Link>
                            <Link
                              href="/help"
                              className="block p-3 rounded-lg border border-transparent hover:border-gray-300 transition-colors"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              <p className="font-medium text-sm">Help Center</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Can&apos;t find what you&apos;re looking for?
                                We&apos;re here to help
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Link
                    href="/contact"
                    className={cn(
                      "block py-2 text-base font-medium transition-colors hover:text-primary",
                      path.includes("/contact") && "text-primary"
                    )}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Contact Sales
                  </Link>
                </div>

                {/* Auth Buttons */}
                <div className="space-y-3 pt-6 border-t">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        Sign In
                      </Button>
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
                      <Button className="w-full">JOIN</Button>
                    </DialogTrigger>
                    <DialogContent className="min-w-[90dvw] rounded-4xl px-6 pb-6">
                      <DialogHeader className="hidden">
                        <DialogTitle></DialogTitle>
                      </DialogHeader>
                      <JoinPopup />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Left Side - Logo */}
        <div className="flex-1 md:flex-1">
          <Link
            href="/"
            className="text-xl font-semibold text-primary ml-4 md:ml-0"
          >
            BOSS
          </Link>
        </div>

        {/* Center - Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex gap-6 justify-center text-sm">
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
                            Can&apos;t find what you&apos;re looking for?
                            We&apos;re here to help
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

        {/* Right Side - Desktop Auth Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 justify-end gap-2 items-center">
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
