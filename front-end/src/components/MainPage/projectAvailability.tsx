import React from "react";

type AvailabilityDotProps = {
  available: boolean;
  className?: string;
};

export default function AvailabilityDot({
  available,
  className = "",
}: AvailabilityDotProps) {
  return (
    <span
      aria-label={available ? "Available for projects" : "Unavailable for projects"}
      role="status"
      className={[
        "relative inline-flex h-3 w-3 rounded-full",
        available ? "bg-emerald-400" : "bg-red-400",
        className,
      ].join(" ")}
    >
      {/* Pulse */}
      <span
        className={[
          "absolute inset-0 rounded-full opacity-75 animate-ping",
          available ? "bg-emerald-400" : "bg-red-400",
        ].join(" ")}
      />
    </span>
  );
}
