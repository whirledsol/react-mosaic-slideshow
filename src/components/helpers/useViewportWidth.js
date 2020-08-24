import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const getViewportWidth = () => {
    let e = document.documentElement || document.body;
    return e["clientWidth"];
  };

  const [viewportWidth, setViewportWidth] = useState(getViewportWidth());

  useEffect(() => {
    const setFromEvent = () => setViewportWidth(getViewportWidth());

    window.addEventListener("resize", setFromEvent);
    window.addEventListener("load", setFromEvent);

    return () => {
      window.removeEventListener("resize", setFromEvent);
      window.removeEventListener("load", setFromEvent);
    };
  }, []);

  return viewportWidth;
};
export default useViewportWidth;
