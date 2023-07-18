import { Link } from "react-router-dom";
export default function NavPills() {
  return (
    <article>
      <div className="flex flex-row pb-3 gap-5">
        <div>
          <Link to="/relevant">
            <button type="button" className="font-bold">
              Relevant
            </button>
          </Link>
        </div>
        <div>
          <Link to="/latest">
            <button type="button">Latest</button>
          </Link>
        </div>
        <div>
          <button type="button">Top</button>
        </div>
      </div>
    </article>
  );
}
