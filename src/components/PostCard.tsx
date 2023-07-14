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
  const isTag = post.post.tags;
  return (
    <>
      <section className="flex flex-row rounded-xl bg-dev-to-card-color mb-5">
        <Link to="/Post">
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
                        src="https://randomuser.me/api/portraits/men/78.jpg" //{post.post.userCreatorId.profilePicture}
                        alt="imagen de usuario"
                        className="rounded-full w-full"></img>
                    </a>
                  </div>
                </div>
                <div className=" gap-1 ps-2 mt-1 items-center user-creator">
                  <div className="flex">
                    <p className="font-semibold text-sm pe-2">User Test 1</p>
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
                  {isTag ? (
                    <>
                      <a className="">{post.post.tags[0]}</a>
                      <a className="">{post.post.tags[1]}</a>
                      <a className="">{post.post.tags[2]}</a>
                    </>
                  ) : (
                    <>
                      <div></div>
                    </>
                  )}
                </div>
                <div className="flex ms-10 py-4 justify-between emojis-comments text-sm">
                  <div className="flex gap-5">
                    <a href="#" className="emojis-comments__colection">
                      <div className="emojis-comments__colection--emojis flex">
                        <span className="bg-slate-300  rounded-full p-1">
                          <img
                            src="../src/assets/icons/love.svg"
                            className="w-4"
                          />
                        </span>
                        <span className="ps-3">{`${post.post.heartReactions} reactions`}</span>
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
                    <small> {`${post.post.time} minutes to read`} </small>
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
