import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const SignUp = (props: any) => {
  return (
    <>
      <div className="px-10 py-8 rounded-3xl bg-white border-2">
        <h1 className="text-5xl font-semibold">
          <span className="text-[#98C58B] hover:text-[#18939B] transition-all">
            Create
          </span>{" "}
          an Account!
        </h1>
        <p className=" text-lg font-medium text-gray-500 mt-4">
          Enter following details to proceed:
        </p>
        {/* Name */}
        <div className="mt-4 pb-4">
          <div className="flex w-full max-w-sm items-center gap-4">
            <Label htmlFor="name" className="text-md">
              FullName
            </Label>
            <Input type="name" id="name" placeholder="Enter full name" />
          </div>
          <div className="mt-3 flex items-center">
            <div className="flex w-full max-w-sm items-center gap-4">
              <Label htmlFor="dept" className="text-md">
                Department
              </Label>
              <Input type="dept" id="dept" placeholder="Enter your dept." />
            </div>
          </div>

          {/* Email */}
          <div className="mt-3 flex items-center">
            <div className="flex w-full max-w-sm items-center gap-4">
              <Label htmlFor="email" className="text-md">
                Email
              </Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>
          {/* Mobile Number */}
          <div className="mt-2 flex items-center">
            <div className="flex w-full max-w-sm items-center gap-4">
              <Label htmlFor="mob" className="text-md">
                Mobile No.
              </Label>
              <Input type="mob" id="mob" placeholder="Enter Mobile No." />
            </div>
          </div>
          {/* Password */}
          <div className="mt-2 flex-col">
            <div className="mb-2 flex items-center">
              <div className="flex w-full max-w-sm items-center gap-9">
                <Label htmlFor="pass" className="text-md">
                  Password
                </Label>
                <Input type="pass" id="pass" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex w-full max-w-sm items-center gap-4">
                <Label htmlFor="pass" className="text-md">
                  Confirm Password
                </Label>
                <Input type="pass" id="pass" placeholder="••••••••" />
              </div>
            </div>
          </div>
          {/* Create Account */}
          <div className="flex flex-col mt-6">
            <Button
              variant="secondary"
              className="bg-[#98C58B] text-white rounded-xl text-lg font-semibold py-2 active:scale-[0.98] hover:bg-[#18939B] hover:text-white hover:scale-[1.01] ease-in-out transition-all active:duration-75"
            >
              Sign Up
            </Button>
          </div>
          <div className="mt-3">
            <p>Already have an account? <span className="text-[#98C58B] hover:text-[#18939B] cursor-pointer hover:underline" onClick={() => props.FormActive(true)}>Login</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

