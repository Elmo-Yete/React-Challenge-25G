import { Link } from "react-router-dom";

interface PostProps {
  content: string;
  date: string;
  heartReactions: string;
  image: string;
  marks: string;
  tags: [string];
  time: number;
  title: string;
  userCreatorId: {
    name: string;
    profilePicture: string;
    _id: string;
  };
  _id: string;
}
export function getId(post) {
  const postId = post.post._id;
  localStorage.setItem("postId", postId);
}

export default function PostCard(post: PostProps) {
  const isTag = post.post.tags;
  return (
    <>
      <section className="flex flex-row rounded-xl bg-dev-to-card-color mb-5 max-[1300px]:w-full">
        <Link to="/Post" onClick={() => getId(post)}>
          <a className="ancor-card">
            <div className="img-top">
              <a href="#">
                <img
                  src={post.post.image}
                  alt="img del post"
                  className="rounded-t-lg w-full object-fill"></img>
              </a>
            </div>
            <div className="card-content p-5">
              <div className="flex flex-wrap h-3/6">
                <div className="w-[2.1rem] profile-picture">
                  <div className="flex pt-2.5">
                    <a>
                      <img
                        src={post.post.userCreatorId.profilePicture}
                        alt="imagen de usuario"
                        className="rounded-full w-full"></img>
                    </a>
                  </div>
                </div>
                <div className=" gap-1 ps-2 mt-1 items-center user-creator">
                  <div className="flex">
                    <p className="font-semibold text-sm pe-2">
                      {post.post.userCreatorId.name}
                    </p>
                    <p className="font-semibold text-sm ">
                      AWS Community Services
                    </p>
                  </div>
                  <a> {`${post.post.time} days ago`} </a>
                </div>
              </div>
              <div className="reactions-container">
                <h2 className="font-extrabold text-3xl mx-9  pb-3 ">
                  {post.post.title}
                </h2>
                <div className="flex gap-5 ms-10 py-1 post-tags text-sm">
                  {isTag.map((tagToShow) => {
                    return (
                      <a className="h-[25px] text-[14px] flex my-5 hover:bg-yellow-100 cursor-pointer">
                        #{tagToShow}
                      </a>
                    );
                  })}
                </div>
                <div className="flex ms-10 py-4 justify-between emojis-comments text-sm">
                  <div className="flex gap-5">
                    <a href="#" className="emojis-comments__colection ">
                      <div className="emojis-comments__colection--emojis flex">
                        <span className="bg-slate-300  rounded-full p-1">
                          <img
                            src="../src/assets/icons/love.svg"
                            className="w-4"
                          />
                        </span>
                        <span className="ps-3 flex">
                          {post.post.heartReactions}
                          <p className="ms-1">reactions</p>
                        </span>
                      </div>
                    </a>
                    <a className="emojis-comments__comments md:flex flex-wrap">
                      <div className="flex">
                        <span>💭</span>
                        <p className="ms-1">
                          23
                          <span className="ms-1 max-[1550px]:hidden">
                            comments
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <p>{post.post.time}</p>
                    <small className="max-[1640px]:hidden ms-1">
                      minutes to read
                    </small>
                    <a href="#" className="ms-1">
                      📒
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </section>
    </>
  );
}
