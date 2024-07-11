"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import { History } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { Link } from "lucide-react";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  // const [totalUsage,setTotalUsage]=useState<number>(0);
  const [maxWords, setMaxWords] = useState(10000);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  useEffect(() => {
    if (user) {
      GetData();
      IsUserSubscribe();
    }
  }, [user]);

  useEffect(() => {
    if (updateCreditUsage && user) {
      GetData();
    }
  }, [updateCreditUsage, user]);

  const GetData = async () => { 
    
    if (user?.primaryEmailAddress?.emailAddress) {
       {   /* @ts-ignore*/  }
     const result: History[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
      GetTotalUsage(result);
    }
  };

  const IsUserSubscribe = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(
          eq(UserSubscription.email, user.primaryEmailAddress.emailAddress)
        );

      if (result.length > 0) {
        setUserSubscription(true);
        setMaxWords(100000);
      }
    }
  };

  const GetTotalUsage = (result: History[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length);
    });

    setTotalUsage(total);
    console.log(total);
  };

  return (
    <div className="m-5 rounded-lg hover:text-white c">
      <div className="bg-purple-500 hover:bg-purple-600 cursor-pointer hover:scale-105 transitionhover:scale-105 transition-all text-white p-3 rounded-lg ">
        <h2 className="font-medium"> Credit Used</h2>
        <div className="h-2 bg-purple-300 w-full cursor-pointer hover:scale-105 transitionhover:scale-105 transition-all rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage / maxWords) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-xs my-2">
          {totalUsage}/{maxWords} Credit Used
        </h2>
      </div>
      <a href={"/dashboard/upgrade"}>
        <Button
          variant="outline"
          className="w-full my-3 bg-purple-100 border-purple-500 hover:bg-purple-200 cursor-pointer hover:scale-105
            transitionhover:scale-105 transition-all p-3 rounded-lg
             hover:text-purple-600 text-purple-500"
        >
          Upgrade
        </Button>
      </a>
    </div>
  );
}

export default UsageTrack;
