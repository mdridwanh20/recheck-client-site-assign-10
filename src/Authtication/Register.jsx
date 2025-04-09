import React, { useContext } from "react";
import Register_Form from "./Register_Form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import toast from "react-hot-toast";

export default function Register() {
  const { setUser, createNewUser, facebookLogin , gitHubLogin, googleWithLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // register form
  const handlerRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Password validation: Must contain uppercase, lowercase, and at least 6 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must be at least 6 characters long and include uppercase & lowercase letters."
      );
    }

    // Create new user
    const newUser = await createNewUser(email, password);
    setUser(newUser);

    // Update profile object
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    // Update profile in Firebase
    updateProfile(auth.currentUser, profile)
      .then(() => {
        console.log("User profile updated");
      })
      .catch((error) => {
        console.log("User profile update error", error);
      });

    // Navigate to the home page
    navigate("/");
    toast.success("Successfully Registered!");
    form.reset();
  };
  

  // facebook
  const handlerFacebookLogin = () => {

    facebookLogin()
    .then((result) => {
      setUser(result.user)
      toast.success('Logged in with Facebook!')
      navigate("/")
    })
    .catch((error) =>{
      console.log('this is error from facebook login', error);
      toast.error("Facebook login error")
    })

  };

  // git hub login
  const handlerGithub =() =>{

      gitHubLogin()
      .then((result) =>{
        setUser(result.user)
        toast.success('Logged in with Github!')
        navigate("/")

      }) .catch((error) => {
        console.log('this is error from github',error);
        toast.error("Github login error")
        
      })
      
  }

  // google with login
  const handlerWithGoogle =() =>{
    googleWithLogin()
    .then((result) =>{
      setUser(result.user)
      toast.success('Logged in with Google!')
      navigate("/")

    }) .catch((error) => {
      console.log('this is error from google',error);
      toast.error("Google login error")
      
    })
  }



  return (
    <div>
      <Register_Form
      handlerWithGoogle={handlerWithGoogle}
      handlerGithub={handlerGithub}
        handlerFacebookLogin={handlerFacebookLogin}
        handlerRegister={handlerRegister}
      />
    </div>
  );
}
