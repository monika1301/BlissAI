"use client"
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { getTableColumns, eq, desc } from "drizzle-orm"; // Added desc for descending order
import { ArrowLeft, Clipboard } from "lucide-react";
import Templates from "@/app/(data)/Templates";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export interface History{
  id:Number,
  formData:string,
  aiResponse:string,
  templateSlug:string,
  createdBy:string,
  createdAt:string,
}

function History() {
  const { user } = useUser();
  const [userData, setUserData] = useState<any[]>([]);

  const GetUserData = async (email: string) => {
    try {
      const result = await db
        .select({
          ...getTableColumns(AIOutput),
        })
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, email))
        .orderBy(desc(AIOutput.createdAt)); // Order by createdAt in descending order

      return result;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.primaryEmailAddress) {
        const email = user.primaryEmailAddress.emailAddress;
        const data = await GetUserData(email);
        setUserData(data || []);
      } else {
        console.log("No user email found.");
      }
    };

    fetchData();
  }, [user]);

  const getIconForTemplate = (templateSlug: string) => {
    const template = Templates.find((t) => t.slug === templateSlug);
    return template ? template.icon : "";
  };

  return (
    <div>
       <div className="p-3">
      {" "}
      <Link href={"/dashboard"}>
        {" "}
        <Button>
          {" "}
          <ArrowLeft /> Back{" "}
        </Button>{" "}
      </Link>{" "}
      <h1 className="text-purple-600 px-5 font-bold text-4xl mt-2">History</h1>
      <p className="px-5 text-gray-500">
        Search your previously searched history
      </p>
      <div className="mt-2 py-3 px-6 shadow-md rounded-md flex-col cursor-pointer text-white mb-1 font-bold mx-5 bg-purple-500 grid grid-cols-5 gap-32">
        <div>
          <h1>TEMPLATE</h1>
        </div>
        <div>
          <h1>AI RESPONSE</h1>
        </div>
        <div className="hidden md:block">
          <h1>DATE</h1>
        </div>
        <div className="hidden lg:block">
          <h1>WORDS</h1>
        </div>
        <div>
          <h1>COPY</h1>
        </div>
      </div>
      {userData.map((item, index) => (
        <div
          key={index}
          className={`justify-between items-center py-3 px-6 border-t border-purple-300 flex-col cursor-pointer text-purple-600 font-bold mx-5 grid gap-32 grid-cols-5 ${
            index % 2 === 0 ? "bg-purple-100" : "bg-purple-200"
          }`}
        >
          <div>
            <span role="img" aria-label="Icons">
              <Image
                src={getIconForTemplate(item.templateSlug)}
                alt="icon"
                width={35}
                height={35}
              />
            </span>{" "}
            <h1>{item.templateSlug}</h1>
          </div>
          <div>
            <h1>{item.aiResponse.substring(0, 50) + "..."}</h1>
          </div>
          <div className="hidden md:block">
            <h1>{item.createdAt}</h1>
          </div>
          <div className="hidden lg:block">
            <h1>{item.aiResponse?.length}</h1>
          </div>
          <div>
            <Button
              className="flex p-2 font-md"
              onClick={() => navigator.clipboard.writeText(item.aiResponse)}
            >
              <Clipboard className="flex w-5 h-7" />
              Copy
            </Button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default History;
