import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  CodeIcon,
  FileTextIcon,
  GraduationCapIcon,
  MegaphoneIcon,
  PenToolIcon,
  Volume2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="h-full w-full flex flex-col justify-start items-start">
      <h1 className="text-3xl mb-6 font-medium mt-6">
        Source & Hire Expert Talent
      </h1>
      <div className="w-full">
        <h2 className="text-xl font-semibold">
          Let us find you the right freelancer
        </h2>
        <p className="">
          Simply post a job with the details of your project, & we will provide
          you with a shortlist of expert freelancers ready to work.
        </p>
      </div>
      <div className="mt-12 flex items-center gap-6">
        <Button asChild>
          <Link href="jobs/post">Post a job</Link>
        </Button>{" "}
        {/* <span>OR</span>{" "}
        <Button className="" variant="outline">
          Use AI
        </Button> */}
      </div>
      <section className="flex-1 w-full mt-6 flex flex-col justify-start items-start">
        <h2 className="text-xl font-semibold">
          Let us find you the right freelancer
        </h2>
        <div className="flex-1 w-full mt-6 grid grid-cols-3 gap-6">
          {jobs.map((x, i) => (
            <Card key={i}>
              <CardContent className="items-start flex justify-start gap-4">
                <div className="p-2 border rounded-full bg-[#EADBCE80]">
                  <x.icon className="size-6 text-primary" />
                </div>
                <div className="flex-2 space-y-3">
                  <CardTitle>{x.title}</CardTitle>
                  <CardDescription>{x.description}</CardDescription>
                  <Link
                    href="#"
                    className="text-primary underline text-sm underline-offset-2 hover:text-primary/80"
                  >
                    Learn more
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

const jobs = [
  {
    icon: PenToolIcon,
    title: "Graphic & Design",
    description:
      "A graphic designer transforms ideas into compelling visual experiences.",
  },
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    description:
      "Digital channels to promote or market products and services to consumers.",
  },
  {
    icon: Volume2Icon,
    title: "Voice & Audio",
    description:
      "Professionals providing voiceover, narration & audio production service.",
  },
  {
    icon: CodeIcon,
    title: "Programming & Tech",
    description:
      "Creating software and hardware to solve problems & perform tasks.",
  },
  {
    icon: FileTextIcon,
    title: "Writing & Translation",
    description:
      "Creating original text and converting text between languages accurately.",
  },
  {
    icon: GraduationCapIcon,
    title: "Tutors and Educators",
    description:
      "Tutors provide academic support & educators deliver structured teaching.",
  },
];
