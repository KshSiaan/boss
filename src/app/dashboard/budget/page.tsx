import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { FileTextIcon } from "lucide-react";
import React from "react";
import PlanCard from "../plan-chart";

export default function Page() {
  return (
    <main className="p-2 flex flex-col justify-start items-start">
      <div className="w-full">
        <h2 className="text-3xl font-semibold">Budget</h2>
      </div>
      <Card className="w-full mt-6">
        <CardContent className="grid grid-cols-5">
          <div className="border-r w-full h-full flex flex-col justify-between items-start gap-8">
            <h3 className="text-xl font-semibold">Budget Status</h3>
            <div className="space-y-2">
              <p>Available budget</p>
              <h2 className="text-4xl font-medium">$8,799</h2>
            </div>
          </div>
          <div className="col-span-4 pl-6">
            <h3 className="text-xl font-semibold">Status Q2</h3>
            <div className="rounded-md border p-2 flex justify-start items-center gap-2 mt-2">
              <div className="h-8 bg-primary rounded-sm w-[60%]"></div>
              <div className="h-8 bg-secondary rounded-sm w-[20%]"></div>
              <div className="h-8 bg-foreground rounded-sm w-[20%]"></div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 font-semibold">
                <div className="size-4 rounded bg-primary" />
                Spent
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <div className="size-4 rounded bg-secondary" />
                Committed
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <div className="size-4 rounded bg-foreground" />
                Available
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex-1 w-full grid grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent>
            <div className="space-x-2">
              <Button>BY DEPARTMENT</Button>
              <Button variant="outline">BY USER</Button>
            </div>
            <div className="w-full mt-4">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="flex items-center gap-4">
                      <FileTextIcon className="text-blue-600" />
                      <span>Intellectual property protection</span>
                    </TableCell>
                    <TableCell className="text-green-600">Yes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="flex items-center gap-4">
                      <FileTextIcon className="text-blue-600" />
                      <span>Intellectual property protection</span>
                    </TableCell>
                    <TableCell className="text-green-600">Yes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="flex items-center gap-4">
                      <FileTextIcon className="text-blue-600" />
                      <span>Intellectual property protection</span>
                    </TableCell>
                    <TableCell className="text-green-600">Yes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <PlanCard />
      </div>
    </main>
  );
}
