"use client"

import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useEmailMutation = () => {
  const response = async (param: { email: string }) => {
    const { data } = await axios.post("url", param)
    return data
  }
  return useMutation({
    mutationFn: response,
  })
}
