import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditIcon, InfoIcon, UploadCloud } from "lucide-react";
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size={"icon"}
                className="bottom-3 right-3 absolute rounded-full"
                variant={"outline"}
              >
                <EditIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="overflow-hidden md:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="sr-only">
                  Upload Profile Picture
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center p-8 border rounded-lg border-dashed border-gray-300 text-center min-h-[200px]">
                <UploadCloud className="h-16 w-16 text-gray-500 mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Drag and Drop or Click to select an Image
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <InfoIcon className="h-4 w-4" />
                  <span>Selected file must be under 10 mb</span>
                </p>
              </div>
              <div className="">
                <DialogClose asChild>
                  <Button className="w-full text-white">
                    Save Profile Picture
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
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
