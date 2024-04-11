import { useQueryClient, useMutation } from "@tanstack/react-query"
import { instance } from "../axios"
import { IReviewRequest } from "./type"

export const useWriteReviewMutation = (id: string) => {
  const querykey = ["campingDetail", id] as const
  const queryClient = useQueryClient()
  const response = async (content: IReviewRequest) => {
    const { data } = await instance.post(`/review/${id}`, content)
    return data
  }
  return useMutation({
    mutationKey: ["review", id],
    mutationFn: response,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: querykey })
    },
    onError: () => {
      alert("로그인 이후 이용해주세요")
    },
  })
}
