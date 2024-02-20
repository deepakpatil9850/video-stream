import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../utilies/youtube-logo.png";
import {
  faBars,
  faUser,
  faBell,
  faVideo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { isSetMenu } from "../store/slice/menuSlice";
import SearchBar from "./SearchBar";

export const Header = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((store) => store.menu.menuState);

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
          {!menuState ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </span>
        <img alt="logo" src={logo} className="w-12" />
        <span className="dark:text-white text-xl font-roboto">YouTube</span>
      </div>
      <div className="relative w-5/12">
        <SearchBar />
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
