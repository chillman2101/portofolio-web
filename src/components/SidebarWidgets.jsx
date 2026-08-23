import { useEffect, useState } from "react";

const VISITOR_KEY = "portfolio_visitor_count";

const useVisitorCount = () => {
  const [baseCount, setBaseCount] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    try {
      const alreadyCounted = sessionStorage.getItem("portfolio_session_counted");
      const stored = parseInt(localStorage.getItem(VISITOR_KEY), 10);
      const current = Number.isFinite(stored) ? stored : 13042;

      if (!alreadyCounted) {
        const next = current + 1;
        localStorage.setItem(VISITOR_KEY, String(next));
        sessionStorage.setItem("portfolio_session_counted", "1");
        setBaseCount(next);
        setCount(next);
      } else {
        setBaseCount(current);
        setCount(current);
      }
    } catch {
      // Storage access blocked (e.g. Safari Private Browsing) — leave count null.
    }
  }, []);

  // Gimmick: ticks up by 1/sec, then once between 5-10s in, it rapid-counts
  // up to 9999999 and stays there until the page is refreshed.
  useEffect(() => {
    if (baseCount === null) return;

    let tickInterval;
    let burstTimeout;
    let burstInterval;
    let bursting = false;

    tickInterval = setInterval(() => {
      if (!bursting) setCount((c) => c + 1);
    }, 1000);

    const delay = 5000 + Math.random() * 5000;
    burstTimeout = setTimeout(() => {
      bursting = true;
      burstInterval = setInterval(() => {
        setCount((c) => {
          if (c >= 9999999) {
            clearInterval(burstInterval);
            clearInterval(tickInterval);
            return 9999999;
          }
          return c + Math.floor(20000 + Math.random() * 60000);
        });
      }, 30);
    }, delay);

    return () => {
      clearInterval(tickInterval);
      clearTimeout(burstTimeout);
      clearInterval(burstInterval);
    };
  }, [baseCount]);

  return count;
};

const LeftWidgets = () => {
  const count = useVisitorCount();
  return (
    <>
      <div className="retro-widget">
        <div className="retro-widget-title">VISITOR COUNT</div>
        <div className="retro-counter">
          {count === null ? "-------" : String(count).padStart(7, "0")}
        </div>
      </div>
      <div className="retro-widget">
        <div className="retro-widget-title">DISPLAY</div>
        <div>Best viewed in<br />1024×768</div>
      </div>
    </>
  );
};

const RightWidgets = () => (
  <>
    <div className="retro-widget">
      <div className="retro-widget-title retro-blink">⚠ UNDER CONSTRUCTION ⚠</div>
      <div>This site is always<br />a work in progress</div>
    </div>
    <div className="retro-widget">
      <div className="retro-widget-title">POWERED BY</div>
      <div>⚛ React + Vite</div>
    </div>
  </>
);

const SidebarWidgets = ({ side }) => (
  <aside>{side === "left" ? <LeftWidgets /> : <RightWidgets />}</aside>
);

export default SidebarWidgets;
