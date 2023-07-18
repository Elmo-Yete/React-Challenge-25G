import NavS from "../components/NavS";
import Leftaside from "../components/post-view/Left-aside";
import UserCard from "../components/post-view/UserCard";
import { useEffect, useState } from "react";

export default function Post() {
  const postId = localStorage.getItem("postId");
  console.log(postId);
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
  const tags = post.tags;
  const BDdate = new Date(post.date);
  const randomReact = (() => {
    const BDhearts = post.heartReactions;
    return Math.floor(Math.random() * BDhearts) + 5;
  })();
  const creation = BDdate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
  return (
    <>
      <nav className="relative">
        <NavS />
      </nav>
      <main className="flex columns-3 bg-dev-background pt-5">
        <aside className="flex w-1/4 justify-end">
          <Leftaside />
        </aside>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
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
                      <p className="font-light">{creation}</p>
                    </div>
                  </div>
                  <div className="flex flex-row px-7 pt-5 ">
                    <span className="flex w-7">
                      <img src="../src/assets/icons/red-Heart-Icon.svg" />
                      <p>{randomReact}</p>
                    </span>
                  </div>
                  <h1 className="px-7 pt-5 font-bold text-5xl w-full">
                    {post.title}
                  </h1>
                  <div className="flex">
                    {tags.map((tagToShow) => {
                      return (
                        <a className="h-[25px] text-[14px] flex ms-9 my-5 hover:bg-yellow-100 cursor-pointer">
                          #{tagToShow}
                        </a>
                      );
                    })}
                  </div>
                </header>
                <div className="px-7 flex flex-col py-5">
                  <p className="flex-wrap text-justify">{post.content}</p>
                </div>
              </article>
            </section>
            <aside className="flex w-1/3 px-5">
              <article className="bg-dev-to-card-color w-64 h-fit p-2 rounded-md">
                <div className="user-data flex items-end">
                  <img
                    src={post.userCreatorId.profilePicture}
                    className="rounded-full w-12"
                  />
                  <p className="items-end"> {post.userCreatorId.name} </p>
                </div>
                <div className="follow-button py-3">
                  <button
                    type="button"
                    className="bg-blue-600 rounded-md w-full text-white font-semibold text-sm p-1">
                    Follow
                  </button>
                </div>
                <div className="user-desc text-clip">
                  <p className="font-light">
                    Our mission is to get you into information security. We'll
                    introduce you to penetration testing and Red Teaming. We
                    cover network testing, Active Directory, Security
                    Automation.
                  </p>
                </div>
              </article>
            </aside>
          </>
        )}
      </main>
    </>
  );
}
