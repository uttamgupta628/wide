import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Enable manual scroll restoration to handle it ourselves
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Skip scrolling on the first render (page load/refresh)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Only scroll to top on actual navigation
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
