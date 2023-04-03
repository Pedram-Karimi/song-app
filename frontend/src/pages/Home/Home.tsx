import { useState } from "react";
// components

import Header from "./Header";

//
const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div className="w-screen p-6">
        {/*playlists for you*/}
        <div className="h-fit">
          <h2 className="text-4xl">Playlists for you</h2>
          <div className="flex overflow-x-auto w-full pt-5 gap-2 flex-row no-scrollbar">
            <div className="w-[190px] h-[190px] bg-[var(--light-bg)] rounded-lg cursor-pointer shrink-0"></div>
          </div>
        </div>
        {/*songs for you*/}
        <div className="h-[400px] pt-6">
          <h2 className="text-4xl ">Songs for you</h2>
        </div>
        {/*popular songs*/}
        <div className="h-[400px] pt-6">
          <h2 className="text-4xl  ">Most popular songs</h2>
        </div>
        {/*most listend pop songs*/}
        <div className="h-[400px] pt-6">
          <h2 className="text-4xl ">Most popular pop songs</h2>
        </div>
        {/*most listend rap songs*/}
        <div className="h-[400px] pt-6">
          <h2 className="text-4xl">Most popular rap songs</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
