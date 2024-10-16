/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import MRIAlzDetection from "@/components/File";
import { FileUpload } from "@/components/ui/FileUpload";
import { WavyBackgroundDemo } from "@/components/wavebgg";
// import {ChangeEvent, FormEvent } from "react";

export default function UploadPage() {
  return (
    <div className="bg-black-100 overflow-x-hidden" >
      <WavyBackgroundDemo />
      <MRIAlzDetection />
      
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black-100 dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload />
    </div>
      
      {/* {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <h3>Prediction Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div> */}
      {/* )} */}
    </div>
  );
};

// export default UploadPage;
