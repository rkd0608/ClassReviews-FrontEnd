import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";
import { Route, Switch } from "react-router-dom";
import { AddCoursePage } from "./AddCoursePage/AddCoursePage";
import { LandingPage } from "./LandingPage/LandingPage";
import { HomePage } from "./HomePage/HomePage";
import { ReviewsPage } from "./ReviewsPage/ReviewsPage";
import { Search } from "./Search/Search";
import { SigninPage } from "./SigninPage/SigninPage";
import { SignupPage } from "./SignupPage/SignupPage";
import { ForgotPasswordPage } from "./ForgotPasswordPage/ForgotPasswordPage";
import { EmailSentPage } from "./EmailSentPage/EmailSentPage";

function App() {
  const { token } = useContext(firebaseAuth);
  console.log(token);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(rProps) => (token === null ? <LandingPage /> : <HomePage />)}
      />
      <Route exact path="/users/signin" component={SigninPage} />
      <Route exact path="/users/register" component={SignupPage} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/reviews" component={ReviewsPage} />
      <Route exact path="/addCourse" component={AddCoursePage} />
      <Route
        exact
        path="/users/forgotPassword"
        component={ForgotPasswordPage}
      />
      <Route exact path="/users/emailSent" component={EmailSentPage} />
    </Switch>
  );
}

export default App;
