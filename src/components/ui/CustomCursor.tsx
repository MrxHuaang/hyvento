"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);

    // Hover detection for interactive elements
    const addHover = () => cursorRef.current?.classList.add("hovering");
    const removeHover = () => cursorRef.current?.classList.remove("hovering");

    const interactiveSelector =
      "a, button, input, textarea, select, [role='button']";
    const observer = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>(interactiveSelector)
        .forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
          el.addEventListener("mouseenter", addHover);
          el.addEventListener("mouseleave", removeHover);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    document
      .querySelectorAll<HTMLElement>(interactiveSelector)
      .forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

    // Lerp animation loop
    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      observer.disconnect();
    };
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
