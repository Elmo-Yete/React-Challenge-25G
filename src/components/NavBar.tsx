import { Link } from "react-router-dom";

export default function NavBar() {
  const token = localStorage.getItem("token");
  return (
    <nav className="bg-[#FFFFFF] flex items-center w-auto px-32 gap-2 p-[6px] place-content-between ">
      <div className="flex gap-1">
        <Link to="/">
          <img
            className="w-11"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="DevTo"
          />
        </Link>
        <div className="border rounded-md w-64 max-w-xs h-7 my-1 pl-1 hover:border-gray-400 flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="font-light text-sm placeholder:text-gray-700 w-full"
          />
          <span className="material-symbols-outlined text-black font-light text-base hover:bg-slate-100 hover:text-blue-800 cursor-pointer pl-1 pr-6 w-6 h-[26px] hover:ring[1px] hover:rounded-md">
            🔍
          </span>
        </div>
      </div>
      <div className="text-black flex">
        {token ? (
          <>
            <div className=" border-[1px] border-[#3b49df] rounded-[3px] m-[1px] flex justify-center hover:bg-[#3b49df]">
              <Link
                to="/create-post"
                className="m-1 text-[10px] text-[#3b49df] px-1 hover:text-white hover:underline text-base">
                Create Post
              </Link>
            </div>
            <div className="px-2 py-1">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="aixln89tw520kux6cfmkkv36dj13xz3g"
                  className="w-8">
                  <title id="aixln89tw520kux6cfmkkv36dj13xz3g">
                    Notifications
                  </title>
                  <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>
              </a>
            </div>
            <div>
              <a>
                <img
                  src="../src/assets/meme.webp"
                  className="w-7  rounded-full"
                />
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="pt-1">
              <Link
                to="/Login"
                className="m-7 text-black text-base hover:bg-slate-100 rounded-[3px]  hover:text-blue-dev text hover:underline ">
                Log in
              </Link>
            </div>
            <div className=" border-[1px] border-blue-dev rounded-md  flex justify-center hover:bg-blue-dev ">
              <Link
                to="/Register"
                className="m-1 text-base text-blue-dev px-1 hover:text-white hover:underline">
                Create account
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
