export default function Input({ label = "", id, ...props }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>

      <input name={id} id={id} {...props} />
    </p>
  );
}
