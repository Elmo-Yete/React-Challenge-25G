import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";

interface LoginData {
  username: string;
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
        username: data.username,
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
          navigate("/dashboard");
        } else {
          toast.warn("Barrio equivocado socio ☠");
        }
      })
      .catch(() => {
        toast.error("no jalo el fetch");
      });
  }

  return (
    <main className="bg-black min-h-screen flex justify-center items-center">
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
    </main>
  );
}
