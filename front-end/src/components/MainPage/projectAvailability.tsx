import React from "react";
import "./css/availabilityDot.css";

type AvailabilityDotProps = {
  available: boolean;
  className?: string;
};

export default function AvailabilityDot({
  available,
  className = "",
}: AvailabilityDotProps) {
  return (
    <div
      className={`availabilityWrapper ${className}`}
      role="status"
      aria-label={available ? "Available for projects" : "Unavailable for projects"}
    >
      <span
        className={`availabilityDot ${
          available ? "isAvailable" : "isUnavailable"
        }`}
      />
      <span className="availabilityLabel">
        {available ? "Available for projects" : "Unavailable for projects"}
      </span>
    </div>
  );
}
