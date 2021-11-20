import { useEffect, useState } from "react";

export const useMount = (fn) => {
  useEffect(() => {
    fn();
  }, []);
};
/**
 *
 * @param value useState
 * @param time 延时时间
 */
export const useDebounce = (value, time) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), time);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);
  return debounceValue;
};
