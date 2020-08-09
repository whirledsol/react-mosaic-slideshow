import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const getViewportWidth = () => {
    let e = window,
      a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    return e[a + "Width"];
  };

  const [viewportWidth, setViewportWidth] = useState(getViewportWidth());

  useEffect(() => {
    const setFromEvent = () => setViewportWidth(getViewportWidth());

    window.addEventListener("resize", setFromEvent);

    return () => {
      window.removeEventListener("resize", setFromEvent);
    };
  }, []);

  return viewportWidth;
};
export default useViewportWidth;
