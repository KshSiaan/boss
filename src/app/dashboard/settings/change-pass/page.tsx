import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="w-full space-y-4 mt-6">
          <Label className="font-semibold">New Password:</Label>
          <Input className="rounded-full" />
        </div>
        <div className="w-full space-y-4 mt-6">
          <Label className="font-semibold">Confirm Password:</Label>
          <Input className="rounded-full" />
        </div>
        <div className="w-full grid grid-cols-2 gap-2 mt-6">
          <Button variant={"outline"} asChild>
            <Link href={"/dashboard/settings"}>Go back</Link>
          </Button>
          <Button>Reset Password</Button>
        </div>
      </div>
    </main>
  );
}
