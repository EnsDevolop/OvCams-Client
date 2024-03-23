import { getCookie, setCookie, deleteCookie } from "cookies-next"

export const customCookie = {
  get: {
    accessToken: () => getCookie("access_token"),
    refreshToken: () => getCookie("refresh_token"),
  },
  set: {
    token: (access: string, refresh: string) => {
      setCookie("access_token", access)
      setCookie("refresh_token", refresh)
    },
  },
  remove: {
    accessToken: () => deleteCookie("access_token"),
    refreshToken: () => deleteCookie("refresh_token"),
  },
} as const
