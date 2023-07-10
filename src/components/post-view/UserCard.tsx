export default function UserCard() {
  return (
    <article className="bg-dev-to-card-color w-64 h-fit p-2 rounded-md">
      <div className="user-data flex items-end">
        <img
          src="https://randomuser.me/api/portraits/women/60.jpg"
          className="rounded-full w-12"
        />
        <p className="items-end"> Thomas otro</p>
      </div>
      <div className="follow-button py-3">
        <button
          type="button"
          className="bg-blue-600 rounded-md w-full text-white font-semibold text-sm p-1">
          Follow
        </button>
      </div>
      <div className="user-desc text-clip">
        <p className="font-light">
          Our mission is to get you into information security. We'll introduce
          you to penetration testing and Red Teaming. We cover network testing,
          Active Directory, Security Automation.
        </p>
      </div>
    </article>
  );
}
