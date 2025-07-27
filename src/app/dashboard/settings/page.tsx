import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="size-[200px] relative">
          <Avatar className="size-[200px]">
            <AvatarImage src={"https://avatar.iran.liara.run/public"} />
            <AvatarFallback>UI</AvatarFallback>
          </Avatar>
          <Button
            size={"icon"}
            className="bottom-3 right-3 absolute rounded-full"
            variant={"outline"}
          >
            <EditIcon />
          </Button>
        </div>
        <div className="w-full space-y-4 mt-6">
          <Label className="font-semibold">Name:</Label>
          <Input className="rounded-full" />
        </div>
        <div className="w-full space-y-4 mt-6">
          <Label className="font-semibold">Email address:</Label>
          <Input className="rounded-full" />
        </div>
        <div className="w-full grid grid-cols-2 gap-2 mt-6">
          <Button>Save Changes</Button>
          <Button variant={"outline"} asChild>
            <Link href={"/dashboard/settings/change-pass"}>
              Change Password
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
