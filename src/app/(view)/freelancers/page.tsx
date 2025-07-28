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
      <div className="px-4 sm:px-6 md:px-8 lg:px-[7%] mb-12">
        <h1 className="text-3xl sm:text-4xl mt-16 sm:mt-24 text-center font-semibold">
          Top freelancers
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 uppercase justify-center md:justify-start">
            <Button size="sm" className="min-w-[80px]">
              ALL
            </Button>
            <Button size="sm" variant="outline" className="min-w-[80px]">
              Tech
            </Button>
            <Button size="sm" variant="outline" className="min-w-[80px]">
              Design
            </Button>
            <Button size="sm" variant="outline" className="min-w-[80px]">
              Marketing
            </Button>
            <Button size="sm" variant="outline" className="min-w-[80px]">
              Accounts
            </Button>
          </div>

          <div className="flex w-full md:w-auto items-center justify-center md:justify-end gap-2">
            <Input
              className="w-full sm:w-[250px] md:w-[300px] rounded-full"
              placeholder="Search freelancers"
            />
            <Button size="icon" className="rounded-full">
              <SearchIcon />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <div>
                  <div className="flex text-base sm:text-lg items-center font-semibold">
                    John Doe{" "}
                    <BadgeCheckIcon className="text-blue-600 ml-2 size-5 sm:size-6" />
                  </div>
                  <p className="text-sm sm:text-base">Product Manager</p>
                  <div className="flex items-center mt-1 text-muted-foreground text-sm">
                    <MapPinIcon className="mr-1 size-4 sm:size-5 text-primary" />
                    Manchester
                  </div>
                </div>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full py-3 sm:py-5"
                  asChild
                >
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
