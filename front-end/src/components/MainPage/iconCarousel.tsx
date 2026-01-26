import { useEffect, useMemo, useRef, useState } from "react";
import "./css/tools.css";

export default function IconCarousel({ icons }: { icons: JSX.Element[] }) {
  const first8 = icons.slice(0, 8);
  const loop = [...first8, ...first8];

  return (
    <div className="icon-carousel">
      <div className="icon-track">
        {loop.map((icon, i) => (
          <div className="icon-slot" key={i}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
