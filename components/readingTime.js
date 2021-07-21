export default function ReadingTime({ minutes, className }) {
  const roundedMinutes = Math.round(minutes);
  const readableText = roundedMinutes <= 1 ? "Menos de un minuto" : `Aprox. ${roundedMinutes} minutos`;
  return (
    <div className="flex items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className={className}>{readableText}</span>
    </div>
  );
}
