import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileInputIcon, FileTextIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="p-2">
      <Card className="bg-transparent shadow-none! h-60">
        <CardContent className="flex items-start gap-6 relative">
          <Image
            src="/image/jobs.jpg"
            height={400}
            width={400}
            className="size-48 rounded-lg"
            alt="avatar"
          />
          <div className="h-full flex justify-between items-start flex-col">
            <h1 className="text-2xl font-semibold">Amy Lee</h1>
            <div className="space-x-2">
              <Button>CONTACT</Button>
            </div>
          </div>
          <div className="h-full flex flex-col gap-3 ml-[20dvh]">
            <p>Portfolios</p>
            <p className="flex items-center gap-4 text-xl font-semibold">
              Linkedin <span>.</span> Resume
            </p>
            <p>Contact Details</p>
            <p className="flex items-center gap-4 text-xl font-semibold">
              amy@boss.com
            </p>
          </div>
          <div className="absolute bottom-0 right-6 space-x-2">
            <Button className="bg-green-800 hover:bg-green-800/80">
              Cancel Job
            </Button>
            <Button
              variant={"outline"}
              className="text-destructive border-destructive"
            >
              Cancel Job
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6">
        <div className="flex justify-between items-center gap-2">
          <div className="space-x-2">
            <Button>SYSTEM ACCESS</Button>
            <Button variant="outline">DOCUMENTS</Button>
            <Button variant="outline">EXPERIENCE</Button>
          </div>
          <Button>
            <FileInputIcon />
            Send Attachment
          </Button>
        </div>
        <div className="mt-6">
          <Table>
            <TableHeader className="font-semibold!">
              <TableRow>
                <TableHead>Document name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Shared with talent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expiration date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <FileTextIcon className="text-blue-600" />
                  <span>Intellectual property protection</span>
                </TableCell>
                <TableCell>IP</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>File signed</TableCell>
                <TableCell>24 June 2024</TableCell>
                <TableCell>
                  <Button
                    className="border-destructive text-destructive"
                    variant={"outline"}
                  >
                    <Trash2Icon />
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <FileTextIcon className="text-blue-600" />
                  <span>Intellectual property protection</span>
                </TableCell>
                <TableCell>IP</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>File signed</TableCell>
                <TableCell>24 June 2024</TableCell>
                <TableCell>
                  <Button
                    className="border-destructive text-destructive"
                    variant={"outline"}
                  >
                    <Trash2Icon />
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
