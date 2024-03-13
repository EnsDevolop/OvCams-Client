import { useEffect, useState } from "react";

export default function useAnimation(visible: boolean, time: number) {
  const [worked, setWorked] = useState<boolean>(true);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (visible) {
      setWorked(false);
    } else {
      timeoutId = setTimeout(() => setWorked(true), time);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [visible]);

  return [worked, setWorked] as [boolean, () => void];
}
