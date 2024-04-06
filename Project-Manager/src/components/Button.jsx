export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-stone-700 px-3 py-2 mx-5 my-2 rounded-md uppercase font-bold hover:bg-stone-500 md:text-base  text-stone-100"
    >
      {children}
    </button>
  );
}
