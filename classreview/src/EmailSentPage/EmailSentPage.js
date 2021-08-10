import React from "react";
import styles from "./EmailSentPage.module.css";

export function EmailSentPage() {
  return (
    <body className={styles["body"]}>
      <div className={styles["container-forgot"]}>
        <div className={styles["wrap-forgot"]}>
          <div className={styles["form-container"]}>
            <div className={styles["heading"]}>
              <h1>Email Sent!</h1>
            </div>
            <div className={styles["subheading"]}>
              <p style={{ fontSize: "20px" }}>
                A reset link has been sent to the given email address. If you
                did not receive the link,{" "}
                <a href="/users/forgotPassword">Click here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
