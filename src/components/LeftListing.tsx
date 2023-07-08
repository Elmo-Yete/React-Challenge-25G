import Listings from "../micro-components/Listings";
export default function LeftListing() {
  return (
    <>
      <div className="first-list">
        <ul>
          <Listings emoji="🏠" text="Home" link="/" />
          <Listings emoji="📜" text="Listings" />
          <Listings emoji="🎙️" text="Podcast" />
          <Listings emoji="📽️" text="Videos" />
          <Listings emoji="🏷️" text="Tags" />
          <Listings emoji="💡" text="FAQ" />
          <Listings emoji="🛍️" text="Forem Shop" />
          <Listings emoji="❤️" text="Sponsors" />
          <Listings emoji="" text="About" />
          <Listings emoji="📯" text="Contact" />
          <Listings emoji="📖" text="Guides" />
          <Listings emoji="🤔" text="Software comparisons" />
        </ul>
      </div>
      <div className="second-list">
        <h2 className="text-lg font-bold">Other</h2>
        <ul>
          <Listings emoji="👍" text="Code of Conduct" />
          <Listings emoji="🤓" text="Privacy of Policy" />
          <Listings emoji="👀" text="Terms of use" />
        </ul>
      </div>
      <div className="third-list flex">
        <a>
          <img
            src="../src/assets/icons/tuwiter-Black-Icon.svg"
            alt="Twitter logo"
            className="w-7"
          />
        </a>
        <a>
          <img
            src="../src/assets/icons/facebock-Icon.svg"
            alt="Facebook logo"
            className="w-7"
          />
        </a>
        <a>
          <img
            src="../src/assets/icons/github-Icon.svg"
            alt="Github logo"
            className="w-7"
          />
        </a>
        <a>
          <img
            src="../src/assets/icons/instagram-Icon.svg"
            alt="Instagram logo"
            className="w-7"
          />
        </a>
        <a>
          <img
            src="../src/assets/icons/twitch-Icon.svg"
            alt="Twitch logo"
            className="w-7"
          />
        </a>
        <a>
          <img
            src="../src/assets/icons/mastodon-Icon.svg"
            alt="mastodon logo"
            className="w-7"
          />
        </a>
      </div>
      <div>
        <h3>Popular Tags</h3>
      </div>
    </>
  );
}
