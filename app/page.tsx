/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Hero } from "@/components/Hero";
import { SidebarDemo } from "@/components/sidebar";
import { FlipWords } from "@/components/ui/flipwords";
import { useEffect, useState } from "react";
import axios from "axios";
import CoreFeatures from "@/components/Features";
import FAQ from "@/components/Faq";
import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { LampDemo } from "@/components/lamp";

//receive username from django
const fetchUsername = async (): Promise<string> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/`,{
      withCredentials: true,
      method :"GET",
    });
    // console.log(response);
    if (response.data.user === "") throw "error";
    return response.data.user;
  } catch (error) {
    console.log(error);
    return "Hitka";
  }
};

export default function Home() {
  const words = ["Patients", "Caretakers", "Doctors"];
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const getUsername = async () => {
      const username = await fetchUsername();

      setUser(username);
    };

    getUsername();
  }, []);

  return (
    <main suppressHydrationWarning={true}>
      <div>
        <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto h-[100vh] ">
          <Hero />
        </div>
        <div>
          <SidebarDemo user={user} />
        </div>
        <div className="h flex justify-center items-center px-4">
          <div className="text-6xl mx-auto font-semibold text-white-100 dark:text-neutral-400 absolute top-[38vh]">
            Helping
            <FlipWords words={words} /> <br />
            to live a better life.
          </div>
        </div>

        <div>
          <CoreFeatures />
        </div>
        <div>
          <FAQ />
        </div>
        <div>
          <InfiniteMovingCardsDemo />
          <LampDemo />
        </div>
      </div>
    </main>
  );
}
