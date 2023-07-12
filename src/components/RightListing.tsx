export default function RightListing() {
  return (
    <div className=" flex-row w-80 border rounded-md h-fit justify-between bg-white">
      <header className="flex align-middle justify-between pb-2 m-2 border-b-2">
        <h3 className="font-bold text-lg">Listings</h3>
        <div>
          <a href="" className="text-blue-700 font-semibold text-xs">
            See all
          </a>
        </div>
      </header>
      <div className="flex-row p-2">
        <div className="border-b">
          <a href="" className="">
            <div>
              🌲 Pines is a library of animations, sliders, tooltips,
              accordions, modals, and more!
            </div>
            <div className="font-light text-sm m-1">collabs</div>
          </a>
        </div>
        <div className="border-b">
          <a href="" className="">
            <div className="m-2">
              🆘 Help Needed for AI-managed Low-code Project in Node.js
            </div>
            <div className="font-light text-sm m-1">collabs</div>
          </a>
        </div>
        <div className="border-b flex justify-center align-middle p-1">
          <a href="" className="pt-1">
            <div>
              Not Another Virtual Hackathon (NAVH), presented by Consensys
            </div>
            <div className="font-light text-sm m-1">events</div>
          </a>
        </div>
        <div className="border-b p-1 flex align-middle mt-4 mb-4">
          <a href="">
            <div>IP2Location Programming Contest 2023</div>
            <div className="font-light text-sm m-1">events</div>
          </a>
        </div>
        <div className="mb-3">
          <a href="">
            <div>Learn React & Next.js and Boost Your Career 🚀</div>
            <div className="font-light text-sm m-1">eduaction</div>
          </a>
        </div>
        <a
          href=""
          className="flex align-middle justify-center font-semibold text-sm pt-2 border-t-2">
          Create a Listing
        </a>
      </div>
    </div>
  );
}
