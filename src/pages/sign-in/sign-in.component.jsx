import React, { memo } from "react";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInPage = () => (
  <div className="sign-in-page">
    <SignIn />
  </div>
);

export default memo(SignInPage);
