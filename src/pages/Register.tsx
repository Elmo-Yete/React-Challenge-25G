import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
interface LoginData {
  name: string;
  email: string;
  password: string;
  profilepic: string;
}
export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    fetch("http://localhost:8080/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        profilePicture: data.profilepic,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("response:", response);
        if (response?.data._id) {
          localStorage.setItem("id", response.data._id);
          navigate("/login");
        } else {
          toast.warn("El usuario no se creo");
        }
      })
      .catch(() => {
        toast.error("Error en el fetch");
      });
  }

  return (
    <>
      <NavBar />
      <main className="bg-dev-background min-h-screen flex justify-center items-center">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored"
        />
        <section className="bg-white rounded-md">
          <div className="p-10">
            <div className="text-center">
              <h1 className="font-bold text-black text-3xl">
                Welcome to DEV Community
              </h1>
              <p className="text-center text-black text-base">
                DEV Community is a community of 1,096,406 amazing developers
              </p>
            </div>
            <div className="Logins text-white">
              <div className="Logins-media flex flex-col">
                <button className="bg-black p-2 rounded-md my-2 flex justify-center gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="acm5io5xfs8bcr5b30lhk8kbdjq3gaaj"
                      aria-hidden="true"
                      className="crayons-icon fill-white flex ">
                      <title id="acm5io5xfs8bcr5b30lhk8kbdjq3gaaj">apple</title>
                      <path d="M11.752 6.657c.828 0 1.867-.56 2.486-1.307.56-.677.969-1.623.969-2.568 0-.129-.012-.257-.036-.362-.922.035-2.03.618-2.696 1.4-.525.596-1.004 1.53-1.004 2.487 0 .14.024.28.035.326.059.012.152.024.245.024zM8.834 20.78c1.132 0 1.634-.759 3.046-.759 1.436 0 1.75.736 3.011.736 1.238 0 2.066-1.144 2.848-2.265.876-1.284 1.238-2.544 1.261-2.603-.082-.023-2.451-.992-2.451-3.711 0-2.358 1.867-3.42 1.972-3.502-1.237-1.774-3.116-1.82-3.63-1.82-1.389 0-2.52.84-3.233.84-.77 0-1.786-.794-2.988-.794-2.288 0-4.61 1.89-4.61 5.462 0 2.218.863 4.564 1.925 6.082.91 1.284 1.705 2.334 2.849 2.334z"></path>
                    </svg>
                  </span>
                  Continue with Apple
                </button>
                <button className="bg-cyan-900 p-2 rounded-md my-2 flex justify-center gap-1">
                  <span>
                    <span>
                      <img
                        src="../src/assets/icons/forem.svg"
                        className="w-5"
                      />
                    </span>
                  </span>
                  Continue with Forem
                </button>
                <button className="bg-slate-800 p-2 rounded-md my-2 flex justify-center gap-1">
                  <span>
                    <img
                      src="../src/assets/icons/github-Icon.svg"
                      className="w-7"
                    />
                  </span>
                  Continue with GitHub
                </button>
                <button className="bg-sky-500 p-2 rounded-md my-2 flex justify-center gap-1">
                  <span>
                    <img
                      src="../src/assets/icons/tuwiter-Icon.svg"
                      className="w-7"
                    />
                  </span>
                  Continue with Twitter
                </button>
              </div>
              <div className="Logins-data">
                <div>
                  <div className="text-black text-center">
                    Continue with e-mail
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <span className="text-black">User Name</span>
                  <div className="email text-black">
                    <input
                      type="text"
                      {...register("name")}
                      className="py-3 border-2 border-slate-400/50 rounded-lg w-full max-h-10 "
                    />
                  </div>
                  <span className="text-black">Email</span>
                  <div className="email text-black">
                    <input
                      type="email"
                      {...register("email")}
                      className="py-3 border-2 border-slate-400/50 rounded-lg w-full max-h-10"
                    />
                  </div>
                  <span className="text-black">Password</span>
                  <div className="password text-black">
                    <input
                      type="password"
                      {...register("password")}
                      className="py-3 border-2 border-slate-400/50 rounded-lg w-full max-h-10"
                    />
                  </div>
                  <span className="text-black">Profile picture</span>
                  <div className="pict text-black">
                    <input
                      type="text"
                      {...register("profilepic")}
                      className="py-3 border-2 border-slate-400/50 rounded-lg w-full max-h-10"
                      placeholder="Insert URL"
                    />
                  </div>
                  {/* <div className="remember-me"> // si me registro tengo que loguearme despues por lo que no hay sentido de mantener el remember me
                    <input type="checkbox" />
                    <label className="text-black font-light ps-1">
                      Remember me
                    </label>
                  </div> */}
                  <div className="continue my-5">
                    <button
                      type="submit"
                      className="bg-button-color/80 rounded-md p-1 w-full">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
