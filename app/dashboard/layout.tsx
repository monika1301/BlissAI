"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
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
                className="p-3 text-purple-600   focus:outline-none flex items-center"
              >
                {!isNavOpen && <Menu className="h-10 w-8"> </Menu>}
                {isNavOpen && <X className="h-14 ml-[140px] w-8"> </X>}
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
                {/* {isNavOpen ? "" : ""} */}
              </button>
            </div>
            {/* SideNav */}
            <div
              className={`md:w-64 ${
                isNavOpen ? "" : "hidden"
              } md:block fixed top-0 left-0 h-screen bg-purple-100 border transition-transform transform lg:translate-x-0 lg:w-64 z-40`}
            >
              <SideNav />
            </div>
            {/* Main Content */}
            <div className={`md:ml-64 ${isNavOpen ? "md:ml-0" : ""}`}>
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
