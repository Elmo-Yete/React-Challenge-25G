import NavBar from "../components/NavBar";
import Leftaside from "../components/post-view/Left-aside";
import UserCard from "../components/post-view/UserCard";
export default function Post() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="flex columns-3 bg-dev-background pt-5">
        <aside className="flex w-1/4 justify-end">
          <Leftaside />
        </aside>
        <section className="flex bg-dev-to-card-color w-2/4">
          <article>
            <header>
              <div>
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--eaqnr2Uy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4p46s581l65x91ng6y2w.jpg"
                  className="rounded-t-md"
                />
              </div>
              <div className="flex px-7 pt-5">
                <div className="w-[3rem] profile-picture">
                  <a>
                    <img
                      src="https://randomuser.me/api/portraits/women/60.jpg"
                      alt="imagen de usuario"
                      className="rounded-full w-full"
                    />
                  </a>
                </div>
                <div className=" gap-1 ps-2 mt-1 items-center user-creator">
                  <div className="flex">
                    <p className="font-semibold text-sm ">Thomas Alger for</p>
                    <p className="font-semibold text-sm ">
                      AWS Community Services
                    </p>
                  </div>
                  <p className="font-light">7 days ago</p>
                </div>
              </div>
              <div className="flex flex-row px-7 pt-5 ">
                <span className="flex w-7">
                  <img src="../src/assets/icons/red-Heart-Icon.svg" />
                  <p>4</p>
                </span>
                <span className="flex w-7">
                  <img src="../src/assets/icons/unicorn-Icon.svg" />
                  <p>4</p>
                </span>
                <span className="flex w-7">
                  <img src="../src/assets/icons/crazy-Man-Icon.svg" />
                  <p>4</p>
                </span>
                <span className="flex w-7">
                  <img src="../src/assets/icons/raise-.svg" />
                  <p>4</p>
                </span>
                <span className="flex w-7">
                  <img src="../src/assets/icons/fire-Icon.svg" />
                  <p>4</p>
                </span>
              </div>
              <h1 className="px-7 pt-5 font-bold text-5xl">
                #DEVDiscuss: Is Threads Truly Decentralized?
              </h1>
              <div className="px-7 pt-5">
                <a className="px-3">
                  <span>#</span>Test1
                </a>
                <a className="px-3">
                  <span>#</span>Test1
                </a>
                <a className="px-3">
                  <span>#</span>Test1
                </a>
              </div>
            </header>
            <div className="px-7 flex flex-col">
              <h2 className="font-bold">
                Youtube Script Generator [Refine Hackathon]
              </h2>
              <p className="flex-wrap text-justify">
                Welcome to the DEV Showcase - a weekly thread where you can
                share what you've been working on and get feedback and
                encouragement from the DEV community. This is your chance to
                show off your latest project, share a cool hack or technique
                you've learned, or ask for advice and feedback from other
                developers. Whether you're a seasoned developer or just starting
                out, this is the place to connect with others and get inspired.
                Here are a few questions to think about if you're stuck: What
                have you been working on lately? What tools or resources have
                you found helpful? Have you learned any new skills or techniques
                recently? What challenges have you faced, and how can the
                community help you overcome them? What are your goals for your
                project or your career moving forward? Remember, this isn't a
                competition or a challenge - it's just a space to share and
                connect with others. So don't be shy! Share your work and get
                feedback and encouragement from the DEV community. We're excited
                to see what you've been working on, and to support you as you
                continue to grow and develop your skills.
              </p>
            </div>
          </article>
        </section>
        <aside className="flex w-1/3 px-5">
          <UserCard />
        </aside>
      </main>
    </>
  );
}
