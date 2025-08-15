import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Separator } from "@/components/ui/separator";
import { EditIcon } from "lucide-react";
// import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="py-8 px-4 sm:px-6 md:px-8 lg:px-[7%]">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <div className="py-2 flex items-center gap-4 justify-start">
            <Avatar className="size-12">
              <AvatarImage src={"https://avatar.iran.liara.run/public"} />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-center items-start">
              <h3 className="font-bold text-base sm:text-lg md:text-xl">
                Jenny Kyle
              </h3>
              <p className="text-sm text-muted-foreground truncate max-w-[200px] sm:max-w-none">
                jennyonthejelly@yahoo.com
              </p>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-6 leading-tight">
            Graphics Design
          </h1>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Logos, branding, web design, illustration, and UX/UI design
          </p>
          <div className="mt-4 space-y-4">
            <p className="flex justify-start gap-3 items-center text-sm sm:text-base">
              <span className="font-semibold">Service Duration:</span>
              <span>3 weeks - 2 months</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src={"/image/graphics.jpg"}
            height={500}
            width={500}
            alt="graphics"
            className="size-[300px] aspect-square object-center object-cover rounded-lg"
          />
        </div>
      </section>

      <Separator className="my-8" />
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Your Informations</CardTitle>
          <Button
            className="rounded-sm border-primary text-primary"
            variant={"outline"}
          >
            <EditIcon /> EDIT PROFILE
          </Button>
        </CardHeader>
        <CardContent>
          <Avatar className="size-[200px] mx-auto">
            <AvatarImage src={"https://avatar.iran.liara.run/public"} />
            <AvatarFallback>UI</AvatarFallback>
          </Avatar>
          <div className=" space-y-4">
            <Label>Full name:</Label>
            <Input />
            <Label>Contact:</Label>
            <Input />
            <Label>Your skills:</Label>
            <Input />
            <Label>Location:</Label>
            <Input />
            <Separator />
            <Label>Pricing (per hour):</Label>
            <Input />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end items-center gap-2">
          <Button
            className="rounded-md text-primary border-primary"
            variant={"outline"}
          >
            Go back
          </Button>
          <Button className="rounded-md">Confirm Request</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
