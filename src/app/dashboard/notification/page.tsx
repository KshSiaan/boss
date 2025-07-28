import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRightFromCircleIcon, BellIcon, CheckIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="p-6">
      <div className="space-y-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card className="w-full border-amber-600/40" key={i}>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BellIcon />
                <div className="h-full flex flex-col justify-center items-start gap-2">
                  <CardTitle>You have a new request</CardTitle>
                  <CardDescription className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi nec lobortis nulla, id hendrerit lacus.
                  </CardDescription>
                </div>
              </div>
              <div className="">
                <Button size={"icon"} variant={"ghost"}>
                  <CheckIcon />
                </Button>
                <Button size={"icon"} variant={"ghost"}>
                  <ArrowUpRightFromCircleIcon />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
