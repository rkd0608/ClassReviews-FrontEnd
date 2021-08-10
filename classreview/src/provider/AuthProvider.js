import React, { useState } from "react";
// eslint-disable-next-line
import firebase from "firebase";
import { authMethods } from "../firebase/authMethods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const initState = { email: "", password: "" };
  const [initEmail, setInitEmail] = useState("");
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = async () => {
    // middle man between firebase and signup
    console.log("Sign Up function");
    // calling signup from firebase server
    handleEmailVerification();
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };
  const handleSignin = async () => {
    //changed to handleSingin
    console.log("Sign In function");
    //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handlePersistence = () => {
    authMethods.persistence(inputs.email, inputs.password, setErrors);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  const handleForgotPassword = () => {
    authMethods.resetPassword(initEmail, setErrors);
  };

  const handleEmailVerification = () => {
    authMethods.emailVerification();
  };

  return (
    <firebaseAuth.Provider
      value={{
        //replaced test with handleSignup
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        initEmail,
        setInitEmail,
        errors,
        handleSignout,
        handlePersistence,
        handleForgotPassword,
        handleEmailVerification,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
