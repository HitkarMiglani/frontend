/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Hero } from "@/components/Hero";
import { SidebarDemo } from "@/components/sidebar";
import { FlipWords } from "@/components/ui/flipwords";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import CoreFeatures from "@/components/Features";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto h-[100vh] ">
        <Hero />
      </div>
      <div>
        <SidebarDemo user="John" />
      </div>
      <div className="h flex justify-center items-center px-4">
        <div className="text-6xl mx-auto font-semibold text-white-100 dark:text-neutral-400 absolute top-[38vh]">
          Build
          <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>
      </div>

      <div>
      <CoreFeatures />
      </div>
    </div>
  );
}
