import type { Talk } from "types";
import { FormattedDatetime } from "./Datetime";

type Props = {
  talks: Talk[];
};

export default function TalkList({ talks }: Props) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {talks.map((talk, index) => (
        <TalkCard talk={talk} key={`talk-${index}`} />
      ))}
    </div>
  );
}

const TalkCard = ({ talk }: { talk: Talk }) => (
  <div className="py-2 border-b border-b-skin-fill/40 border-solid">
    <a
      href={talk.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
    >
      <h3 className="text-lg font-medium decoration-dashed hover:underline">
        {talk.title}
      </h3>
    </a>
    <p className="mt-2 flex items-center text-base ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`scale-90 inline-block h-6 w-6 fill-skin-base`}
        aria-hidden="true"
      >
        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
      </svg>
      <span className={`italic text-sm ml-2`}>
        <FormattedDatetime datetime={talk.date} />
      </span>
    </p>
    <p className="mt-2 flex items-center text-base ">
      <svg
        className="h-6 w-6 mr-2 fill-current scale-90 "
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 0C6.134 0 3 3.134 3 7c0 2.086.868 3.96 2.271 5.316l4.729 5.684a.5.5 0 00.756 0l4.729-5.684A6.993 6.993 0 0017 7c0-3.866-3.134-7-7-7zm0 10.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
      </svg>
      {talk.place}
    </p>
  </div>
);
