import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form className="mt-4">
          {/* fullName */}
          <div>
            <label className="label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* username */}
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* password */}
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* confirm password */}
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Gender Checkbox */}
          <GenderCheckbox/>

          {/* link */}
          <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">Already have an account?</a>

          {/* login button */}
          <div>
            <button className="btn btn-block btn-md mt-5">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;