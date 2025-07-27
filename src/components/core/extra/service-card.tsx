import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <Image
        src="/image/service_image01.jpg"
        height={800}
        width={600}
        alt="service_image"
        className="w-full"
      />
      <h4 className="font-semibold">Video and Animation</h4>
      <p className="text-sm">
        Video editing, animation, motion graphics, explainer videos
      </p>
      <Button
        className="w-full border-foreground uppercase"
        variant="outline"
        size="lg"
        asChild
      >
        <Link href={"/services/service"}>View service</Link>
      </Button>
    </div>
  );
}
