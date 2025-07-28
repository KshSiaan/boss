import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-dvh min-w-dvw flex justify-center items-center">
      <Card className="w-[50dvw]">
        <CardHeader className="mb-12">
          <CardTitle className="text-4xl text-center">Reset Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label>New Password:</Label>
          <Input className="rounded-full" />
          <Label>Confirm Password:</Label>
          <Input className="rounded-full" />
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button size={"lg"} className="h-auto py-2 text-lg uppercase" asChild>
            <Link href={"/"}>CONFIRM & LOGIN</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
