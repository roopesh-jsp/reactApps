export default function Input({ label, notValidity }) {
  let inputClasses =
    " text-stone-900  p-1 focus:outline-none rounded bg-slate-50 ";
  let labelClasses = "uppercase";
  console.log(notValidity);
  if (notValidity) {
    inputClasses += " bg-red-500 ";
  } else {
    inputClasses += " bg-white-500";
  }
  return (
    <p className="flex flex-col mt-2 gap-2 text-l font-semibold mt-1 ">
      <label className={labelClasses}>{label}</label>
      <input type="email" className={inputClasses} />
    </p>
  );
}
