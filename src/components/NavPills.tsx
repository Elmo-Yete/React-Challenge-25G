export default function NavPills() {
  return (
    <article>
      <div className="flex flex-row pb-3 gap-5">
        <div>
          <button type="button" className="font-bold">
            Relevant
          </button>
        </div>
        <div>
          <button type="button">Latest</button>
        </div>
        <div>
          <button type="button">Top</button>
        </div>
      </div>
    </article>
  );
}
