import React from "react";
import GoogleButton from "react-google-button";

const LoginPrompt = () => {
  return (
    <div
      className={
        "fixed flex w-full h-full bg-gray-400/40 items-center justify-center overflow-hidden"
      }
    >
      <div
        className={
          "rounded-xl bg-gray-800 flex flex-col items-center p-10 drop-shadow-sm"
        }
      >
        <div className={"text-2xl font-semibold mb-5"}>
          Verify Your Student ID
        </div>
        <GoogleButton />
        <button className="underline underline-offset-2 text-gray-400 mt-3">
          Continue as Guest (Demo Mode)
        </button>
      </div>
    </div>
  );
};

export default LoginPrompt;
