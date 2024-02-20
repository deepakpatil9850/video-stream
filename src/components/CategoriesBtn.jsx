import React, { useState, useEffect } from "react";
import { API_KEY } from "../utilies/constants";
import { NavLink } from "react-router-dom";

const CategoriesBtn = () => {
  const [databtn, setDatabtn] = useState(null);

  useEffect(() => {
    fetchBtn();
  }, []);

  const fetchBtn = async () => {
    try {
      const dataBtn = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&maxResults=10&regionCode=IN&key=" +
          API_KEY
      );
      const json = await dataBtn.json();
      setDatabtn(json);
    } catch (e) {
      <div className="p-2 w-full text-center fixed bg-white dark:bg-black dark:text-red-800 z-30">
        Sorry ... Some Technical Issue
      </div>;
    }
  };

  if (databtn?.error?.code >= 400)
    return (
      <div className="p-2 w-full text-center fixed bg-white dark:bg-black dark:text-red-900 z-30">
        Sorry ... Some Technical Issue : {databtn?.error?.message}
      </div>
    );

  return (
    <div className="p-2 grid grid-flow-col auto-cols-max overflow-hidden  fixed bg-white dark:bg-stone-900 dark:text-white z-30">
      {databtn?.items?.map((btn) => (
        <div key={btn?.id} className="m-1">
          <NavLink to={"/?Category=" + btn?.id}>
            <button className="p-2 bg-slate-100 dark:bg-stone-700 dark:text-white rounded-md shadow text-sm">
              {btn?.snippet?.title}
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBtn;
