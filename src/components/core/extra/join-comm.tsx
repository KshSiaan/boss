import { Button } from "@/components/ui/button";
import React from "react";

export default function JoinComm() {
  return (
    <div className="mt-12 bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] p-6 lg:p-24 grid lg:grid-cols-2 gap-6">
      <h1 className="text-3xl lg:text-6xl font-medium text-background">
        Join Our Community of <br />
        Top Freelancers
      </h1>
      <div className="text-background">
        <h5 className="text-lg lg:text-xl">
          Sign up now to start working on high- <br />
          quality projects and earn competitive rates
        </h5>
        <p className="text-xs mt-2">
          Create your profile in minutes and connect with clients worldwide
        </p>
        <div className="mt-12 items-center gap-6 grid lg:grid-cols-2">
          <Button className="w-full bg-background text-foreground" size="xlg">
            EXPLORE SERVICE
          </Button>
          <Button
            className="w-full bg-transparent! border-background"
            variant="outline"
            size="xlg"
          >
            JOIN AS A PRO
          </Button>
        </div>
      </div>
    </div>
  );
}
