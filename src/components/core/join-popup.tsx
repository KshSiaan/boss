import React from "react";
import { Button } from "../ui/button";
import { AnimatedToggle } from "./extra/type-signer";
export default function JoinPopup() {
  return (
    <div className="w-full h-[70dvh] lg:h-[80dvh] grid lg:grid-cols-2 gap-6">
      <div
        className="w-full h-full rounded-l-3xl rounded-r-md overflow-hidden bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url("/image/join.jpg")` }}
      >
        <div className="w-full h-full bg-amber-600/30"></div>
      </div>
      <div className="flex flex-col h-full w-full justify-between">
        <div className="">
          <h1 className="capitalize text-xl lg:text-4xl font-medium text-primary">
            Welcome
          </h1>
          <h1 className="capitalize text-xl lg:text-4xl mb-6 lg:mb-12 font-medium">
            Create your free Boss Account
          </h1>
        </div>
        <div className="flex justify-center items-center w-full">
          <AnimatedToggle />
        </div>
        <div className="w-full space-y-6">
          <Button className="w-full" size="xlg">
            Continue with E mail
          </Button>
          <div className="w-full text-center">OR</div>
          <Button
            className="w-full bg-foreground hover:bg-foreground/80"
            size="xlg"
          >
            Continue with Google
          </Button>
          <p className="text-center">
            Already registered to Boss Pro?
            <Button variant="link" className="underline text-primary">
              Sign In
            </Button>
          </p>
        </div>
        <p className="text-muted-foreground mt-12 text-xs">
          * By selecting Agree and Get Started, I agree to Seen&apos;s Terms of
          use and acknowledge Seen’s Privacy policy and Coastal Community Bank’s
          Privacy notice.
          <br />
          <br />I agree that Coastal Community Bank may share my information
          with Seen for marketing, unless I opt out by emailing help@seen.com.
        </p>
      </div>
    </div>
  );
}
