import { useState, useEffect } from "react";

function useDebouncing(value, time) {
  const [valueDebouncing, setvalueDebouncing] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setvalueDebouncing(value);
    }, time);

    return () => {
      clearTimeout(handler);
    };
  }, [value, time]);

  return valueDebouncing;
}

export default useDebouncing;
