import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import RightListing from "../components/RightListing";
import NavPills from "../components/NavPills";
import LeftListing from "../components/LeftListing";
export default function Home() {
  return (
    <>
      <header className="relative">
        <NavBar />
      </header>
      <main className="flex columns-3 bg-dev-background px-5">
        <aside className="flex flex-col w-1/3 ">
          <LeftListing />
        </aside>
        <section>
          <NavPills />
          <PostCard />
        </section>
        <aside className="flex w-1/3">
          <RightListing />
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
