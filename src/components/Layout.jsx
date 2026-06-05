const Container = ({ children, className = "" }) => (
  <div
    className={className}
    style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}
  >
    {children}
  </div>
);

export default Container;
