import React, { useContext } from "react";
import loginimage from "../assets/loginimage.png";
import { firebaseAuth } from "../provider/AuthProvider";
import styles from "./SigninPage.module.css";

export function SigninPage(props) {
  const { handleSignin, handlePersistence, inputs, setInputs, errors } =
    useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin();
    handlePersistence();
    if (errors.length !== 0) {
      props.history.push("users/signin");
    }
    //handleSignin();
    //props.history.push("/");
    else {
      props.history.push("/");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <body className={styles["body"]}>
      <div className={styles["container-login"]}>
        <div className={styles["wrap-login"]}>
          <div className={styles["login-pic"]}>
            <img src={loginimage} alt="IMG" />
          </div>

          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <strong className={styles["login-form-title"]}>Log In</strong>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success" onClick={handleSubmit}>
                  Login
                </button>
              </p>
              {errors.length > 0
                ? errors.map((error, index) => (
                    <p key={index} style={{ color: "red" }}>
                      {error}
                    </p>
                  ))
                : null}
            </div>
            <div className="label">
              <a className={styles["text1"]} href="/users/forgotPassword">
                Forgot password?
              </a>
            </div>
            <div
              className="text-center"
              style={{ marginTop: "8%", float: "left" }}
            >
              <a className={styles["text2"]} href="/users/register">
                Create an account
                <i
                  className="fas fa-arrow-right"
                  aria-hidden="true"
                  style={{ marginLeft: "5px" }}
                ></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
