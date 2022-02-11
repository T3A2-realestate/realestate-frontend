import React, { useState, useContext } from "react";
// Context
import { userContext } from "../../utils/userContext";

// Redirect method
import { useNavigate } from "react-router-dom";

// sub-component
import SignUpFormLink from "./SignUpFormLink";

// Form validation
import { useFormik } from "formik"


function SignUpForm({ linkSignIn }) {
  const defaultFormValues = {
    phone: "",
    email: "",
    password: "",
    password_comfirmation:"",
    errMessage: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const navigate = useNavigate();
  const { state: userState, signUp } = useContext(userContext);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signUp({
      phone:formValues.phone,
      email: formValues.email,
      password: formValues.password,
      password_comfirmation:formValues.password_comfirmation
    });
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="phone"
            className="mb-1 text-xs tracking-wide text-gray-600"
          >
            Phone Number:
          </label>
          <div className="relative">
            <div
              className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
            >
              <i className="fas fa-at text-blue-500"></i>
            </div>

            <input
              type="phone"
              name="phone"
              id="phone"
              value={formValues.phone}
              onChange={handleChange}
              className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label
            htmlFor="email"
            className="mb-1 text-xs tracking-wide text-gray-600"
          >
            E-Mail Address:
          </label>
          <div className="relative">
            <div
              className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
            >
              <i className="fas fa-at text-blue-500"></i>
            </div>

            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label
            htmlFor="password"
            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
          >
            Password:
          </label>
          <div className="relative">
            <div
              className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
            >
              <span>
                <i className="fas fa-lock text-blue-500"></i>
              </span>
            </div>

            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label
            htmlFor="password_comfirmation"
            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
          >
            Password comfirmation:
          </label>
          <div className="relative">
            <div
              className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
            >
              <span>
                <i className="fas fa-lock text-blue-500"></i>
              </span>
            </div>

            <input
              type="Password"
              name="password_comfirmation"
              id="password_comfirmation"
              value={formValues.password_comfirmation}
              onChange={handleChange}
              className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
              placeholder="Enter your password_comfirmation"
            />
          </div>
        </div>
        <div className="flex w-full">
          <button
            type="submit"
            className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
          >
            <span className="mr-2 uppercase">Sign Up</span>
            <span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
      <SignUpFormLink linkSignIn={linkSignIn} />
    </div>
  );
}

export default SignUpForm;
