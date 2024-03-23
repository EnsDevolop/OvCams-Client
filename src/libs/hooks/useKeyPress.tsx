import { useState, useEffect } from "react"

export default function useKeyPress(targetKey: string) {
  const [isKeyPressed, setIsKeyPressed] = useState(false)

  const downHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setIsKeyPressed(true)
    }
  }

  const upHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setIsKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)

    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
  }, [targetKey])

  return [isKeyPressed]
}
