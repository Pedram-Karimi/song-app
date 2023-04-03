import { useState } from "react"; // react

// svg

import addSvg from "../assets/svg/add.svg";

import { Link } from "react-router-dom";

// context

import { usePopupCtx } from "../context/popupCtx";
import { useUserAuth } from "../context/userAuthCtx";

// components

import UserControls from "./popups/UserControls";

//

const NavBar: React.FC = () => {
  const { user } = useUserAuth();
  const { changePopupState, popupState } = usePopupCtx();

  return (
    <div className="w-full h-16 p-6 border-b border-[var(--border-color-3)] justify-between flex items-center z-20 fixed top-0 backdrop-blur-xl bg-[var(--wrapper-1)]">
      <Link to="/">
        <h1 className="text-4xl cursor-pointer">Logo</h1>
      </Link>
      <div className="w-[35%]">
        <form className="w-[100%]">
          <input
            className="bg-[var(--wrapper-2)] w-[70%] outline-none p-2 rounded-lg border border-[var(--border-color-3)] rounded-r-none border-r-0"
            placeholder="Search"
          />
          <button className="bg-[var(--wrapper-2)]  p-2 rounded-lg border border-[var(--border-color-3)] rounded-l-none">
            Search
          </button>
        </form>
      </div>
      <div>
        {!user?.token ? (
          <div className="flex gap-2">
            <Link to="/user/login" className="decoration-none">
              <button className="text-[var(--text-color)] px-5 py-[6px]  rounded-lg bg-[var(--dark-text)]  text-black transition hover:bg-[var(--text-color)]">
                Sign In
              </button>
            </Link>
            <Link to="/user/signup" className="decoration-none">
              <button className="text-[var(--text-color)] px-5 py-[6px]  rounded-lg bg-[var(--dark-text)]  text-black transition hover:bg-[var(--text-color)]">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div className="relative flex items-center gap-2">
            <Link to="/song/upload">
              <img
                src={addSvg}
                alt=""
                className="bg-white fill-slate-50 cursor-pointer"
              />
            </Link>
            <img
              src="https://www.gravatar.com/avatar/b3568450826559f6ce26b424b8283279.jpg?size=240&d=https%3A%2F%2Fwww.artstation.com%2Fassets%2Fdefault_avatar.jpg"
              className="w-[50px] h-[50px] rounded-full cursor-pointer"
              onClick={() => {
                changePopupState(true);
              }}
            />
            {popupState && <UserControls />}
          </div>
        )}
        {popupState && (
          <div
            className="absolute top-0 left-0 z-40 h-screen w-screen"
            onClick={() => {
              changePopupState(false);
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
