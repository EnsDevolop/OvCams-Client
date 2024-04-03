import axios, { AxiosError } from "axios"
import { customCookie } from "@/libs/CustomCookie"
import { useReissue } from "./auth"

export const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    const accessToken = customCookie.get.accessToken()
    const returnConfig = {
      ...config,
    }
    if (accessToken) {
      returnConfig.headers!["Authorization"] = `Bearer ${accessToken}`
    }
    return returnConfig
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config } = error
      const refreshToken = customCookie.get.refreshToken()
      if (error.response.status === 403 || error.response.status === 401) {
        if (refreshToken) {
          useReissue(refreshToken)
        } else {
          customCookie.remove.accessToken()
          customCookie.remove.refreshToken()
        }
      } else return Promise.reject(error)
    }
  },
)
