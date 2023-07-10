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

export default function PostCard(post: PostProps) {
  return (
    <>
      <section className="flex flex-row full-card  rounded-lg bg-dev-to-card-color">
        <Link to="/Post">
          <a className="ancor-card">
            <div className="img-top">
              <a href="#">
                <img
                  src={post.image}
                  alt="img del post"
                  className="rounded-t-lg"></img>
              </a>
            </div>
            <div className="card-content p-5">
              <div className="flex flex-wrap h-3/6">
                <div className="w-[3rem] profile-picture">
                  <div>
                    <a>
                      <img
                        src={post.userCreatorId.profilePicture}
                        alt="imagen de usuario"
                        className="rounded-full w-full"></img>
                    </a>
                  </div>
                </div>
                <div className=" gap-1 ps-2 mt-1 items-center user-creator">
                  <div className="flex">
                    <p className="font-semibold text-sm ">
                      {post.userCreatorId.name}
                    </p>
                    <p className="font-semibold text-sm ">
                      AWS Community Services
                    </p>
                  </div>
                  <a> {`${post.time} days ago`} </a>
                </div>
              </div>
              <div className="reactions-container">
                <h2 className="font-extrabold text-3xl mx-9  pb-3 ">
                  {post.title}
                </h2>
                <div className="flex gap-5 ms-10 py-2 post-tags text-sm">
                  <a>
                    <span className="text-amber-400">#</span>tag1
                  </a>
                  <a>
                    <span className="text-green-800">#</span>tag2
                  </a>
                  <a>
                    <span className="text-violet-700">#</span>tag3
                  </a>
                </div>
                <div className="flex ms-10 py-4 justify-between emojis-comments text-sm">
                  <div className="flex gap-5">
                    <a href="#" className="emojis-comments__colection">
                      <div className="emojis-comments__colection--emojis">
                        <span className="bg-slate-300  rounded-full">❤</span>
                        <span className="ps-3"> {post.heartReactions} </span>
                      </div>
                    </a>
                    <a className="emojis-comments__comments">
                      <div className="flex">
                        <span>💭</span>
                        <p className="ps-2">23 comments</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <small> {`${post.time} minutes to read`} </small>
                    <a href="#">📒</a>
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
