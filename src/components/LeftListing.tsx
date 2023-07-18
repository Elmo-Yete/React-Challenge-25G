import Listings from "../micro-components/Listings";
import Hashtags from "../micro-components/Hashtags";
export default function LeftListing() {
  return (
    <nav className="w-full   text-lg flex flex-col">
      <div className="first-list">
        <ul className="">
          <Listings emoji="🏠" text="Home" link="/" />
          <Listings emoji="📜" text="Listings" />
          <Listings emoji="🎙️" text="Podcast" />
          <Listings emoji="📽️" text="Videos" />
          <Listings emoji="🏷️" text="Tags" />
          <Listings emoji="💡" text="FAQ" />
          <Listings emoji="🛍️" text="Forem Shop" />
          <Listings emoji="❤️" text="Sponsors" />
          <Listings emoji="🏳‍🌈" text="About" />
          <Listings emoji="📯" text="Contact" />
          <Listings emoji="📖" text="Guides" />
          <Listings emoji="🤔" text="Software comparisons" />
        </ul>
      </div>
      <div className="second-list pt-5">
        <h2 className="text-lg font-bold">Other</h2>
        <ul className="pt-3">
          <Listings emoji="👍" text="Code of Conduct" />
          <Listings emoji="🤓" text="Privacy of Policy" />
          <Listings emoji="👀" text="Terms of use" />
        </ul>
      </div>
      <div className="third-list flex py-5">
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
      <div className="fourth-list py-5">
        <h3>Popular Tags</h3>
        <div className=" h-36 overflow-auto w-48">
          <Hashtags text="#javascript" />
          <Hashtags text="#testing" />
          <Hashtags text="#dev" />
          <Hashtags text="#frontend" />
          <Hashtags text="#tech" />
          <Hashtags text="#memes" />
          <Hashtags text="#opensource" />
          <Hashtags text="#devops" />
          <Hashtags text="#begginers" />
          <Hashtags text="#react" />
        </div>
      </div>
      <div className="flex flex-col justify-between bg-white w-48 p-3 rounded-lg">
        <div className="flex justify-between">
          <h4>DEV Community</h4>
          <a href="#" className="pe-3">
            ...
          </a>
        </div>
        <div className="flex  justify-center">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--tUXa-lQ2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l0et407b181thswgfd71.jpg" />
        </div>
      </div>
    </nav>
  );
}
