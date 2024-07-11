"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className="bg-purple-50 min-h-screen">
            {/* Navbar Toggle Button */}
            <div className="md:hidden fixed top-0 left-0 z-50 w-full">
              <button
                onClick={toggleNav}
                className="p-3 text-purple-600 focus:outline-none flex items-center"
              >
                {!isNavOpen && <Menu className="h-10 w-8" />}
                {isNavOpen && (
                  <X className="h-10 w-8 mt-[4px] ml-[139px] transition-transform duration-1000 ease-in-out transform translate-x-0 md:translate-x-full" />
                )}
              </button>
            </div>
            {/* SideNav */}
            <div
              className={`md:w-64 fixed top-0 left-0 h-screen bg-purple-100 border transition-transform transform lg:translate-x-0 lg:w-64 z-40 ${
                isNavOpen ? "" : "-translate-x-full md:translate-x-0"
              }`}
            >
              <SideNav />
            </div>
            {/* Main Content */}
            <div
              className={`md:ml-64 transition-transform ${
                isNavOpen ? "ml-0" : ""
              }`}
            >
              <Header />
              {children}
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;


