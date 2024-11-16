/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MRIAlzDetection from "@/components/File";
import { SidebarDemo } from "@/components/sidebar";
import { FileUpload } from "@/components/ui/FileUpload";
import { WavyBackgroundDemo } from "@/components/wavebgg";
import axios from "axios";
import { useState, useEffect } from "react";
// import {ChangeEvent, FormEvent } from "react";
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


export default function UploadPage() {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const getUsername = async () => {
      const username = await fetchUsername();

      setUser(username);
    };

    getUsername();
  }, []);

  return (
    <div className="bg-black-100 overflow-x-hidden">
      <div>
          <SidebarDemo user={user} />
        </div>
      <WavyBackgroundDemo />
      <MRIAlzDetection />

      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black-100 dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg mb-[75px]">
        <FileUpload />
      </div>
      </div>
  );
}

// export default UploadPage;
