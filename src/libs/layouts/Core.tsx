"use client";

import { Fragment } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { Global } from "@emotion/react";
import AuthModalContainer from "@/containers/auth/AuthModalContainer";
import ScrollToTop from "../ScrollToTop";

export default function Core() {
  return (
    <Fragment>
      <ScrollToTop />
      <AuthModalContainer />
      <Global styles={GlobalStyles} />
    </Fragment>
  );
}
