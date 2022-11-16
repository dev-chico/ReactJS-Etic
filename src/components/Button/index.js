import "./button.css";

export function Button({ children, onClick, bgColor }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor ? bgColor : "transparent" }}
    >
      {children}
    </button>
  );
}
