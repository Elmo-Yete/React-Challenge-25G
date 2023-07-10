import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";

interface LoginData {
  email: string;
  password: string;
}
export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response:", response);
        if (response?.token) {
          localStorage.setItem("token", response.token);
          // ? const token = localStorage.getItem("token");
          // ? localStorage.removeItem("token")
          navigate("/");
        } else {
          toast.warn("Usuario no encontrado");
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
            <div className="Logins">
              <div className="Logins-media flex flex-col">
                <button className="bg-black p-2 rounded-md my-2">
                  Continue with Apple
                </button>
                <button className="bg-cyan-900 p-2 rounded-md my-2">
                  Continue with Forem
                </button>
                <button className="bg-slate-800 p-2 rounded-md my-2">
                  Continue with GitHub
                </button>
                <button className="bg-sky-500 p-2 rounded-md my-2">
                  Continue with Twitter
                </button>
              </div>
              <div className="Logins-data">
                <div>
                  <div className="text-black text-center">
                    Have a password? Continue with your e-mail address
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                  })}>
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
                  <div className="remember-me">
                    <input type="checkbox" />
                    <label className="text-black font-light ps-1">
                      Remember me
                    </label>
                  </div>
                  <div className="continue my-5">
                    <button type="submit">Continue</button>
                  </div>
                </form>
                <p className="text-blue-700 text-center">
                  I forgot my password
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
