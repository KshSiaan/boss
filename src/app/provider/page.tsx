import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-full p-2 flex flex-col justify-start items-start">
      <div className="w-full">
        <h2 className="text-xl font-semibold">Hola James!</h2>
        <p className="">Let’s hire, manage and pay freelancers with BOSS Pro</p>
      </div>
      <div className="w-full grid grid-cols-1 gap-6">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
            <div className="space-y-1">
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-semibold text-orange-500">6</h3>
                <p className="font-semibold text-lg">Active Services</p>
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
              <div>Business</div>
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
                  <div className="space-y-1 flex gap-2 flex-col items-baseline">
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
      </div>
      <div className="flex-1 w-full mt-6 grid grid-cols-3 gap-6">
        <Card className="shadow-none col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Budget Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-2 flex justify-start items-center gap-2">
              <div className="h-8 bg-primary rounded-sm w-[60%]"></div>
              <div className="h-8 bg-secondary rounded-sm w-[40%]"></div>
            </div>
            <div className="flex items-center gap-2 py-6">
              <div className="size-4 rounded-sm bg-primary" />
              <span className="text-sm">Earned</span>
              <div className="w-8"></div>
              <div className="size-4 rounded-sm bg-secondary" />
              <span className="text-sm">Commited</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none">
          <CardContent className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-semibold">Today is</h3>
            <h2 className="font-bold text-primary text-8xl">09</h2>
            <p className="text-lg font-semibold">Monday</p>
          </CardContent>
        </Card>
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
