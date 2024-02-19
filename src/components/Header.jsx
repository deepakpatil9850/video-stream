/* eslint-disable no-use-before-define */
import { useDispatch, useSelector } from "react-redux";
import { isSetMenu } from "../store/slice/menuSlice";
import { useEffect, useRef, useState } from "react";
import { addResults } from "../store/slice/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../utilies/youtube-logo.png";
import {
  faMagnifyingGlass,
  faBars,
  faUser,
  faBell,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const mouseOnSuggestion = useRef(false);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);

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
  console.log("header Renderd");
  return (
    <div className="w-full flex justify-between px-4 items-center fixed top-0 z-50 bg-white dark:bg-stone-900 p-2">
      <div className="w-2/12 items-center justify-center flex">
        <span
          className="text-2xl mr-2 cursor-pointer dark:text-white"
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>
        <img alt="logo" src={logo} className="w-12" />
        <span className="dark:text-white text-xl font-roboto">YouTube</span>
      </div>
      <div className="relative w-5/12">
        <div className="flex border border-gray-300 dark:border-stone-700 rounded-full w-full">
          <input
            type="text"
            className="bg-transparent rounded-l-full pl-5 py-2 focus:outline-none focus:border dark:text-white w-full"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() =>
              mouseOnSuggestion.current ? "" : setShowSuggestions(false)
            }
          />
          <Link to={"/search?q=" + searchText}>
            <button
              type="search"
              className="dark:text-white rounded-r-full dark:bg-stone-800 border-l dark:border-gray-800 py-2 px-5"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Link>
        </div>
        {showSuggestion && suggestions.length > 0 && (
          <div
            className="bg-white  dark:bg-stone-800 dark:text-white py-3  w-full mt-2 absolute rounded"
            onMouseEnter={() => (mouseOnSuggestion.current = true)}
            onMouseLeave={() => {
              mouseOnSuggestion.current = false;
            }}
          >
            <ul>
              {suggestions.map((sugg, ind) => (
                <Link key={ind} to={"/search?q=" + sugg}>
                  <li
                    key={ind}
                    className="py-1 tracking-tight line-clamp-1 dark:hover:bg-stone-700 px-5 cursor-pointer"
                    onClick={() => {
                      setSearchText(sugg);
                      setShowSuggestions(false);
                    }}
                  >
                    {sugg}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex p-1 dark:text-white justify-between items-center rounded-full w-2/12">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faVideo} />
        <div className=" border border-double text-xs cursor-pointer  border-blue-900 text-blue-700 rounded-full flex items-center px-2">
          <FontAwesomeIcon icon={faUser} className="p-1" />
          <span className="p-1">Sign in</span>
        </div>
      </div>
    </div>
  );
};
