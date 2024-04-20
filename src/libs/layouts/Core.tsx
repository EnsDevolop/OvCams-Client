"use client"

import { Fragment, useEffect } from "react"
import GlobalStyles from "../styles/GlobalStyles"
import { Global } from "@emotion/react"
import AuthModalContainer from "@/containers/auth/AuthModalContainer"
import ScrollToTop from "../ScrollToTop"
import { Toaster } from "react-hot-toast"
import { useSearchParams } from "next/navigation"
import { customCookie } from "../CustomCookie"

export default function Core() {
  const params = useSearchParams()
  useEffect(() => {
    const accessToken = params.get("acc") as string
    const refreshToken = params.get("refresh") as string
    if (accessToken) {
      customCookie.set.token(accessToken, refreshToken)
    }
  }, [])
  return (
    <Fragment>
      <Toaster position="top-right" />
      <ScrollToTop />
      <AuthModalContainer />
      <Global styles={GlobalStyles} />
    </Fragment>
  )
}
