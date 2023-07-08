interface Props {
  emoji: string;
  text: string;
  link?: string;
}

export default function Listings(props: Props) {
  return (
    <li className="pb-3">
      {props.link ? (
        <a href={props.link}>
          {props.emoji} {props.text}
        </a>
      ) : (
        <span>
          {props.emoji} {props.text}
        </span>
      )}
    </li>
  );
}