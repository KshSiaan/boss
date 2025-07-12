import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="p-2">
      <Card className="bg-transparent shadow-none! h-60">
        <CardContent className="flex items-start gap-6">
          <Image
            src="/image/jobs.jpg"
            height={400}
            width={400}
            className="size-48 rounded-lg"
            alt="avatar"
          />
          <div className="h-full flex justify-between items-start flex-col">
            <h1 className="text-2xl font-semibold">Amy Lee</h1>
            <p>VFX / Video Editor</p>
            <div className="flex items-center gap-1 text-sm font-semibold">
              <MapPinIcon className="size-4" />
              Manchester
            </div>
            <div className="space-x-2">
              <Button variant="outline">CONTACT</Button>
              <Button>HIRE</Button>
            </div>
          </div>
          <div className="h-full flex flex-col gap-3 ml-[20dvh]">
            <p>Portfolios</p>
            <p className="flex items-center gap-4 text-xl font-semibold">
              Linkedin <span>.</span> Resume
            </p>
            <p>Availability</p>
            <p className="flex items-center gap-4 text-xl font-semibold">
              Available
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <Button>ABOUT</Button>
          <Button variant="outline">SKILLS</Button>
          <Button variant="outline">EXPERIENCE</Button>
          <Button variant="outline">REVIEWS</Button>
        </div>
        <div className="mt-6">
          <article className="text-sm">
            <p>
              Hi, I&apos;m Amy Lee, a passionate and dedicated video editor with
              over 5 years of experience in transforming raw footage into
              compelling visual stories. My journey in video editing started as
              a hobby, which quickly turned into a career fueled by creativity
              and a keen eye for detail.
            </p>
            <br />
            <p>
              I specialise in various styles of video production, including
              corporate videos, promotional content, short films, and social
              media clips. My goal is to deliver high-quality edits that not
              only meet but exceed client expectations. Whether it&apos;s
              crafting a captivating narrative, enhancing visual effects, or
              ensuring seamless transitions, I take pride in every frame I edit.
            </p>
            <br />
            <p>
              Collaboration and communication are key elements of my work ethic.
              I believe in understanding the unique vision of each project and
              working closely with clients to bring their ideas to life. Let’s
              create something amazing together.
            </p>
            <br />
            <p>
              Feel free to check out my portfolio and get in touch for your next
              project
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
