"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Diamond,
  FileClock,
  Gift,
  History,
  Home,
  Settings,
  Sparkle,
  Sparkles,
  Star,
  Wallet,
  WalletCards,
} from "lucide-react";
import { usePathname } from "next/navigation";
import UsageTrack from "./UsageTrack";
import { useRouter } from "next/navigation";

function SideNav() {
  const router = useRouter();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Upgrade",
      icon: Sparkles,
      path: "/dashboard/upgrade",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="h-full relative shadow-sm bg-purple-100 border">
      <div className="flex   justify-center">
        <Image src={"/logo.svg"} alt="logo" width={130} height={130} />
      </div>
      <div className="mt-5 p-4">
        {MenuList.map((menu, index) => (
          <a key={index} href={menu.path} className="text-black">
            <div
              className={`flex gap-2 mb-3 p-5 hover:text-white rounded-lg
                cursor-pointer items-center hover:bg-purple-600 hover:scale-110 transition
                ${path == menu.path && "bg-purple-500 text-white"}
              `}
            >
              <menu.icon className="h-7 w-15" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </a>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
