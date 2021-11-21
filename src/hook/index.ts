import { useEffect, useState } from "react";

export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};
/**
 *
 * @param value useState
 * @param time 延时时间
 */
export const useDebounce = (value: any, time?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), time);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);
  return debounceValue;
};
