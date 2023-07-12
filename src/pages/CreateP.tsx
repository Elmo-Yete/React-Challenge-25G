import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
interface PostData {
  userCreatorId: string;
  title: string;
  img: string;
  tags: [string];
  post: string;
}

export default function Create() {
  const userId = localStorage.getItem("id");
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
          <p className="ps-3 pt-1">Create Post</p>
        </div>
        <span></span>
        <Link to="/">
          <a className="font-semibold ">X</a>
        </Link>
      </nav>
      <main className="bg-dev-background flex flex-col justify-start items-center ">
        <header className="w-5/12 bg-dev-to-card-color p-7 rounded-lg">
          <div className="input-img py-2">
            <input
              type="text"
              className="w-full focus:outline-none focus:ring-0"
              placeholder="Add a cover image..."
              {...register("img")}
            />
          </div>
          <div className="title-input">
            <input
              type="text"
              placeholder="New post title here..."
              className="w-full h-16 font-extrabold text-3xl focus:outline-none focus:ring-0"
              {...register("title")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Add up to 4 tags"
              className="font-thin focus:outline-none focus:ring-0"
              {...register("tags")}
            />
          </div>
        </header>
        <section className="flex flex-row max-w-lg">
          <div className="w-1/12 text-center font-bold">B</div>
          <div className="w-1/12 text-center italic">I</div>
          <div className="w-1/12 text-center flex">
            <img
              src="../src/assets/icons/link-minimalistic-2-svgrepo-com.svg"
              className="w-4/12 mx-4"></img>
          </div>
          <div className="w-1/12 text-center">
            <img
              src="../src/assets/icons/clipboard-list-svgrepo-com.svg"
              className="w-4/12 mx-4"></img>
          </div>
          <div className="w-1/12 text-center">
            <img
              src="../src/assets/icons/checklist-svgrepo-com.svg"
              className="w-4/12 mx-4"></img>
          </div>
          <div className="w-1/12 text-center">
            <img
              src="../src/assets/icons/quote.webp"
              className="w-4/12 mx-4"></img>
          </div>
          <div className="w-1/12 text-center">
            <img
              src="../src/assets/icons/gallery-wide-svgrepo-com.svg"
              className="w-4/12 mx-4"></img>
          </div>
          <div className="w-1/12 text-center font-bold">:</div>
        </section>
        <article className="w-5/12 bg-dev-background ">
          <section>
            <textarea
              className="w-full h-96 font-light p-2 focus:outline-none focus:ring-0"
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
