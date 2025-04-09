import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Login_Form from "./Login_Form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

export default function Login() {
  const { loginUser, setUser, facebookLogin, gitHubLogin, googleWithLogin } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handlerLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("Welcome back");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error("Failed your login");
      console.log("this is error login page", error.message);
    }

    form.reset();
  };

  // facebook
  const handlerFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Facebook!");
        navigate("/");
      })
      .catch((error) => {
        console.log("this is error from facebook login", error);
        toast.error("Facebook login error");
      });
  };

  // git hub login
  const handlerGithub = () => {
    gitHubLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Github!");
        navigate("/");
      })
      .catch((error) => {
        console.log("this is error from github", error);
        toast.error("Github login error");
      });
  };

  // google with login
  const handlerWithGoogle = () => {
    googleWithLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        console.log("this is error from google", error);
        toast.error("Google login error");
      });
  };

  return (
    <div>
      <Login_Form
        handlerFacebookLogin={handlerFacebookLogin}
        handlerGithub={handlerGithub}
        handlerWithGoogle={handlerWithGoogle}
        handlerLogin={handlerLogin}
      ></Login_Form>
    </div>
  );
}
