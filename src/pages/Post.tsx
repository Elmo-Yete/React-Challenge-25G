import NavBar from "../components/NavBar";
import Leftaside from "../components/post-view/Left-aside";
import UserCard from "../components/post-view/UserCard";
import { useEffect, useState } from "react";
import { getId } from "../components/PostCard";

const postId = localStorage.getItem("postId");
console.log(postId);
export default function Post() {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch(`http://localhost:8080/post/${postId}`)
      .then((response) => response.json())
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error en:", error);
      });
  }, []);
  console.log("esto es el post filtrado por id", post);
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="flex columns-3 bg-dev-background pt-5">
        <aside className="flex w-1/4 justify-end">
          <Leftaside />
        </aside>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section className="flex bg-dev-to-card-color w-2/4">
            <article className="pb-5">
              <header>
                <div>
                  <img src={post.image} className="rounded-t-md" />
                </div>
                <div className="flex px-7 pt-5">
                  <div className="w-[3rem] profile-picture">
                    <a>
                      <img
                        src={post.userCreatorId.profilePicture}
                        alt="imagen de usuario"
                        className="rounded-full w-full"
                      />
                    </a>
                  </div>
                  <div className=" gap-1 ps-2 mt-1 items-center user-creator">
                    <div className="flex">
                      <p className="font-semibold text-sm ">
                        {post.userCreatorId.name}
                      </p>
                      <p className="font-thin text-sm px-2">
                        for AWS Community Services
                      </p>
                    </div>
                    <p className="font-light">{post.date}</p>
                  </div>
                </div>
                <div className="flex flex-row px-7 pt-5 ">
                  <span className="flex w-7">
                    <img src="../src/assets/icons/red-Heart-Icon.svg" />
                    <p>{post.heartReactions}</p>
                  </span>
                </div>
                <h1 className="px-7 pt-5 font-bold text-5xl w-full">
                  {post.title}
                </h1>
                {/* <div className="px-7 py-3">
                <a className="pe-5" href="#">
                  {post.tags[1]}
                </a>
                <a className="pe-5" href="#">
                  {post.tags[1]}
                </a>
              </div> */}
              </header>
              <div className="px-7 flex flex-col py-5">
                <p className="flex-wrap text-justify">{post.content}</p>
              </div>
            </article>
          </section>
        )}
        <aside className="flex w-1/3 px-5">
          <UserCard />
        </aside>
      </main>
    </>
  );
}
