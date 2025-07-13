import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import PlanCard from "./plan-chart";
export default function Page() {
  return (
    <div className="w-full h-full p-2 flex flex-col justify-start items-start">
      <div className="w-full">
        <h2 className="text-xl font-semibold">Hola James!</h2>
        <p className="">Let’s hire, manage and pay freelancers with BOSS Pro</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-6">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Budget Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-2 flex justify-start items-center gap-2">
              <div className="h-8 bg-primary rounded-sm w-[60%]"></div>
              <div className="h-8 bg-secondary rounded-sm w-[20%]"></div>
              <div className="h-8 bg-foreground rounded-sm w-[20%]"></div>
            </div>
          </CardContent>
          <CardFooter className="text-sm flex items-center gap-4">
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
          </CardFooter>
        </Card>
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Payment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-2 flex justify-start items-center gap-2">
              <div className="h-8 bg-primary rounded-sm w-[70%]"></div>
              <div className="h-8 bg-foreground rounded-sm w-[30%]"></div>
            </div>
          </CardContent>
          <CardFooter className="text-sm flex items-center gap-4">
            <div className="flex items-center gap-2 font-semibold">
              <div className="size-4 rounded bg-primary" />
              Approved funds
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="size-4 rounded bg-foreground" />
              Pending funds
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="flex-1 w-full mt-6 grid grid-cols-2 gap-6">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
            <div className="space-y-1">
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-semibold text-orange-500">6</h3>
                <p className="font-semibold text-lg">Active Talents</p>
              </div>
              <p className="text-sm text-muted-foreground">0 this week</p>
            </div>
            <Button
              variant="outline"
              className="uppercase text-xs font-medium bg-transparent"
            >
              View all
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
              <div>Talent</div>
              <div>Status</div>
              <div>Workspace</div>
            </div>
            <div className="space-y-4">
              {talents.map((talent) => (
                <div
                  key={talent.id}
                  className="grid grid-cols-3 gap-4 items-center py-2"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={talent.avatar || "/placeholder.svg"}
                        alt={talent.name}
                      />
                      <AvatarFallback>
                        {talent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="font-medium">{talent.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {talent.email}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 flex">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 hover:bg-green-100"
                    >
                      {talent.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      {talent.date}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">{talent.workspace}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <PlanCard />
      </div>
    </div>
  );
}

const talents = [
  {
    id: 1,
    name: "Joe Anoai",
    email: "joe@boss.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Active",
    workspace: "Designing",
    date: "June 24, 2024",
  },
  {
    id: 2,
    name: "Anita Bath",
    email: "anita@boss.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Active",
    workspace: "Marketing",
    date: "June 26, 2024",
  },
  {
    id: 3,
    name: "Mark Jah",
    email: "mark@boss.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Active",
    workspace: "Developing",
    date: "June 27, 2024",
  },
  {
    id: 4,
    name: "Lois Lane",
    email: "lois@boss.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Active",
    workspace: "Translation",
    date: "June 29, 2024",
  },
];
