export default function Input({ name, type, text, required }) {
  return (
    <div className="relative col-span-2 md:col-span-1">
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={text}
        className="peer w-full h-10 bg-transparent border-b-2 border-gray-800 placeholder-transparent"
      />
      <label
        htmlFor={name}
        className="absolute transition-all
    text-sm text-gray-600  left-0 -top-3.5  
    peer-focus:text-sm peer-focus:text-gray-600 peer-focus:left-0 peer-focus:-top-3.5  
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2"
      >
        {text}
        {required ? "*" : undefined}
      </label>
    </div>
  );
}
