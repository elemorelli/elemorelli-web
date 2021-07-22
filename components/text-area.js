export default function TextArea({ name, text }) {
  return (
    <div className="relative col-span-2">
      <textarea
        id={name}
        name={name}
        placeholder={text}
        required
        className="peer placeholder-transparent w-full rounded-md h-28 
        bg-gray-200
        focus:border-bg-blue-500 focus:ring-1"
      />
      <label
        htmlFor={name}
        className="absolute transition-all px-2
        text-sm text-gray-600  left-0 -top-5  
        peer-focus:text-sm peer-focus:text-gray-600 peer-focus:left-0 peer-focus:-top-5  
        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2"
      >
        {text}
      </label>
    </div>
  );
}
