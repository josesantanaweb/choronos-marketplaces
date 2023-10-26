import { useState, useEffect } from "react";

const WindowSize = () => {
  const [innerWidth, setInnerWidth] = useState<number | undefined>(undefined);
  const [innerheight, setInnerheight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleWindowResize = () => {
      setInnerWidth(window.innerWidth);
      setInnerheight(window.innerHeight);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return { innerWidth, innerheight };
};

export default WindowSize;
