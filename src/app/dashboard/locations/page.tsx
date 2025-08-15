import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  PlusIcon,
  SearchIcon,
  SlidersVerticalIcon,
} from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section className="h-full w-full rounded-lg p-6 flex flex-col">
      <h3 className="text-lg font-semibold">Locations</h3>
      <div className="w-full grid grid-cols-6 py-6 gap-2">
        <Button variant={"outline"}>Manhattan</Button>
        <Button variant={"outline"}>New York</Button>
        <Button variant={"outline"}>Dubai</Button>
        <Button variant={"outline"}>Los angles</Button>
      </div>
      <div className="gap-2 items-center grid grid-cols-6">
        <div className="w-full flex justify-start items-center bg-background rounded-full border-secondary border col-span-3">
          <div className="px-4">
            <SearchIcon className="size-4" />
          </div>
          <Input
            className="bg-transparent shadow-none! border-none! w-full pl-0 ring-0! border-0! outline-0! rounded-0!"
            placeholder="Search for something"
          />
        </div>
        <Button>
          <SlidersVerticalIcon /> Filter
        </Button>
      </div>
      <div className="gap-2 items-center grid grid-cols-5 mt-6">
        <div className="w-full flex justify-between items-center rounded-lg border-secondary border col-span-3 p-2 bg-[#F4802516]!">
          <Button size={"icon"} className="rounded-full" variant={"outline"}>
            <ChevronLeft />
          </Button>
          <div className="w-full h-full flex-1 px-2 grid grid-cols-7 gap-6">
            {Array(7)
              .fill("")
              .map((_, i) => (
                <Card
                  key={i}
                  className={cn(
                    "py-2! hover:bg-background/80! transition-colors cursor-pointer!",
                    i < 3 && "bg-transparent! shadow-none! border-none!"
                  )}
                >
                  <CardContent className="text-center text-4xl font-bold space-y-4!">
                    <CardTitle className="text-center text-muted-foreground text-sm!">
                      Mon
                    </CardTitle>
                    <p>16</p>
                  </CardContent>
                </Card>
              ))}
          </div>
          <Button size={"icon"} className="rounded-full" variant={"outline"}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-5 gap-6">
        <div className="rounded-md border p-6 mt-6 col-span-3 flex flex-col justify-start">
          <div className="w-full p-6 pt-0! rounded-lg space-x-2">
            <Button className="rounded-none bg-transparent! text-primary shadow-none border-b-3 border-primary">
              Room 1
            </Button>
            <Button className="rounded-none bg-transparent! text-foreground shadow-none">
              Room 2
            </Button>
            <Button className="rounded-none bg-transparent! text-foreground shadow-none ">
              Room 3
            </Button>
          </div>
          <h4 className="font-semibold text-lg">
            List of facilities available
          </h4>
          <div className="flex-1 max-h-[30dvh] overflow-y-auto space-y-2 py-6">
            {Array(6)
              .fill("")
              .map((_, i) => (
                <Card key={i}>
                  <CardContent>
                    <div className="flex flex-row justify-between items-center">
                      <div className="">
                        <h4 className="text-lg font-bold">Graphics Design</h4>
                        <p className="text-sm font-semibold text-muted-foreground">
                          9 to 6
                        </p>
                      </div>
                      <div className="flex items-center text-sm font-semibold space-x-2 ">
                        <p className="text-muted-foreground">8 am to 5 pm</p>

                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                          <Avatar>
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarImage
                              src="https://github.com/leerob.png"
                              alt="@leerob"
                            />
                            <AvatarFallback>LR</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarImage
                              src="https://github.com/evilrabbit.png"
                              alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                          </Avatar>
                        </div>
                        <Button
                          variant={"outline"}
                          className="rounded-full text-primary border-2 border-primary"
                          size={"icon"}
                        >
                          <PlusIcon />
                        </Button>
                      </div>
                    </div>
                    <div className=""></div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
        <div className="border col-span-2 mt-6 rounded-lg p-6">
          <span className="flex gap-2 items-end">
            <span className="text-primary text-2xl font-semibold -mb-0.5">
              7
            </span>
            <h3>Talents Available</h3>
          </span>
          <div className="max-h-[35dvh] overflow-y-auto">
            {Array(6)
              .fill("")
              .map((_, i) => (
                <Card className="border-none! shadow-none!" key={i}>
                  <CardContent className="flex items-center w-full px-0! gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div className="">
                      <h2 className="font-semibold">Lisa brunnete</h2>
                      <p className="text-xs text-muted-foreground">
                        lisbrunnete@email.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
      <Button className="w-fit px-6! rounded-md mt-6">SAVE</Button>
    </section>
  );
}
