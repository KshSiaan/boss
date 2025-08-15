import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="p-2">
      <h1 className="mb-4 text-3xl font-medium">Talent directory</h1>
      <div className="w-full flex items-center justify-between">
        <div className="space-x-2">
          <Button>ACTIVE SERVICES</Button>
          <Button variant="outline">ALL SERVICES</Button>
        </div>
        <Button variant="outline">SORT</Button>
      </div>
      <div className="w-full mt-6">
        <Table className="w-full">
          <TableHeader className="font-semibold!">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Business</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Loacation</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="">Graphics Design</TableCell>
              <TableCell className="">
                <div className="w-full">
                  <Link
                    href={"talents/details"}
                    className="font-medium flex gap-6 items-center"
                  >
                    <Avatar>
                      <AvatarImage src="https://avatar.iran.liara.run/public" />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center items-start gap-0">
                      <h4>Joe Anoai</h4>
                      <p className="text-xs">joe@boss.com</p>
                    </div>
                  </Link>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-green-600 font-semibold">Active</p>
                <p>June 24, 2024</p>
              </TableCell>
              <TableCell>Designing</TableCell>
              <TableCell>UX Designer</TableCell>
              <TableCell>
                <Button asChild>
                  <Link href={"/provider/jobs/details"}>
                    <EyeIcon />
                    VIEW
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
