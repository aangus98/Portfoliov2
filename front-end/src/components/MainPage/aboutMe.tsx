import React from "react";
import { getAge } from "./utils/age";

export default function Age() {
  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    // Re-render shortly after midnight local time
    const scheduleNext = () => {
      const d = new Date();
      const nextMidnight = new Date(d);
      nextMidnight.setHours(24, 0, 5, 0); // 00:00:05 next day
      const ms = nextMidnight.getTime() - d.getTime();
      return window.setTimeout(() => {
        setNow(new Date());
        timer = scheduleNext();
      }, ms);
    };

    let timer = scheduleNext();
    return () => window.clearTimeout(timer);
  }, []);

  const age = getAge("1998-02-05", now);

return (
  <>
    <h3>Howdy! I'm Andrew, a passionate full stack developer based in Austin.</h3>
    <p>I’m a full-stack developer with a strong foundation in <span className="highlight">JavaScript, TypeScript, React, Node.js, and SQL-based databases</span>, focused on building clear, reliable, and maintainable applications. My background in teaching and data-driven roles shaped how I approach software: break complex problems into structured systems, document decisions clearly, and prioritize solutions that are practical and scalable. I care less about flashy code and more about code that’s readable, intentional, and easy for others to work with.
    <br />
    I’m especially interested in projects where logic, data, and user experience intersect—<span className="highlight">dashboards, internal tools, APIs, and workflow-driven applications</span>. I bring a steady, detail-oriented mindset to development, taking the time to understand requirements before writing code and refining solutions through iteration. Whether working independently or as part of a team, my goal is simple: build software that solves real problems, holds up under scrutiny, and continues to work long after launch.
    <br />
   Outside of coding, I’m a {age}-year-old dad who enjoys hiking, exploring new ideas, and spending time with my wife and daughter.
    </p>
  </>
);
}
