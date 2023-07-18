interface Props {
  emoji: string;
  text: string;
  link?: string;
}

export default function Listings(props: Props) {
  return (
    <li className="p-3 hover:bg-blue-300/75 hover:text-blue-700  rounded-2xl">
      {props.link ? (
        <a href={props.link}>
          {props.emoji} {props.text}
        </a>
      ) : (
        <span className="cursor-pointer">
          {props.emoji} {props.text}
        </span>
      )}
    </li>
  );
}
