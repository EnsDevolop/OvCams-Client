"use client";

import { Fragment } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { Global } from "@emotion/react";
import AuthModalContainer from "@/containers/auth/AuthModalContainer";

export default function Core() {
  return (
    <Fragment>
      <AuthModalContainer />
      <Global styles={GlobalStyles} />
    </Fragment>
  );
}
