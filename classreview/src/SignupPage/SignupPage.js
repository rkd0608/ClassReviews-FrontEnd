import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { firebaseAuth } from "../provider/AuthProvider";
import styles from "./SignupPage.module.css";

export function SignupPage(props) {
  const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);
  console.log(typeof handleSignUp);

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleSignup();
    //handleEmailVerification();

    props.history.push("/");
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
          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <strong className={styles["login-form-title"]}>
              Create an account
            </strong>
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-right">
                <input
                  className="input "
                  type="text"
                  placeholder="Choose a username"
                  spellCheck="false"
                />
                {/* <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span> */}
              </div>
              {/* <p className="help is-success">This username is available</p> */}
              {/* Use 'is-success' for input line 17 to check whether username is avaiable or not! */}
            </div>
            <div className="field">
              <label className="label">Your Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Set your Password</label>
              <p className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <p className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Retype password"
                  onChange={handleChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  className="button is-info is-rounded"
                  style={{ alignItems: "center" }}
                >
                  Register
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
            <div className="text-center" style={{ display: "block" }}>
              <a className={styles["text1"]} href="/users/signin">
                Already have an account? Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default withRouter(SignupPage);
