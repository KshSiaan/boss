import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
export default function Page() {
  return (
    <main className="w-full h-full flex flex-col p-2">
      <h1 className="mb-4 text-3xl font-medium">Set up your job</h1>
      <div className="w-full flex-1 grid grid-cols-7 gap-6">
        <div className="flex flex-col justify-start items-start h-full col-span-5">
          <p className="text-muted-foreground text-sm">
            Simply post a job with the details of your project, & we will
            provide you with a shortlist of expert freelancers ready to work.
          </p>
          <div className="w-full grid grid-cols-2 gap-6 mt-6">
            <Select>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Choose workspace" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Choose hiring manager " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <div className="col-span-2 w-full space-y-4">
              <Label className="text-lg font-medium">
                Job or project title
              </Label>
              <Input
                className="rounded-full w-full"
                placeholder="Enter job title"
              />
              <Label className="text-lg font-medium">Job description</Label>
              <Textarea
                className="rounded-xl w-full h-[20dvh]"
                placeholder="Enter job title"
              />
              <div className="space-x-6 mt-12">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/jobs">Back</Link>
                </Button>
                <Button asChild>
                  <Link href="/dashboard/jobs/details">Next</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full h-full">
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div
                    key={step.name}
                    className="flex items-center gap-3 relative"
                  >
                    {/* Vertical line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-2 top-4 w-0.5 h-16 border-l-2 border-dashed border-gray-300" />
                    )}

                    {/* Status dot */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 z-10 ${
                        step.status === "current" || step.status === "completed"
                          ? "bg-orange-500 border-orange-500"
                          : "bg-gray-400 border-gray-400"
                      }`}
                    />

                    {/* Step name */}
                    <span
                      className={`text-sm ${
                        step.status === "current"
                          ? "text-gray-900 font-medium"
                          : step.status === "completed"
                          ? "text-gray-700"
                          : "text-gray-400"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
const steps = [
  { name: "Scope", status: "current" },
  { name: "Skills & Tools", status: "completed" },
  { name: "Engagement type", status: "upcoming" },
  { name: "Summary", status: "upcoming" },
];
