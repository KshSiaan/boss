import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BellIcon, SearchIcon, Settings } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-gradient-to-b from-[#ffeee2] via-[#ffffff] to-[#FFFFFF]">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="w-full flex justify-between items-center gap-6 p-6">
            <div className="font-semibold text-xl">Home</div>
            <div className="w-1/2 flex justify-end items-center gap-3">
              <div className="w-full flex justify-start items-center bg-background rounded-full border-secondary border">
                <div className="px-4">
                  <SearchIcon className="size-4" />
                </div>
                <Input
                  className="bg-transparent shadow-none! border-none! w-full pl-0 ring-0! border-0! outline-0! rounded-0!"
                  placeholder="Search for something"
                />
              </div>
              <Button
                className="rounded-full border-0!"
                variant="outline"
                size="icon"
              >
                <Settings />
              </Button>
              <Button
                className="rounded-full border-0!"
                variant="outline"
                size="icon"
              >
                <BellIcon />
              </Button>
              <Button
                className="rounded-full border-0!"
                variant="ghost"
                size="icon"
              >
                <Avatar className="size-10">
                  <AvatarImage src="https://avatar.iran.liara.run/public" />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
