import { Button } from "@/components/ui/button";
import HeaderAnts from "./header-ants";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BadgeCheckIcon, MapPinIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <header className="h-[calc(100dvh-64px)] w-dvw mt-16  relative">
        <h1 className="text-6xl pt-[7%] pb-8 text-center">
          Do <span className="text-primary">Business</span> with <br />
          the best
        </h1>
        <p className="text-center text-xl font-medium">
          Top vetted talent, ready to help you bring your ideas to life
        </p>
        <p className="w-1/2 mx-auto block text-center pt-4 text-sm leading-relaxed">
          Connect with top-tier freelancers ready to bring your vision to life.
          Our platform offers experts in design, development, marketing, and
          writing to meet your specific needs. Discover the talent that can
          elevate your project
        </p>
        <div className="w-full flex justify-center items-center gap-4 my-8!">
          <Button className="uppercase px-8! py-6!">Explore Services</Button>
          <Button
            variant="outline"
            className="border border-foreground px-8! py-6! uppercase"
          >
            Join as a Pro
          </Button>
        </div>
        <div className="mt-[7%]">
          <div className="border border-primary/30 rounded-full w-1/2 flex items-center justify-between pl-2 mx-auto shadow-[0_0_100px_1px_#F4802550,0_0_40px_1px_#F4802510] bg-inherit">
            <Input
              className="border-0! outline-0! ring-0! shadow-none font-semibold text-sm bg-transparent"
              placeholder="Search for a skill...."
            />
            <Button size="lg" className="uppercase">
              Search
            </Button>
          </div>
        </div>
        <HeaderAnts />
      </header>
      <main className="px-4 lg:px-[7%] pb-12">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Explore Top <span className="text-primary">Services</span>
        </h1>
        <div className="w-full grid grid-cols-3 gap-6">
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
              >
                View service
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-[200px]">
          <h1 className="text-5xl font-medium">
            Why <span className="text-primary">Boss Pro ?</span>
          </h1>
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="w-full p-6 grid grid-cols-2 gap-6 space-y-12!">
              {why_boss.map((x, i) => (
                <div
                  className="flex flex-col justify-start items-start gap-2"
                  key={i}
                >
                  <Image
                    src={x.icon}
                    height={64}
                    width={64}
                    alt="badge-icon"
                    className="size-8"
                  />
                  <h3 className="text-lg font-semibold">Quality Assurance</h3>
                  <p className="text-sm">
                    We rigorously vet freelancers to ensure top-quality talent
                    for your projects
                  </p>
                </div>
              ))}
              <div className="">
                <Button
                  variant="outline"
                  size="xlg"
                  className="uppercase font-medium"
                >
                  Join as a Pro
                </Button>
              </div>
            </div>
            <div className="w-full h-full p-6! relative">
              <div className="">
                <Image
                  src="/image/why_boss.jpg"
                  height={300}
                  width={800}
                  alt="badge-icon"
                  className="h-[500px] w-auto aspect-[3/4] object-cover rounded-lg mx-auto border shadow-sm"
                />
                <Image
                  src="/resource/Frame 86.svg"
                  height={100}
                  width={300}
                  alt="badge-icon"
                  className="w-[200px] absolute -top-6 right-1/7"
                />
                <Image
                  src="/resource/Frame 80-b.svg"
                  height={100}
                  width={300}
                  alt="badge-icon"
                  className="w-[280px] absolute -bottom-1/5 left-1/6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 mt-[100px]">
          <h1 className="text-5xl font-medium text-center mb-12">
            How it Works
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <Image
                src="/resource/how-it-works.svg"
                height={200}
                width={600}
                alt="badge-icon"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="space-y-12">
              {howitworks.map((x, i) => (
                <div
                  className={cn(
                    `pt-12 px-6 relative border-b-2 pb-6`,
                    i === 0 && "border-primary text-primary"
                  )}
                  key={i}
                >
                  <h4
                    className={cn(
                      "text-8xl font-bold absolute top-0 left-0 -z-20 text-foreground/30",
                      i === 0 && "text-primary/25"
                    )}
                  >
                    0{i + 1}
                  </h4>
                  <h2 className="text-4xl font-semibold pb-2">{x.title}</h2>
                  <p className="w-3/4 text-foreground! leading-relaxed">
                    It&apos;s free and easy! Get lots of competitive bids that
                    suit your budget in minutes. Start making your dreams
                    reality.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-24 w-full rounded-4xl p-12 bg-[#EADBCE90] grid grid-cols-7">
          <div className="text-4xl col-span-3">
            <h1 className="font-medium">
              Get work done in <br />
              over <span className="text-primary">2700</span> different <br />
              <span className="text-primary">categories</span>
            </h1>
            <Button className="mt-12 px-12!" size="xlg">
              View all categories
            </Button>
          </div>
          <div className="col-span-4 grid grid-cols-3 gap-6">
            {cats.map((x, i) => (
              <div className="" key={i}>
                <h4 className="text-2xl font-medium text-primary">{x.title}</h4>
                <ul className="mt-6 text-sm space-y-2">
                  {x.cats.map((y, l) => (
                    <li className="text-sm" key={l}>
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-4xl mt-24 text-center font-semibold">
          Top freelancers
        </h1>
        <div className="mt-8">
          <div className="flex gap-6 uppercase">
            <Button>ALL</Button>
            <Button variant="outline">Tech</Button>
            <Button variant="outline">Design</Button>
            <Button variant="outline">marketing</Button>
            <Button variant="outline">accounts</Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="relative h-[200px]">
                <Image
                  src="/image/service_image01.jpg"
                  height={200}
                  width={400}
                  className="rounded-lg object-cover w-full h-full"
                  alt="freelancer_img"
                />
              </CardContent>
              <CardHeader className="flex flex-row justify-between items-start">
                <div className="">
                  <div className="flex text-lg items-center font-semibold">
                    John Doe <BadgeCheckIcon className="text-blue-600 ml-2" />
                  </div>
                  <p>Product Manager</p>
                  <div className="flex items-center mt-1 text-muted-foreground">
                    <MapPinIcon className="mr-1 size-5 text-primary" />{" "}
                    Manchester
                  </div>
                </div>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full py-5!">
                  HIRE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button className="uppercase mx-auto! flex mt-12" size="xlg">
          View all
        </Button>
      </main>
      <main className="mt-24 bg-foreground text-background">
        <div className="grid grid-cols-2 gap-6 p-24">
          <div className="space-y-12">
            <h1 className="text-5xl font-medium">
              Why Freelancers <br />
              <span className="text-primary">Choose Us</span>
            </h1>
            <Button className="uppercase" size="xlg">
              view all categories
            </Button>
          </div>
          <div className="space-y-12 divide-y divide-primary/30">
            {whyFreelancer.map((x, i) => (
              <div className="pb-12" key={i}>
                <Image
                  src={x.icon}
                  height={64}
                  width={64}
                  alt="icon"
                  className="size-10"
                />
                <h2 className="text-xl mt-6">{x.title}</h2>
                <p className="text-sm">{x.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-24 grid grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl">
              Our Impact in <br />
              <span className="text-primary">Numbers</span>
            </h1>
            <Button size={"lg"}>View all categories</Button>
          </div>
          <p className="leading-relaxed">
            Our platform connects talented freelancers with clients worldwide,
            delivering exceptional projects with high client satisfaction. We
            foster a global community, ensuring successful collaborations and
            helping businesses achieve their goals through skilled professional
            services
          </p>
        </div>
        <div className="mt-12 px-24 grid grid-cols-4 gap-6">
          {impact.map((x, i) => (
            <div className="space-y-2" key={i}>
              <h1 className="font-semibold text-5xl">{x.title}</h1>
              <p className="text-muted-foreground">{x.para}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 mt-12">
          <div className={"w-full h-6 bg-primary"} />
          <div className={"w-full h-6 bg-primary/80"} />
          <div className={"w-full h-6 bg-primary/40"} />
          <div className={"w-full h-6 bg-primary/20"} />
        </div>
      </main>
      <main>
        <h1 className="text-6xl text-center my-24! font-medium">
          FAQ<span className="text-primary">s</span>
        </h1>

        <div className="p-12 px-24 pt-0">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="0"
          >
            {faqs.map((x, i) => (
              <AccordionItem value={String(i)} key={i}>
                <AccordionTrigger className="" plus>
                  <div className="">
                    <span className="mr-12">0{i + 1}</span> {x.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] py-24 px-24 grid grid-cols-2 gap-6">
          <h1 className="text-6xl font-medium text-background">
            Join Our Community of <br />
            Top Freelancers
          </h1>
          <div className="text-background">
            <h5 className="text-xl">
              Sign up now to start working on high- <br />
              quality projects and earn competitive rates
            </h5>
            <p className="text-xs mt-2">
              Create your profile in minutes and connect with clients worldwide
            </p>
            <div className="mt-12 items-center gap-6 grid grid-cols-2">
              <Button
                className="w-full bg-background text-foreground"
                size="xlg"
              >
                EXPLORE SERVICE
              </Button>
              <Button
                className="w-full bg-transparent! border-background"
                variant="outline"
                size="xlg"
              >
                JOIN AS A PRO
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const why_boss = [
  {
    icon: "/icons/BOSS/badge.svg",
    title: "Quality Assurance",
    desc: "We rigorously vet freelancers to ensure top-quality talent for your projects",
  },
  {
    icon: "/icons/BOSS/apps.svg",
    title: "Quality Assurance",
    desc: "We rigorously vet freelancers to ensure top-quality talent for your projects",
  },
  {
    icon: "/icons/BOSS/money.svg",
    title: "Quality Assurance",
    desc: "We rigorously vet freelancers to ensure top-quality talent for your projects",
  },
  {
    icon: "/icons/BOSS/world.svg",
    title: "Quality Assurance",
    desc: "We rigorously vet freelancers to ensure top-quality talent for your projects",
  },
];

const howitworks = [
  {
    title: "Post Your Project",
    para: "It's free and easy! Get lots of competitive bids that suit your budget in minutes. Start making your dreams reality.",
  },
  {
    title: "Choose freelancers",
    para: "No job is too big or complex. We've got freelancers for jobs of any size or budget, across 2700+ skills. Let our talent bring your ideas to life.",
  },
  {
    title: "Pay safely",
    para: "Only pay for work when you are 100% satisfied with the outcome. Our milestone payment system protects you every step of the way.",
  },
];

const cats = [
  {
    title: "Design",
    cats: [
      "Graphic Design",
      "Logo Design",
      "Branding",
      "Illustration",
      "Web Design",
      "UX/UI Design",
      "Print Design",
      "Packaging Design",
      "Fashion Design",
      "Presentation Design",
      "Art & Craft Design",
      "Infographic Design",
    ],
  },
  {
    title: "Tech",
    cats: [
      "Web Development",
      "Mobile App Development",
      "Software Development",
      "E-commerce Development",
      "Game Development",
      "AI & Machine Learning",
      "Data Science & Analytics",
      "Cybersecurity",
      "Database Management",
      "Network Administration",
      "IT Support",
      "Blockchain Development",
      "DevOps",
      "Cloud Computing",
      "Tech Consulting",
    ],
  },
  {
    title: "Marketing",
    cats: [
      "SEO",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "PPC Advertising",
      "Affiliate Marketing",
      "Influencer Marketing",
      "Brand Strategy",
      "Market Research",
      "Video Marketing",
    ],
  },
];

const whyFreelancer = [
  {
    icon: "/icons/BOSS/padlock-check 1.svg",
    title: "Access to High-Quality Clients",
    para: "Connect with reputable clients and businesses looking for top-tier freelance talent.",
  },
  {
    icon: "/icons/BOSS/Frame 100.svg",
    title: "Competitive Earnings",
    para: "Enjoy competitive pay rates and opportunities for well-paying projects across various industries",
  },
  {
    icon: "/icons/BOSS/padlock-check 1.svg",
    title: "Secure Payment System",
    para: "Get paid securely and on time through our reliable payment system",
  },
  {
    icon: "/icons/BOSS/laptop-mobile (1) 1.svg",
    title: "Flexible Work Environment",
    para: "Work from anywhere, at any time, and manage your own schedule",
  },
];

const impact = [
  {
    title: "50,000+",
    para: "Highly skilled professionals ready to work",
  },
  {
    title: "200,000+",
    para: "Successfully delivered projects across various categories",
  },
  {
    title: "98%",
    para: "Clients who would recommend us to others",
  },
  {
    title: "120+",
    para: "Global reach with a presence in over 120 countries",
  },
];

const faqs = [
  {
    title: "How do I post a project?",
  },
  {
    title: "How do I find the right freelancer for my project?",
  },
  {
    title: "What are the payment methods available?",
  },
  {
    title: "Is there a secure payment system?",
  },
  {
    title: "How do I communicate with the freelancer?",
  },
  {
    title: "What if I am not satisfied with the work?",
  },
];
