"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BriefcaseBusinessIcon,
  FileTextIcon,
  HouseIcon,
  SettingsIcon,
  UsersIcon,
  WalletCardsIcon,
} from "lucide-react";

const preURL = "/dashboard";
const data = {
  navMain: [
    {
      icon: HouseIcon,
      title: "Dashboard",
      url: `${preURL}`,
    },
    {
      icon: BriefcaseBusinessIcon,
      title: "Jobs",
      url: `${preURL}/jobs`,
    },
    {
      icon: UsersIcon,
      title: "Talents",
      url: `${preURL}/talents`,
    },
    {
      icon: WalletCardsIcon,
      title: "Budget",
      url: `${preURL}/budget`,
    },
    {
      icon: FileTextIcon,
      title: "Reporting",
      url: `${preURL}/reporting`,
    },
    {
      icon: SettingsIcon,
      title: "Settings",
      url: `${preURL}/settings`,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="pt-6">
            <span className="text-3xl font-bold p-8">BOSS</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
