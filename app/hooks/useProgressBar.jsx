import { useEffect, useState } from "react";

const useProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const newProgress =
        (scrollPosition / (documentHeight - windowHeight)) * 100;

      setProgress(Math.max(0, Math.min(100, newProgress)));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
};

export default useProgressBar;
