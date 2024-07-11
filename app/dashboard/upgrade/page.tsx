"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import axio from "axios";
import { ArrowLeft, Loader2 } from "lucide-react";
import { UserSubscription } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import Link from "next/link";




function upgrade() {
  const [loading, setLoading] = useState(false);
  const {user}=useUser();
  const{userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
  const CreateSubscription = () => {
    setLoading(true);
    axio.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const OnPayment = (subId: string) => {
    const options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id": subId,
      "name": "Monika's BlissAI",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if(resp){
          SaveSubscription(resp?.razorpay_payment_id)
        }
        setLoading(false);
      },
    };
     
    //@ts-ignore  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription=async (paymentId:string)=>{
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    console.log(result);
    if (result){
      window.location.reload();
    }
  }

  return (
    <div className="p-3">
      {" "}
      <Link href={"/dashboard"}>
        {" "}
        <Button>
          {" "}
          <ArrowLeft /> Back{" "}
        </Button>{" "}
      </Link>{" "}
      <div>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:y-12 lg:px-8 ">
          <h2 className="text-purple-500 my-1 text-center font-bold text-4xl ">
            Upgrade With Monthly Plan
          </h2>
        </div>
        <div className="mx-auto max-w-3xl px-2 py-4 sm:px-6 sm:y-12 lg:px-8 ">
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center  md:gap-8">
            <div className="rounded-2xl border w-[340px] bg-white border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
              <div className="text-center">
                <h2 className="sm:text-3xl font-large text-gray-900">
                  Free
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-purple-700 sm:text-4xl">
                    {" "}
                    0₹{" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                  /month
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 10,000 Words/Month </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 50+ Content Templates </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    Unlimited Download & Copy{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">1 Month of History</span>
                </li>
              </ul>
            </div>

            {/*************************************************/}

            <div className="rounded-2xl border w-[350px] bg-white p-6 shadow-sm   sm:order-last sm:px-8 lg:p-12">
              <div className="text-center">
                <h2 className="sm:text-3xl font-medium text-gray-900">
                  Pro
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-purple-700 sm:text-4xl">
                    {" "}
                    999₹{" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                    /month
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 100,000 Words/Month </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 100+ Template Access</span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    Unlimited Download & Copy{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">Priority Support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700">
                    {" "}
                    Exclusive Content Templates{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 1 Year of History</span>
                </li>
              </ul>

              <button
                disabled={loading}
                onClick={() => CreateSubscription()}
                className="flex w-full my-3 justify-center  hover:scale-110 transition hover:bg-purple-600  text-center font-medium text-white mt-4 py-2 h-13 border rounded-full bg-purple-500"
              >
                {loading && <Loader2 className="animate-spin" />}
                {userSubscription ? 'Active Plan' : 'Get Started'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default upgrade;
