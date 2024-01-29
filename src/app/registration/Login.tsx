"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
const Login = () => {
  return (
    <>
      <div>
        <div className="px-10 py-12 rounded-3xl bg-white border-2">
          <h1 className="text-5xl font-semibold">
            <span className="text-[#98C58B] hover:text-[#18939B]">Welcome</span>{" "}
            Back!
          </h1>
          <p className=" text-lg font-medium text-gray-500 mt-4">
            Sign in to your account
          </p>
          <div className="mt-8">
            <div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="mt-4">
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="password" className="text-lg">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <button className="font-medium text-base text-[#98C58B] hover:underline">
                Forgot Password
              </button>
            </div>
            <div className="flex flex-col mt-8 gap-y-4">
              <Button
                variant="secondary"
                className="bg-[#98C58B] text-white rounded-xl text-lg font-semibold py-2 active:scale-[0.98] hover:bg-[#18939B] hover:text-white hover:scale-[1.01] ease-in-out transition-all active:duration-75"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
