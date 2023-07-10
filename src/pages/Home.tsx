import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import RightListing from "../components/RightListing";
import NavPills from "../components/NavPills";
import LeftListing from "../components/LeftListing";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error("Error en:", error);
      });
  }, []);
  console.log("esto es posts", posts);
  return (
    <>
      <header className="relative">
        <NavBar props={posts} />
      </header>
      <main className="flex columns-3 bg-dev-background px-5">
        <aside className="flex flex-col w-1/3 ">
          <LeftListing />
        </aside>
        <section>
          <NavPills />
          {posts.map((post: any, index) => (
            <PostCard key={`index${index}`} post={post} />
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
