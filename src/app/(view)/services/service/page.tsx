import ServiceCard from "@/components/core/extra/service-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
            <p className="flex justify-between items-center text-sm sm:text-base">
              <span className="font-semibold">Service Duration:</span>
              <span>3 weeks - 2 months</span>
            </p>
            {/* <p className="flex justify-between items-center text-sm sm:text-base">
              <span className="font-semibold">Starts from:</span>
              <span className="text-green-600 font-bold">45$</span>
            </p> */}
            {/* <p className="flex justify-between items-center text-sm sm:text-base">
              <span className="font-semibold">Rating:</span>
              <span className="flex items-center gap-2">
                <span>(4.00)</span>
                <span className="flex items-center gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="size-4 sm:size-5"
                      fill="#FFBF00"
                      stroke=""
                    />
                  ))}
                </span>
              </span>
            </p> */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-6">
              <Button className="h-12 sm:h-14 w-full" asChild>
                <Link href={"/services/service/job"}>Book Service</Link>
              </Button>
              {/* <Button
                className="h-12 sm:h-14 w-full uppercase"
                variant={"outline"}
              >
                Request a quote
              </Button> */}
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/image/graphics.jpg"}
            height={500}
            width={500}
            alt="graphics"
            className="w-full h-auto aspect-square object-center object-cover rounded-lg"
          />
        </div>
      </section>

      <div>
        <p className="font-semibold text-lg mt-8">Description:</p>
        <p className="text-sm sm:text-base leading-relaxed mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
          lobortis nulla, id hendrerit lacus. Vivamus quis nunc enim...
        </p>
      </div>

      <Separator className="my-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <ServiceCard key={i} />
        ))}
      </div>
    </main>
  );
}
