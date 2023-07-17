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
  console.log(posts);
  useEffect(() => {
    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error("Error en:", error);
      });
  }, []);

  return (
    <>
      <header className="relative">
        <NavBar posts={posts} />
      </header>
      <main className="flex columns-3 mx-[19.43rem] gap-3 p-5 bg-dev-background max-[1301px]:mx-[1rem] max-[720px]:p-0">
        <aside className="flex w-1/3 max-[720px]:hidden max-[720px]:w-0">
          <LeftListing />
        </aside>
        <section>
          <NavPills />
          {posts.map((post, index) => (
            <PostCard key={`index${index}`} post={post} />
          ))}
        </section>
        <aside className="flex w-[30rem] max-[1301px]:hidden">
          <RightListing />
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
