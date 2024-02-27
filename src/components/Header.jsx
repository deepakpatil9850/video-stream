import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../utilies/youtube-logo.png";
import {
  faBars,
  faUser,
  faBell,
  faVideo,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { isSetMenu } from "../store/slice/menuSlice";
import SearchBar from "./SearchBar";

export const Header = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((store) => store.menu.menuState);

  const handleMenuClick = () => {
    dispatch(isSetMenu());
  };

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8  py-2  md:p-2  flex justify-between fixed top-0 z-50 bg-white dark:bg-stone-900">
      {/* brand logo and menu icon */}
      <div className="flex items-center col-start-1 col-span-2 w-3/6 sm:w-2/6 md:w-1/6 h-11">
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
      {/* Search Bar */}
      <div className="relative sm:w-2/6 md:w-3/6 border-green-500 hidden sm:block">
        <SearchBar />
      </div>
      {/* Notification icon */}
      <div className="w-3/6 sm:w-2/6 md:w-1/6 flex dark:text-white justify-between items-center p-1">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sm:hidden" />
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
