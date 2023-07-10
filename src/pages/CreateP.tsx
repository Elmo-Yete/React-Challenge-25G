import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
interface PostData {
  title: string;
  img: string;
  tags: [string];
  post: string;
}

export default function Create() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>();
  return (
    <>
      <nav className="flex justify-around bg-dev-background">
        <div className="flex">
          <Link to="/">
            <img src="../src/assets/DevLogo.webp" className="w-12" />
          </Link>
          <p className="ps-3">Create Post</p>
        </div>
        <span></span>
        <Link to="/">
          <a className="font-semibold ">X</a>
        </Link>
      </nav>
      <main className="bg-dev-background flex flex-col justify-start items-center w-screen h-screen">
        <header className="w-5/12 bg-dev-to-card-color p-7 rounded-lg">
          <div className="input-img py-2">
            <label className="font-thin">Add a cover image</label>
            <input
              type="file"
              accept="image"
              className="w-full"
              {...register("img")}
            />
          </div>
          <div className="title-input">
            <input
              type="text"
              placeholder="New post title here..."
              className="w-full h-16 font-extrabold text-3xl"
              {...register("title")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Add up to 4 tags"
              className="font-thin"
              {...register("tags")}
            />
          </div>
        </header>
        <section className="flex flex-row w-[26rem]">
          <div className="w-1/12 text-center">B</div>
          <div className="w-1/12 text-center">I</div>
          <div className="w-1/12 text-center">🎷</div>
          <div className="w-1/12 text-center">📋</div>
          <div className="w-1/12 text-center">H</div>
          <div className="w-1/12 text-center">""</div>
          <div className="w-1/12 text-center">🖼</div>
          <div className="w-3/12 text-center font-bold">:</div>
        </section>
        <article className="w-5/12 bg-dev-background ">
          <section>
            <textarea
              className="w-full h-96 font-light p-2"
              {...register("post")}
              placeholder="Write your post content here..."></textarea>
          </section>
        </article>
        <div className="bg-button-color p-1.5 text-white rounded-lg">
          <button type="submit">Publish</button>
        </div>
      </main>
    </>
  );
}
