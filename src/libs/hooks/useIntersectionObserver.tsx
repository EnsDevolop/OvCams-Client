import { InfiniteQueryObserverResult } from "@tanstack/react-query"
import { useEffect, useState } from "react"

interface IUseIntersectionObserverProps {
  threshold?: number
  hasNextPage: boolean | undefined
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>
}

export default function useIntersectionObserver({
  threshold = 1,
  hasNextPage,
  fetchNextPage,
}: IUseIntersectionObserverProps) {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null)
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    })
  }

  useEffect(() => {
    if (!target) return

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    })

    observer.observe(target)

    return () => observer.unobserve(target)
  }, [observerCallback, threshold, target])

  return { setTarget }
}
