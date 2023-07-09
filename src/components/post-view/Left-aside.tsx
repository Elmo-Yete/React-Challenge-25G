export default function Leftaside() {
  return (
    <div className="flex flex-col">
      <div>
        <img
          src="../src/assets/icons/heart-regular-24.svg"
          alt="heart-reactions icon"
        />
        <p>4</p>
      </div>
      <div>
        <img src="../src/assets/icons/comments-count.svg" alt="comments icon" />
        <p>0</p>
      </div>
      <div>
        <img
          src="../src/assets/icons/save-No-Background-Icon.svg"
          alt="comments icon"
          className="w-6 h-6"
        />
        <p>0</p>
      </div>
    </div>
  );
}
