/* eslint-disable no-use-before-define */
import { useDispatch, useSelector } from "react-redux";
import logo from "../utilies/logo.png";
import usrIcon from "../utilies/user icon.png";
import { isSetMenu } from "../store/slice/menuSlice";
import { useEffect, useState } from "react";
import { addResults } from "../store/slice/searchSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        suggetionfetching();
      }
    }, 200);

    const suggetionfetching = async () => {
      try {
        const data = await fetch(
          "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=" +
            searchText
        );

        // retreving suggesions from fetched result
        const response = await data.text();
        const arr = JSON.parse(
          response.substring(response.indexOf("["), response.indexOf("])") + 1)
        );

        let suggesionList = [];
        if (Array.isArray(arr) && Array.isArray(arr.at(1))) {
          suggesionList = arr.at(1);
        }
        // filtered suggestion
        const suggestion = suggesionList
          .flatMap((suggestion) => suggestion)
          .filter((suggestion) => typeof suggestion === "string");
        setSuggestions(suggestion);

        // cache updated
        dispatch(addResults({ [searchText]: suggestion }));
      } catch (e) {
        alert("for use search feature please use CORS extension");
        console.error(e);
      }
    };
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

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
      <div className="relative">
        <div>
          <input
            type="text"
            className="border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />{" "}
          <button
            type="search"
            className="dark:text-white px-2 py-1  m-1 rounded-md bg-black "
          >
            Search
          </button>
        </div>
        <div className="bg-white absolute">
          <ul>
            {suggestions.map((sugg, ind) => (
              <li key={ind}>{sugg}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-evenly p-2">
        <img
          src={usrIcon}
          alt="user icon"
          className="w-8 align-middle dark:bg-white dark:rounded-full"
        />
        <span className="dark:text-white text-sm border m-2 cursor-pointer px-3 py-1 rounded-full">
          Sign in
        </span>
      </div>
    </div>
  );
};
