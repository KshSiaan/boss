import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-dvh min-w-dvw flex justify-center items-center">
      <Card className="w-[50dvw]">
        <CardHeader className="mb-12">
          <CardTitle className="text-4xl text-center">Verify OTP</CardTitle>
          <CardDescription className="text-center">
            Enter the code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex justify-center items-center">
          <InputOTP maxLength={6}>
            <InputOTPSlot index={0} className="rounded-full! size-14" />
            <InputOTPSlot index={1} className="rounded-full! size-14" />
            <InputOTPSlot index={2} className="rounded-full! size-14" />
            <InputOTPSlot index={3} className="rounded-full! size-14" />
            <InputOTPSlot index={4} className="rounded-full! size-14" />
            <InputOTPSlot index={5} className="rounded-full! size-14" />
          </InputOTP>
        </CardContent>
        <CardFooter className="flex justify-center items-center mt-12">
          <Button size={"lg"} className="h-auto py-2 text-lg uppercase" asChild>
            <Link href={"/reset"}>Verify OTP</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
