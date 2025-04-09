import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

export default function Login_Form({
  handlerLogin,
  handlerWithGoogle,
  handlerGithub,
  handlerFacebookLogin,
}) {

  
  return (
    <div className="bg-base-100 flex flex-col items-center  justify-center  ">
      <div className="border shadow-md border-gray-200 my-16">
        <div className="lg:flex  items-center flex-col text-xl my-5 justify-center text-gray-900">
          <h2 className="text-2xl py-3 font-bold text-center  text-green-600">
            {" "}
            Login
          </h2>

          <div className="flex gap-5 items-center justify-center">
            <button
              onClick={handlerWithGoogle}
              className="cursor-pointer bg-gray-200 rounded-full p-2"
            >
              {" "}
              <FaGoogle />
            </button>

            <button
              onClick={handlerGithub}
              className="cursor-pointer bg-gray-200 rounded-full p-2"
            >
              {" "}
              <FaGithub />
            </button>

            <button
              onClick={handlerFacebookLogin}
              className="cursor-pointer bg-gray-200 rounded-full p-2"
            >
              {" "}
              <FaFacebook />
            </button>
          </div>
        </div>

        <form onSubmit={handlerLogin} className="p-5 max-w-5xl lg:w-[500px]  ">
          {/* Email Field */}
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input w-full input-bordered focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input w-full input-bordered focus:outline-none"
              required
              autoComplete="password"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mb-3  mt-6">
            <button className="btn bg-green-600 w-full text-white hover:bg-green-700">
              Register
            </button>
          </div>

          <div className="text-center">
            <p>
              I have already account ? Please{" "}
              <Link to="/login" className="font-semibold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
