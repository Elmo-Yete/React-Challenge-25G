import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import RightListing from "../components/RightListing";
import NavPills from "../components/NavPills";
import LeftListing from "../components/LeftListing";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((data) => {
        console.log("estos son los posts", data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error en:", error);
      });
  }, []);
  return (
    <>
      <header className="relative">
        <NavBar />
      </header>
      <main className="flex columns-3 bg-dev-background px-5">
        <aside className="flex flex-col w-1/3 ">
          <LeftListing />
        </aside>
        <section>
          <NavPills />
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </section>
        <aside className="flex w-1/3">
          <RightListing />
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
