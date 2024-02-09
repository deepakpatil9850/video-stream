import { useDispatch } from "react-redux";
import logo from "../utilies/logo.png";
import usrIcon from "../utilies/user icon.png";
import { isSetMenu } from "../store/slice/menuSlice";
import { useEffect, useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  useEffect(() => {}, []);

  const handleMenuClick = () => {
    dispatch(isSetMenu());
  };

  return (
    <div className="w-full border border-black shadow-md flex justify-between p-4 items-center fixed top-0 z-50 bg-white dark:bg-stone-900">
      <div className="flex">
        <span
          className="font-extrabold text-2xl m-2 cursor-pointer dark:bg-white"
          onClick={handleMenuClick}
        >
          &#9776;
        </span>
        <img alt="logo" src={logo} className="w-12" />
      </div>
      <div className="">
        <input
          type="text"
          className="border"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />{" "}
        <button type="search">Search</button>
      </div>
      <div className="flex items-center justify-evenly p-2">
        <img
          src={usrIcon}
          alt="user icon"
          className="w-8 align-middle dark:bg-white dark:rounded-full"
        />
        <span className="dark:text-white text-sm border px-2 rounded-full">
          Sign in
        </span>
      </div>
    </div>
  );
};
