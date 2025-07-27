import FAQSec from "@/components/core/extra/faq-sec";
import JoinComm from "@/components/core/extra/join-comm";
import ServiceCard from "@/components/core/extra/service-card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="pt-12">
      <h1 className="text-5xl font-semibold text-center mb-12">
        Explore Top <span className="text-primary">Services</span>
      </h1>
      <div className="mb-6 flex justify-end items-center  px-4 lg:px-[7%]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filted By Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="graphics">Graphics</SelectItem>
            <SelectItem value="graphics">Graphics</SelectItem>
            <SelectItem value="graphics">Graphics</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-6  px-4 lg:px-[7%]">
        {Array.from({ length: 12 }).map((_, i) => (
          <ServiceCard key={i} />
        ))}
      </div>
      <div className="mt-12">
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
      <FAQSec />
      <JoinComm />
    </main>
  );
}
