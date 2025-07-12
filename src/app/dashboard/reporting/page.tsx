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
import { CheckIcon, EllipsisIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="p-2">
      <h1 className="mb-4 text-3xl font-medium">User and workspaces</h1>
      <div className="w-full flex items-center justify-between">
        <div className="space-x-2">
          <Button>ALL USERS</Button>
          <Button variant="outline">WORKSPACES</Button>
        </div>
        <div className="space-x-2">
          <Button variant="outline">SORT</Button>
          <Button variant="outline">INVITE USER</Button>
        </div>
      </div>
      <div className="w-full mt-6">
        <Table className="w-full">
          <TableHeader className="font-semibold!">
            <TableRow>
              <TableHead>Talent</TableHead>
              <TableHead>Workspace</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Scope</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
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
              <TableCell>Designing</TableCell>
              <TableCell>Leeds</TableCell>

              <TableCell className="text-center text-green-600">
                <CheckIcon />
              </TableCell>
              <TableCell className="text-center">
                <ThumbsUpIcon className="text-blue-600" />
              </TableCell>
              <TableCell className="text-center">
                <EllipsisIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
