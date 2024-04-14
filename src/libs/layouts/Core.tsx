"use client"

import { Fragment } from "react"
import GlobalStyles from "../styles/GlobalStyles"
import { Global } from "@emotion/react"
import AuthModalContainer from "@/containers/auth/AuthModalContainer"
import ScrollToTop from "../ScrollToTop"
import { Toaster } from "react-hot-toast"

export default function Core() {
  return (
    <Fragment>
      <Toaster position="top-right" />
      <ScrollToTop />
      <AuthModalContainer />
      <Global styles={GlobalStyles} />
    </Fragment>
  )
}
