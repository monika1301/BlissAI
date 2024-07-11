import { Button } from "@/components/ui/button";
import { UserProfile } from "@clerk/nextjs";
import { ArrowLeft} from "lucide-react";
import Link from "next/link";
import React from "react";

function Settings() {
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
      <div className="flex mt-2 justify-center items-center h-full">
        <UserProfile />
      </div>
    </div>
  );
}

export default Settings;
