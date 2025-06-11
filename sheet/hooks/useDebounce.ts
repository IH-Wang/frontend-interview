import { useState, useEffect } from "react";
import { DEBOUNCE_DELAY_TIME } from "@/constants";

export function useDebounce<T>(value: T, delay: number = DEBOUNCE_DELAY_TIME): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}