// my Code ------------->
"use client";
import Login from "@/components/authentication/Login";
import { useState } from "react";
import SignUp from "@/components/authentication/SignUp";
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

// Your code ------------------------->
// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";

// import { UserAuthForm } from "@/components/authentication/user-auth-form";

// export default function AuthenticationPage() {
//   return (
//     <>
//       <div className="md:hidden">
//         <Image
//           src="/examples/authentication-light.png"
//           width={1280}
//           height={843}
//           alt="Authentication"
//           className="block dark:hidden"
//         />
//         <Image
//           src="/examples/authentication-dark.png"
//           width={1280}
//           height={843}
//           alt="Authentication"
//           className="hidden dark:block"
//         />
//       </div>
//       <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
//         <Link
//           href="/"
//           className={cn(
//             buttonVariants({ variant: "ghost" }),
//             "absolute right-4 top-4 md:right-8 md:top-8"
//           )}
//         >
//           Login
//         </Link>
//         <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
//           <div className="absolute inset-0 bg-zinc-900" />
//           <div className="relative z-20 flex items-center text-lg font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="mr-2 h-6 w-6"
//             >
//               <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
//             </svg>
//             Acme Inc
//           </div>
//         </div>
//         <div className="lg:p-8">
//           <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//             <div className="flex flex-col space-y-2 text-center">
//               <h1 className="text-2xl font-semibold tracking-tight">
//                 Create an account
//               </h1>
//               <p className="text-sm text-muted-foreground">
//                 Enter your email below to create your account
//               </p>
//             </div>
//             <UserAuthForm />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
