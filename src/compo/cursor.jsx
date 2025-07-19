import { useEffect, useRef, useState } from "react";

export default function AnimatedCursor() {
  const cursorRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnter = () => setIsLinkHovered(true);
    const handleMouseLeave = () => setIsLinkHovered(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const links = document.querySelectorAll("a, button, .cursor-pointer");
    links.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      links.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-50 pointer-events-none w-6 h-6 rounded-full 
        transition-transform duration-150 ease-out 
        mix-blend-difference 
        ${isClicked ? "scale-75 bg-white" : ""}
        ${isLinkHovered ? "scale-150 bg-purple-400" : "bg-white"}
      `}
      style={{ transform: "translate3d(0, 0, 0)" }}
    />
  );
}
