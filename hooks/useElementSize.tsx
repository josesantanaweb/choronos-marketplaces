import { useState, useEffect } from "react";

const ElementSize = (element: HTMLElement | undefined | null) => {
  const [clientWidth, setClientWidth] = useState<number | undefined>(undefined);
  const [clientheight, setClientHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setClientWidth(element?.clientWidth);
      setClientHeight(element?.clientHeight);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return { clientWidth, clientheight };
};

export default ElementSize;
