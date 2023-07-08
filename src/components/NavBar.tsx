import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
export default function NavBar() {
  return (
    <nav className="navbar bg-white flex ps-5 py-2 sticky top-0 w-screen">
      <div className="navbar-logo w-12">
        <Link to="/">
          <img src="../src/assets/DevLogo.webp" className="w-12" />
        </Link>
      </div>
      <div className="navbar-search ms-5 h-10 block">
        <input
          type="search"
          className="border-2 border-slate-200/50 rounded-lg h-full w-96 text-black"
          placeholder="  Search..."
        />
      </div>
      <div className="navbar-login text-black flex">
        <div className="flex justify-end text-slate-600">
          <Link to="/login">Log in</Link>
        </div>
        <div className="border-2 border-cyan-700/20 text-cyan-600 rounded-lg px-2 py-1 font-bold">
          <Link to="/register">Create account</Link>
        </div>
      </div>
    </nav>
  );
}
