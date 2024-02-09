import React, { useState, useEffect } from "react";
import { API_KEY } from "../utilies/constants";
import { NavLink } from "react-router-dom";

const CategoriesBtn = () => {
  const [databtn, setDatabtn] = useState(null);

  useEffect(() => {
    fetchBtn();
  }, []);

  const fetchBtn = async () => {
    const dataBtn = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&maxResults=10&regionCode=IN&key=" +
        API_KEY
    );
    const json = await dataBtn.json();
    setDatabtn(json);
  };

  if (databtn === null)
    return (
      <div className="p-2 grid grid-flow-col auto-cols-max overflow-hidden  fixed bg-white dark:bg-black dark:text-white z-30">
        No Button Loded
      </div>
    );

  return (
    <div className="p-2 grid grid-flow-col auto-cols-max overflow-hidden  fixed bg-white dark:bg-stone-900 dark:text-white z-30">
      {databtn.items.map((btn) => (
        <div key={btn.id} className="m-1">
          <NavLink
            to={"/?Category=" + btn.id}
            className={({ isActive }) => (isActive ? "bg-black" : "")}
          >
            <button className="p-2 bg-slate-100 dark:bg-stone-700 dark:text-white rounded-md shadow text-sm">
              {btn.snippet.title}
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBtn;
