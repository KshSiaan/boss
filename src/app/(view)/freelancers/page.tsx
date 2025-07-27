import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BadgeCheckIcon, MapPinIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function Page() {
  return (
    <main>
      <div className="px-4 lg:px-[7%] mb-12">
        <h1 className="text-4xl mt-24 text-center font-semibold">
          Top freelancers
        </h1>
        <div className="mt-8 overflow-x-auto whitespace-nowrap flex items-center justify-between">
          <div className="flex gap-6 uppercase">
            <Button>ALL</Button>
            <Button variant="outline">Tech</Button>
            <Button variant="outline">Design</Button>
            <Button variant="outline">marketing</Button>
            <Button variant="outline">accounts</Button>
          </div>
          <div className="flex items-center gap-2">
            <Input
              className="rounded-full outline-0! ring-0! w-[20dvw] border-foreground!"
              placeholder="Search freelancers"
            />
            <Button size={"icon"} className="rounded-full">
              <SearchIcon />
            </Button>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 24 }).map((_, i) => (
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
                <Button variant="outline" className="w-full py-5!" asChild>
                  <Link href={"/freelancers/profile"}>HIRE</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mb-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
}
