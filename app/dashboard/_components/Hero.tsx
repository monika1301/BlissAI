"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function () {
  const { user, isSignedIn } = useUser();

  return (
    <div>
      <section className="bg-purple-50 min-h-screen flex items-center flex-col relative">
        <div className="absolute  top-0 left-3 ml-1 mt-1">
          <Image src={"/logo.svg"} alt="logo" width={130} height={130} />
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-32">
          <div className="mt-20 mx-auto max-w-4xl text-center">
            <h1 className="bg-gradient-to-r from-purple-700 via-pink-400 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              BlissAI
              <span className="sm:block"> AI Content Generator </span>
            </h1>

            <p className="mx-auto text-purple-500 mt-4 max-w-xl sm:text-xl/relaxed">
              Explore endless possibilities with Bliss AI <br /> Your ultimate
              AI-powered content generation companion
            </p>

            <div className="mt-8 flex flex-wrap text-center justify-center gap-4">
              <a href="/dashboard" className="block">
                <Button className="w-full sm:w-auto text-center rounded border border-purple-600 bg-purple-600 px-12 py-3 hover:scale-105 hover:text-purple-600 transition-all text-lg font-medium text-white hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 flex items-center justify-center">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Image
          src="/dashboard.png"
          alt="dashboard"
          width={900}
          height={700}
          className="mb-4 mt-5 rounded-xl border-2"
        />
      </section>
    </div>
  );
}
