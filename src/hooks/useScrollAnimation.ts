import { useEffect, useRef, useState } from "react";

export function useScrollAnimation<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShow(true);
        obs.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return {
    ref,
    show,
    style: { transitionDelay: `${delay}ms` },
  };
}
