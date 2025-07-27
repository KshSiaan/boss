import ServiceCard from "@/components/core/extra/service-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="py-12 px-4 lg:px-[7%]">
      <section className="w-full grid grid-cols-2 gap-6">
        <div className="w-full">
          <div className="py-2 flex items-center gap-4 justify-start">
            <Avatar className="size-12">
              <AvatarImage src={"https://avatar.iran.liara.run/public"} />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-center items-start">
              <h3 className="font-bold">Jenny Kyle</h3>
              <p className="text-sm text-muted-foreground">
                jennyonthejelly@yahoo.com
              </p>
            </div>
          </div>
          <h1 className="text-6xl font-semibold mt-6">Graphics Design</h1>
          <p className="mt-4 text-muted-foreground">
            Logos, branding, web design, illustration, and UX/UI design
          </p>
          <div className="mt-4 space-y-4">
            <p className="w-full flex justify-between items-center">
              <span className="font-semibold">Service Duration:</span>
              <span className="text-sm">3 weeks - 2 months</span>
            </p>
            <p className="w-full flex justify-between items-center">
              <span className="font-semibold">Starts from:</span>
              <span className="text-green-600 font-bold">45$</span>
            </p>
            <p className="w-full flex justify-between items-center">
              <span className="font-semibold">Rating:</span>
              <span className="text-sm flex items-center gap-2">
                <span>(4.00)</span>
                <span className="flex items-center gap-1">
                  <StarIcon className="size-5" fill="#FFBF00" stroke="" />
                  <StarIcon className="size-5" fill="#FFBF00" stroke="" />
                  <StarIcon className="size-5" fill="#FFBF00" stroke="" />
                  <StarIcon className="size-5" fill="#FFBF00" stroke="" />
                </span>
              </span>
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <Button className="h-14 w-full" asChild>
                <Link href={"/services/service/payment"}>Book Service</Link>
              </Button>
              <Button className="h-14 w-full uppercase" variant={"outline"}>
                Request a quote
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={"/image/graphics.jpg"}
          height={500}
          width={500}
          alt="graphcis"
          className="w-full aspect-square object-center object-cover rounded-lg"
        />
      </section>
      <div className="">
        <p className="font-semibold text-lg mt-6">Description:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
          lobortis nulla, id hendrerit lacus. Vivamus quis nunc enim. In hac
          habitasse platea dictumst. Nullam rutrum justo quis venenatis
          suscipit. Suspendisse fringilla a massa id vulputate. Vestibulum
          volutpat molestie erat et molestie. Donec suscipit viverra mi quis
          pharetra. Fusce non pellentesque nunc. Maecenas vitae viverra sapien.
          Ut nisi mauris, condimentum id scelerisque non, commodo at lectus. Sed
          sagittis pulvinar malesuada. Proin congue elit pulvinar nibh aliquam
          aliquet. In hac habitasse platea dictumst. Integer vitae lorem
          tincidunt, mattis felis in, hendrerit risus. Donec pellentesque arcu
          eget tristique malesuada. Sed at euismod massa. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Nullam pellentesque vel arcu a
          venenatis. Phasellus auctor sapien sed enim blandit venenatis. Sed
          luctus lectus diam, non imperdiet orci mattis et. Etiam lobortis nunc
          a luctus volutpat. Aliquam in eros commodo turpis suscipit aliquam.
          Maecenas interdum facilisis nulla, et posuere tortor pellentesque
          eget. Praesent sagittis, lectus at aliquet fermentum, diam ligula
          elementum odio, in vestibulum felis massa placerat purus. Ut at mi
          quis tortor lacinia pretium. Duis ultricies erat ac bibendum
          imperdiet. Mauris at nunc luctus, bibendum tellus eget, interdum
          purus. Phasellus nunc libero, accumsan ut feugiat nec, posuere
          dignissim enim. Donec at urna hendrerit sem varius semper vitae ut
          lectus. Pellentesque placerat odio diam, quis ultricies erat commodo
          nec. Vivamus a luctus nisl. Quisque a luctus nunc, convallis vulputate
          augue. Pellentesque ornare vel nulla vel consequat. Phasellus at
          tristique elit. Suspendisse a enim convallis, luctus neque at, porta
          lorem.
        </p>
      </div>
      <Separator className="my-6 " />
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <ServiceCard key={i} />
        ))}
      </div>
    </main>
  );
}
