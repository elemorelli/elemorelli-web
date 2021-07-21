import { parseISO, format } from "date-fns";

export default function Date({ dateString, className }) {
  const date = parseISO(dateString);
  const formattedDate = format(date, "yyyy-MM-dd");

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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <time dateTime={formattedDate} className={className}>
        {formattedDate}
      </time>
    </div>
  );
}
