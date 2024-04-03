import { useState } from "react"

export default function useTabs(initialTab: number, allTabs: React.ReactNode[]) {
  const [currentIndex, setCurrentIndex] = useState(initialTab)

  return [currentIndex, allTabs[currentIndex], setCurrentIndex] as [number, React.ReactNode, typeof setCurrentIndex]
}
