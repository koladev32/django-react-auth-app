import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import authSlice from "../store/slices/auth";
import axios from "axios";
import { useHistory } from "react-router";

function Login() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (email: string, password: string) => {
    axios
      .post("login", { email, password })
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.access,
            refreshToken: data.refresh,
          })
        );
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setMessage(err.response.data.detail.toString());
      });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    let email = e.target.email?.value;
    let password = e.target.element.password?.value;
    setLoading(true);
    handleLogin(email, password);
  };

  const classes = {
    pageBody: "h-screen flex bg-gray-bg1",
    formContainer:
      "w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl  font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
  };

  return (
    <div className={classes.pageBody}>
      <div className={classes.formContainer}>
        <h1 className={classes.formHeading}>Log in to your account 🔐</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="space-y-4">
            <input
              className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>

          <div className={classes.btnContainer}>
            <button
              type="submit"
              className="rounded border-gray-300 p-2 w-32 bg-blue-700 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
