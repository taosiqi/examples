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
export const useDebounce = <T>(value: T, time?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), time);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);
  return debounceValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = { ...value };
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
