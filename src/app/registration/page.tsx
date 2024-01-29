"use client";
import Login from "./components/Login";
import { useState } from "react";
import SignUp from "./components/SignUp";
import Image from "next/image";

function Home() {
  const [first, setFirst] = useState(true);
  return (
    <>
      <div className="flex w-full h-screen bg-[#131112]">
        <div className="hidden lg:flex h-full w-1/2 justify-center items-center">
          <Image src="/idsLogo.png" width="600" height="600" alt="ids Logo" />
        </div>
        <div className="w-full flex lg:w-1/2 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center w-full lg:hidden">
              <Image
                src="/idsLogo.png"
                width="200"
                height="200"
                alt="ids Logo"
              />
            </div>
            <div className="flex justify-center items-center m-2">
              {first ? (
                <p className="font-medium text-lg text-[#98C58B]">
                  Don't have an account?
                </p>
              ) : null}
              <button
                className="font-medium text-white text-lg ml-2 hover:underline"
                onClick={() => {
                  setFirst(false);
                }}
              >
                {first ? <span>Sign Up</span> : null}
              </button>
            </div>
            {first ? <Login /> : <SignUp FormActive={setFirst} var={first} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
