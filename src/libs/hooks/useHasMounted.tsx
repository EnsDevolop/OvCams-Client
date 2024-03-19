import { useState, useEffect } from "react"

export default function useHasMounted() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
