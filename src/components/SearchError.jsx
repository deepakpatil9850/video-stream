import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const SearchError = ({ setError }) => {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 bg-white rounded-lg shadow-lg dark:bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-600 dark:text-white">
      <div className="relative p-5">
        <button
          className="text-2xl absolute top-0 right-0 px-1"
          onClick={() => setError(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="text-center font-roboto">
          <h1 className="text-xl font-bold">Please...!!! 😥</h1>
          <p className="my-3 font-semibold">
            For searching videos please enable CORS Extension in your Browser
          </p>
          <button
            className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-2 px-3 rounded-md shadow-lg animate-bounce border border-gray-600 mt-2"
            onClick={() => setError(false)}
          >
            OK 😊
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchError;
