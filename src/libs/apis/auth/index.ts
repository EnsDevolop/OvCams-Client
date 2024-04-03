import { customCookie } from "@/libs/CustomCookie"
import axios from "axios"

export const useReissue = (refreshToken: string) => {
  axios
    .put(`http://localhost:8080/auth/reissue`, null, {
      headers: {
        "Refresh-Token": `Bearer ${refreshToken}`,
      },
    })
    .then((e) => customCookie.set.token(e.data.accessToken, e.data.refreshToken))
    .catch((e) => console.log(e))
}
