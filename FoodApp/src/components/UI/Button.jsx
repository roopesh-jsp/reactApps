export default function Button({ children, className, onlyText, ...props }) {
  let cssClasses = onlyText ? "text-button " : "button ";
  cssClasses += "className";
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
