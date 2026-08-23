import { useEffect, useState } from "react";

const VISITOR_KEY = "portfolio_visitor_count";

const useVisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("portfolio_session_counted");
    const stored = parseInt(localStorage.getItem(VISITOR_KEY), 10);
    const current = Number.isFinite(stored) ? stored : 13042;

    if (!alreadyCounted) {
      const next = current + 1;
      localStorage.setItem(VISITOR_KEY, String(next));
      sessionStorage.setItem("portfolio_session_counted", "1");
      setCount(next);
    } else {
      setCount(current);
    }
  }, []);

  return count;
};

const LeftWidgets = () => {
  const count = useVisitorCount();
  return (
    <>
      <div className="retro-widget">
        <div className="retro-widget-title">VISITOR COUNT</div>
        <div className="retro-counter">
          {count === null ? "------" : String(count).padStart(6, "0")}
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
