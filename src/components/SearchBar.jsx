import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addResults } from "../store/slice/searchSlice";
import SearchError from "./SearchError";

const SearchBar = () => {
  const dispatch = useDispatch();
  const mouseOnSuggestion = useRef(false);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const [error, setError] = useState(true);

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
        setError(true);
      }
    };
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div>
      {error && <SearchError setError={setError} />}
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
  );
};

export default SearchBar;
