import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Hashtags from "../micro-components/Hashtags";
interface PostData {
  userCreatorId: string;
  title: string;
  content: string;
  image: string;
  time: number;
  tags: string;
  date: string;
  heartReactions: number;
}

export default function Create() {
  const [tagsTo, setTags] = useState<PostData[]>([]);
  const [tag, setTag] = useState("");

  function onAddItem() {
    if (tag) {
      const tagInput: PostData = {
        tags: tag,
      };
      setTags([tagInput, ...tagsTo]);
      console.log("tags", tagsTo);
      setTag("");
    } else {
      alert("Falta llenar un campo");
    }
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onAddItem();
    }
  }

  function onDelete(indexToDelete: number) {
    tagsTo.splice(indexToDelete, 1);
    setTags([...tagsTo]);
  }

  function empty() {
    setTags([]);
  }

  function onSubmit(data: PostData) {
    const myTags = tagsTo.map((item) => item.tags);
    const userToken = localStorage.getItem("token");
    const payload = userToken.split(".")[1];
    const idUser = JSON.parse(atob(payload)).id;
    const currentDate = new Date();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        userCreatorId: idUser,
        title: data.title,
        content: data.content,
        image: data.image,
        time: data.time,
        tags: myTags,
        date: currentDate.toISOString(),
        heartReactions: 0,
      }),
    })
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error);
      });
  }

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
          <p className="ps-3 pt-2 font-semibold">Create Post</p>
        </div>
        <span></span>
        <Link to="/">
          <a className="font-semibold text-2xl">X</a>
        </Link>
      </nav>
      <main className="bg-dev-background flex flex-col justify-start items-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <header className=" bg-dev-to-card-color px-7 py-3 rounded-lg">
            <div className="input-img py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-0"
                placeholder="Add a cover image..."
                {...register("image")}
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
            <div className="flex justify-around">
              <div>
                <input
                  type="number"
                  placeholder="Time to read"
                  className="font-thin focus:outline-none focus:ring-0"
                  {...register("time")}
                />
              </div>
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
          <article className=" bg-dev-background ">
            <section>
              <textarea
                className="w-full h-96 font-light p-2 focus:outline-none focus:ring-0 "
                {...register("content")}
                placeholder="Write your post content here..."></textarea>
            </section>
          </article>
          <div className="bg-button-color p-1.5 text-white rounded-lg w-20 text-center">
            <button type="submit">Publish</button>
          </div>
        </form>
        <div className="flex justify-start">
          <input
            type="text"
            placeholder="Add up to 4 tags"
            className="font-thin focus:outline-none focus:ring-0"
            onKeyUp={onEnter}
            onChange={(event) => setTag(event.target.value)}
            value={tag}
          />
          <button
            className="bg-blue-dev/50 text-white p-1 rounded-xl"
            onClick={onAddItem}
            type="button">
            Add Tag
          </button>
          {tagsTo.map((tagToShow, index) => {
            return (
              <div
                key={`tag-${index}`}
                className="flex justify-center items-center gap-2 px-2 py-2 max-w-[100px] max-h-[34px] bg-blue-800 text-[#fff]">
                <p className="h-[18px] text-[14px] flex justify-center items-center">
                  #{tagToShow.tags}
                </p>
                <button
                  onClick={() => onDelete(index)}
                  className=" text-[2a2a2a] text-[20px] flex justify-center items-start cursor-pointer">
                  x
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
