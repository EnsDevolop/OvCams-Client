import { getCookie, setCookie, deleteCookie } from "cookies-next"

export const customCookie = {
  get: {
    accessToken: () => getCookie("access_token"),
    refreshToken: () => getCookie("refresh_token"),
  },
  set: {
    token: (access: string, refresh: string) => {
      setCookie("access_token", access, {
        maxAge: 4 * 60 * 60 * 1000,
      })
      setCookie("refresh_token", refresh, {
        maxAge: 4 * 24 * 60 * 60 * 1000,
      })
    },
  },
  remove: {
    accessToken: () => deleteCookie("access_token"),
    refreshToken: () => deleteCookie("refresh_token"),
  },
} as const
