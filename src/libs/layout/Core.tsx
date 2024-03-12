"use client";

import { Fragment } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { Global } from "@emotion/react";

export default function Core() {
  return (
    <Fragment>
      <Global styles={GlobalStyles} />
    </Fragment>
  );
}
