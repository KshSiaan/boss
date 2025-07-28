import JoinComm from "@/components/core/extra/join-comm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="pt-12">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[7%]">
        <Card className="bg-transparent shadow-none h-auto">
          <CardContent className="flex flex-col lg:flex-row gap-6">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/image/jobs.jpg"
                height={400}
                width={400}
                className="w-36 h-36 sm:w-48 sm:h-48 rounded-lg object-cover"
                alt="avatar"
              />
            </div>

            <div className="flex flex-col justify-between flex-1 gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold">Amy Lee</h1>
                <p className="text-sm sm:text-base">VFX / Video Editor</p>
                <div className="flex items-center gap-1 text-sm font-semibold mt-1">
                  <MapPinIcon className="size-4" />
                  Manchester
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Portfolios</p>
                  <p className="flex items-center gap-2 text-base sm:text-xl font-semibold">
                    LinkedIn <span>.</span> Resume
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Contact Details
                  </p>
                  <p className="flex items-center gap-2 text-base sm:text-xl font-semibold">
                    amy@boss.com
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-[7%] mt-6">
        <Card>
          <CardHeader>
            <CardTitle>About me:</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm sm:text-base leading-relaxed">
              Hey, I’m Kyle — a passionate Graphic Designer with 8 years of
              professional experience turning ideas into powerful visual
              stories. Originally from the UK and now working in New York...
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-[7%] mt-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
          Explore Top <span className="text-primary">Services</span>
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              className="w-full flex flex-col justify-start items-start gap-4"
              key={i}
            >
              <Image
                src="/image/service_image01.jpg"
                height={800}
                width={600}
                alt="service_image"
                className="w-full rounded-lg object-cover"
              />
              <h4 className="font-semibold text-lg">Video and Animation</h4>
              <p className="text-sm text-muted-foreground">
                Video editing, animation, motion graphics, explainer videos
              </p>
              <Button
                className="w-full uppercase"
                variant="outline"
                size="lg"
                asChild
              >
                <Link href={"/services/service"}>View service</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <JoinComm />
    </main>
  );
}
