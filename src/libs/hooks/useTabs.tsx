import { useState } from "react"

export default function useTabs(initialTab: number, allTabs: React.ReactNode[]) {
  const [currentIndex, setCurrentIndex] = useState(initialTab)

  return [allTabs[currentIndex], setCurrentIndex] as [React.ReactNode, typeof setCurrentIndex]
}
