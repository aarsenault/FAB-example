// todo: take in props to adjust size with styled components

const PngIcon = ({ image, alt, size = "small" }) => {
  return (
    <img
      src={image}
      alt={alt}
      style={size === "small" ? { width: "50px" } : { width: "100px" }}
    />
  );
};

export default PngIcon;
