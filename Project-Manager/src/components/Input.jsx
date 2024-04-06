import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes = "bg-stone-300 p-1 focus:outline-none";
  return (
    <p className="flex flex-col my-3">
      <label className="font-semibold">{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </p>
  );
});
export default Input;
