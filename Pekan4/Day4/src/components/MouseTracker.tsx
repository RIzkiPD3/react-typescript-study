import { useState, useEffect } from "react";
import type { ReactNode } from "react";

interface Props {
  children: (pos: { x: number; y: number }) => ReactNode;
}

export default function MouseTracker({ children }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handler);

    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return <div className="p-6 border rounded-md">{children(pos)}</div>;
}
