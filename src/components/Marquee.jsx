const Marquee = ({ children, speed = 20, className = "" }) => (
  <div className={`marquee-viewport ${className}`}>
    <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
      <span className="marquee-item">{children}</span>
      <span className="marquee-item" aria-hidden="true">{children}</span>
    </div>
  </div>
);

export default Marquee;
