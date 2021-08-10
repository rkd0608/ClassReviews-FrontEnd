/* eslint-disable no-unused-vars */
import firebase from "firebase";
import firebaseconfig from "./firebaseIndex";

export const authMethods = {
  // firebase helper methods go here...

  signup: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      //make res asynchonous so that we can make grab the token before saving it.
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        //set token to localStorage
        await localStorage.setItem("token", token);
        setToken(token);
        //grab token from local storage and set to state.
        console.log(res);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signin: (email, password, setErrors, setToken) => {
    //change from create users to...
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          //everything is almost exactly the same as the function above
          .then(async (res) => {
            const token = await Object.entries(res.user)[5][1].b;
            // var admin = firebase.auth().currentUser;

            firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                localStorage.setItem("token", token);
                setToken(window.localStorage.token);
                console.log("User is logged in");
              } else {
                localStorage.removeItem("token", token);
                console.log("User is logged out!");
              }
            });
            // await localStorage.setItem("token", token);

            // setToken(window.localStorage.token);
          })
          .catch((err) => {
            setErrors((prev) => [...prev, err.message]);
          });
      });
  },
  //no need for email and password
  signout: (setErrors, setToken) => {
    // signOut is a no argument function
    firebase
      .auth()
      .signOut()
      .then((res) => {
        //remove the token
        localStorage.removeItem("token");
        //set the token back to original state
        setToken(null);
      })
      .catch((err) => {
        //there shouldn't every be an error from firebase but just in case
        setErrors((prev) => [...prev, err.message]);
        //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem("token");
        setToken(null);
        console.error(err.message);
      });
  },

  resetPassword: (email, setErrors) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        console.log("Email sent!");
      })
      .catch(function (e) {
        console.log(e);
        setErrors((prev) => [...prev, e.message]);
      });
  },

  emailVerification: () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        // ...
        console.log("Email verification sent!");
      });
    // [END auth_send_email_verification]
  },

  persistence: (email, password, setErrors) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        console.log("Persistence applied!");
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
};
