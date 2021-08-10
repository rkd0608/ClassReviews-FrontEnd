import React, { useContext } from "react";
import styles from "./ForgotPasswordPage.module.css";
import { firebaseAuth } from "../provider/AuthProvider";

export function ForgotPasswordPage(props) {
  const { handleForgotPassword, initEmail, setInitEmail, errors } =
    useContext(firebaseAuth);

  const handleResetLink = (e) => {
    e.preventDefault();
    handleForgotPassword();
    props.history.push("/users/emailSent");
  };

  const handleChange = (e) => {
    const name = e.target.value;
    console.log(initEmail);
    setInitEmail(name);
  };

  return (
    <body className={styles["body"]}>
      <div className={styles["container-forgot"]}>
        <div className={styles["wrap-forgot"]}>
          <div className={styles["form-container"]}>
            <div className={styles["heading"]}>
              <h1>Forgot Password</h1>
            </div>
            <div className={styles["subheading"]}>
              <p>
                <i>
                  Please enter the e-mail address you used while creating your
                  account. We'll send a link to reset your password.
                </i>
              </p>
            </div>
            <div className={styles["label"]}>
              <p>E-MAIL</p>
            </div>
            <form className="email-form" onSubmit={handleResetLink}>
              <input
                className={styles["email-input"]}
                type="email"
                spellCheck="false"
                placeholder="email address"
                onChange={handleChange}
              ></input>
            </form>
            <button className={styles["send-btn"]} onClick={handleResetLink}>
              Send Link
            </button>
            {errors.length > 0
              ? errors.map((error, index) => (
                  <p key={index} style={{ color: "red" }}>
                    {error}
                  </p>
                ))
              : null}
          </div>
        </div>
      </div>
    </body>
  );
}
