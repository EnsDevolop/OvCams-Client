import { useCallback, useState } from "react"

export default function useToggle(initalValue: boolean) {
  const [value, setValue] = useState(initalValue)
  const onToggle = useCallback(() => {
    setValue(!value)
  }, [value])
  return [value, onToggle] as [boolean, typeof onToggle]
}
