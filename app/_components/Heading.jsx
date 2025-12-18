function Heading({ children, as = "h1", position = "left" }) {
  const Tag = as;

  const styles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
  };

  const positions = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Tag className={`${styles[as]} ${positions[position]}`}>{children}</Tag>
  );
}
export default Heading;
