import { useState, useEffect, useRef } from "react";

export const ComponentVisible = (initialIsVisible: boolean) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref: any = useRef(null);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref?.current?.contains(event.target)) {
      setIsVisible(false);
    }
  };

  const handleEscape = (event: { keyCode: number }) => {
    if (event.keyCode === 27) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleEscape, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}
