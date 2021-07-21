export default function TextArea({ name, text, required }) {
  return (
    <div className="relative col-span-2">
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={text}
        className="peer w-full h-48 bg-transparent border-b-2 border-gray-800 placeholder-transparent"
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
