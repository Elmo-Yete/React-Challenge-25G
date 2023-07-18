import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BurgerListing from "./BurgerListing";

export default function NavS() {
  const [user, setUser] = useState({});
  const emailToPair = localStorage.getItem("email");
  useEffect(() => {
    fetch(`http://localhost:8080/name/${emailToPair}`, {})
      .then((response) => response.json())
      .then((response) => {
        if (response.data) {
          setUser(response.data);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  // console.log(user);

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("postId");
    localStorage.removeItem("email");
  }
  const [menuVis, setMenuVi] = useState(false);
  const toggleMenu = () => {
    setMenuVi(!menuVis);
  };
  const [burger, setBurger] = useState(false);
  const toogleBurger = () => {
    setBurger(!burger);
  };

  const token = localStorage.getItem("token");
  return (
    <nav className="bg-[#FFFFFF] flex justify-around lg:justify-between items-center px-4 lg:px-20 py-2 w-screen">
      <div className="flex gap-1">
        <div className="flex">
          <a
            href="#"
            onClick={toogleBurger}
            className="hidden max-[720px]:flex">
            {burger && (
              <div className="absolute end-0-full top-10 w-1/2 bg-white z-10 bg-scroll">
                <BurgerListing />
              </div>
            )}
            <img
              src="../src/assets/icons/burger-Menu-Icon.svg"
              className="w-5"
            />
          </a>
        </div>
        <Link to="/">
          <img
            className="w-11"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="DevTo"
          />
        </Link>
        <div className="border rounded-md w-64 max-w-xs h-7 my-1 pl-1 hover:border-gray-400 flex justify-between max-[710px]:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="font-light text-sm placeholder:text-gray-700 w-full focus:outline-none focus:ring-0 "
          />
          <span className=" text-black font-light text-base hover:bg-slate-100 hover:text-blue-800 cursor-pointer w-11  hover:ring[1px] hover:rounded-md">
            <img
              src="../src/assets/icons/search-svgrepo-com.svg"
              className="w-7/12 ms-2 m-[.2rem]"
            />
          </span>
        </div>
      </div>
      <div className="text-black flex">
        {token ? (
          <>
            <div className=" border-[1px] border-[#3b49df] rounded-[3px] m-[1px] flex justify-center hover:bg-[#3b49df] max-[891px]:hidden">
              <Link
                to="/create-post"
                className="m-1 text-[10px] text-[#3b49df] px-2 hover:text-white hover:underline text-base max-[893px]:text-sm ">
                Create Post
              </Link>
            </div>
            <div className="hidden max-[710px]:block  md:hidden lg:hidden">
              <img
                src="../src/assets/icons/search-svgrepo-com.svg"
                className="w-[1.5rem] ms-2 m-[.2rem] mt-1"
              />
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
              <a href="#" onClick={toggleMenu}>
                {menuVis && (
                  <div className="absolute top-full right-80 mt-2 w-40 bg-white z-10">
                    <ul className="list-none p-0 m-0">
                      <li className="py-2 px-4 border-b border-gray-300 flex flex-col font-semibold">
                        {user.name}
                        <span className="font-light">{`@${user.name}`}</span>
                      </li>
                      <li className="py-2 px-4 border-b border-gray-300">
                        Dashboard
                      </li>
                      <Link to="/create-post">
                        <li className="py-2 px-4 border-b border-gray-300">
                          Create Post
                        </li>
                      </Link>
                      <li className="py-2 px-4">
                        <Link to="/" onClick={logOut}>
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
                <img src={user.profilePicture} className="w-8 rounded-2xl" />
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="pt-[0.4rem]">
              <Link
                to="/Login"
                className="m-7 text-black text-base hover:bg-slate-100 rounded-[3px] p-2  hover:text-blue-dev text hover:underline ">
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
