"use client";
 
type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};
 
export default function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: "#2563eb", color: "white" },
    secondary: { background: "#6b7280", color: "white" },
    danger: { background: "#dc2626", color: "white" },
  };
 
  return (
<button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "background 0.2s ease",
        width: "100%",
      }}
>
      {text}
</button>
  );
}