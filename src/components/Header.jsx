import { useDispatch } from "react-redux";
import logo from "../utilies/logo.png";
import usrIcon from "../utilies/user icon.png";
import { isSetMenu } from "../store/slice/menuSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(isSetMenu());
  };

  return (
    <div className="w-full border border-black shadow-md flex justify-between p-4  content-center">
      <div className="flex">
        <span
          className="font-extrabold text-2xl m-2 cursor-pointer"
          onClick={handleMenuClick}
        >
          &#9776;
        </span>
        <img alt="logo" src={logo} className="w-12" />
      </div>
      <div className="">
        <input type="text" className="border" />{" "}
        <button type="search">Search</button>
      </div>
      <div className="flex ">
        <img src={usrIcon} alt="user icon" className="w-8 align-middle" />
        <span>Guest user</span>
      </div>
    </div>
  );
};
