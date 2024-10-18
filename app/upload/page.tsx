/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MRIAlzDetection from "@/components/File";
import { FileUpload } from "@/components/ui/FileUpload";
import { WavyBackgroundDemo } from "@/components/wavebgg";
// import {ChangeEvent, FormEvent } from "react";

export default function UploadPage() {
  return (
    <div className="bg-black-100 overflow-x-hidden">
      <WavyBackgroundDemo />
      <MRIAlzDetection />

      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black-100 dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg mb-[75px]">
        <FileUpload />
      </div>

      <div>
        <footer>
          <div className="container mx-auto px-6">
            <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
              <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-neutral-100 dark:text-white font-bold mb-2">
                  © 2021 by MRIAlzDetection
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// export default UploadPage;
