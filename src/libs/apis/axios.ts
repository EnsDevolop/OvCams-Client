import axios, { AxiosError } from "axios"
import { customCookie } from "@/libs/CustomCookie"

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
      if (
        error.response.data.status === 403 ||
        error.response.data.status === 401 ||
        error.response.data.message === "jwt must be provided" ||
        error.response.data.message === "jwt malformed" ||
        error.response.data.message === "RefreshToken NotFound"
      ) {
        if (refreshToken) {
          alert("refresh 토큰 존재함")
        } else {
          customCookie.remove.accessToken()
          customCookie.remove.refreshToken()
        }
      } else return Promise.reject(error)
    }
  },
)
