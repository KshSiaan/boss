"use client";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    icon: LucideIcon;
    title: string;
    url: string;
  }[];
}) {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu className="mt-12">
        {items.map((item, i) => (
          <Link href={item.url} key={i}>
            <button
              className={cn(
                "w-full text-base flex justify-center items-center gap-3 py-3 rounded-r-lg hover:bg-background/10 cursor-pointer",
                path === item.url
                  ? "border-l-8 border-background bg-background/10 font-semibold"
                  : "border-l-8 border-transparent"
              )}
            >
              <div className="w-full flex items-center gap-3 pl-[12%]">
                <item.icon className="size-5" />
                {item.title}
              </div>
            </button>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
