import { useRef } from "react";
// assets
import song from "../../assets/music/song2.mp3";
import img from "../../assets/images/img1.jpg";
//
const Header: React.FC = () => {
  const player = useRef<HTMLAudioElement | null>(null);

  return (
    <div className="w-screen h-screen z-10 top-0 left-0 relative">
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-l from-[var(--shadow-bg)] to-[var(--shadow-2-bg)]">
        <div className="mt-[20vh] p-6 flex relative">
          <div>
            <h1 className="text-5xl andika w-[60%] font-bold">
              Discover the hottest new songs and artists on our website
            </h1>
            <button className="mt-8 py-3 px-7 text-xl rounded-lg cursor-pointer bg-[var(--dark-text)]  text-black transition hover:bg-[var(--text-color)]">
              Explore
            </button>
          </div>
          <div className="max-w-[300px]  absolute left-[70%] rounded-lg bg-[var(--shadow-bg)] border border-[var(--border-color-3)] flex flex-col justify-between overflow-hidden">
            <img
              src="https://i.scdn.co/image/ab67616d0000b273500f4e5942897b236cc80627"
              className="w-full"
            />
            <audio
              ref={player}
              className="w-full bg-[var(--shadow-bg)] h-[30px]"
            >
              <source src={song} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex  justify-around ">
              <button
                onClick={() => {
                  if (player.current) player.current.play();
                }}
              >
                Play
              </button>
              <button
                onClick={() => {
                  if (player.current) player.current.pause();
                }}
              >
                Pause
              </button>
              <button
                onClick={() => {
                  if (player.current) player.current.volume += 0.1;
                }}
              >
                Vol +
              </button>
              <button
                onClick={() => {
                  if (player.current) player.current.volume -= 0.1;
                }}
              >
                Vol -
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={img} className="w-full h-full " />
    </div>
  );
};

export default Header;
