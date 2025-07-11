import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function AboutGrid() {
  return (
    <section>
      <div className="mt-12 px-4 lg:px-[7%] grid grid-cols-2 gap-6 mb-12">
        {about_grid.slice(0, 1).map((x, i) => (
          <Card key={i}>
            <CardHeader>
              <Image
                src={x.image}
                height={200}
                width={400}
                alt="thumbnail"
                className="w-full mx-auto"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className="text-4xl">{x.title}</CardTitle>
              <CardDescription>{x.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
        <div className="w-full full grid grid-rows-2 gap-6">
          {about_grid.slice(1, 3).map((x, i) => (
            <Card key={i} className={`grid grid-cols-2 gap-2`}>
              <CardContent className="space-y-2">
                <CardTitle className="text-4xl">{x.title}</CardTitle>
                <CardDescription>{x.desc}</CardDescription>
              </CardContent>
              <CardHeader>
                <Image
                  src={x.image}
                  height={200}
                  width={400}
                  alt="thumbnail"
                  className="w-full mx-auto"
                />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12 px-4 lg:px-[7%] grid grid-cols-3 gap-6 mb-12">
        {about_grid.slice(3, 7).map((x, i) => (
          <Card key={i}>
            <CardHeader>
              <Image
                src={x.image}
                height={200}
                width={400}
                alt="thumbnail"
                className="w-full mx-auto"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className="text-4xl">{x.title}</CardTitle>
              <CardDescription>{x.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const about_grid = [
  {
    image: "/resource/about/Frame 92-1.svg",
    title: "Dashboard",
    desc: "Manage all your projects in one place with our intuitive dashboard. Track progress, deadlines, and milestones effortlessly",
  },
  {
    image: "/resource/about/Frame 92.svg",
    title: "Team Collaboration",
    desc: "Manage all your projects in one place with our intuitive dashboard. Track progress, deadlines, and milestones effortlessly",
  },
  {
    image: "/resource/about/Frame 155.svg",
    title: "Flexible Payments",
    desc: "Choose from various payment options that suit your business. Our flexible payment system ensures timely and secure transactions",
  },
  {
    image: "/resource/about/Frame 95.svg",
    title: "Admin Controls",
    desc: "Maintain control with advanced admin settings. Manage permissions, roles, and access to sensitive information efficiently",
  },
  {
    image: "/resource/about/Frame 95-1.svg",
    title: "Freelancer Catalog",
    desc: "Explore a vast catalog of top-tier freelancers across various industries. Our curated listings ensure you find the perfect match for your project needs",
  },
  {
    image: "/resource/about/Frame 93.svg",
    title: "Freelancer Briefing",
    desc: "Provide clear and detailed project briefs to freelancers, ensuring everyone is aligned and ready to deliver exceptional results",
  },
];
