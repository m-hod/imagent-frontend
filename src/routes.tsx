import { Route, Switch } from "react-router";

import EmailVerification from "./pages/public/email-verification";
import ForgotPassword from "./pages/public/forgot-password";
import Index from "./pages/authenticated";
import React from "react";
import ResetPassword from "./pages/public/reset-password";
import Signin from "./pages/public/signin";
import Signup from "./pages/public/signup";

export default function Routes() {
  return (
    <Switch>
      <Route path="/email/verify/:userId/:hash">
        <EmailVerification />
      </Route>
      <Route path="/reset-password">
        <ResetPassword />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}
