import React, { useEffect, useState } from "react";
import { API_KEY } from "../utilies/constants";
import VideoListGrid from "./VideoListGrid";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchResutl, setSearchResult] = useState(null);
  const [param] = useSearchParams();

  const query = param.get("q");
  useEffect(() => {
    const searchData = async () => {
      const search = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${API_KEY}`
      );
      const searchJson = await search.json();
      setSearchResult(searchJson?.items);
    };
    searchData();
  }, [query]);
  return <VideoListGrid loadData={searchResutl} />;
};

export default SearchResult;
