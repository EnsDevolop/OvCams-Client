import { useQueryClient, useMutation } from "@tanstack/react-query"
import { instance } from "../axios"
import { IReviewRequest } from "./type"
import toast from "react-hot-toast"

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
      toast.error('Please after login')
    },
  })
}
