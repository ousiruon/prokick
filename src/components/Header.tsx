import Logo from "./Header/Logo";
import NavBar from "./Header/NavBar";
import Slogan from "./Header/Slogan";
import SocialMedia from "./Header/SocialMedia";
import Year from "./Header/Year";
import Loader from "./Header/Loader";
import MainIcon from "./Header/MainIcon";
import LayoutPicker from "./Header/LayoutPicker";
import { useEffect, useState } from "react";
const Header = () => {
  useEffect(() => {});
  const [layout, setLayout] = useState(
    localStorage.getItem("layout") ? Number(localStorage.getItem("layout")) : 1
  );
  const updateLayout = (e: number) => {
    localStorage.setItem("layout", e.toString());
    setLayout(e);
  };
  return (
    <>
      <Loader />
      <header
        className={`fixed h-screen max-h-screen w-full max-w-screen bg-bg flex font-main items-start ${
          layout === 2 ? "flex-row-reverse" : "flex-col"
        }`}
      >
        <div
          className={`relative flex ${
            layout === 2
              ? "flex-col w-2/6 h-full justify-between pb-5"
              : "flex-col sm:flex-row w-full h-2/10"
          }`}
        >
          <Logo currentLayout={layout} />
          <NavBar currentLayout={layout} />
        </div>
        <div
          className={`relative flex py-2 ${
            layout === 2
              ? "w-4/6 h-full flex-col-reverse"
              : "w-full h-8/10 flex-row"
          }`}
        >
          <div
            className={`flex flex-col ${
              layout === 2
                ? "h-2/6 w-full justify-end"
                : "w-[50%] h-full justify-start"
            }`}
          >
            <Slogan />
            <div
              className={`flex px-2 sm:px-6 ${
                layout === 2 ? "h-[50%] flex-row" : "h-2/10 flex-row"
              }`}
            >
              <Year />
              <SocialMedia />
            </div>
          </div>
          <div
            className={`flex flex-col justify-center ${
              layout === 2 ? "flex-col h-4/6" : "w-[50%] h-full"
            }`}
          >
            <div
              className={`flex flex-col w-full h-full justify-center items-center text-alt ${
                layout === 2 ? "py-4" : ""
              }`}
            >
              <MainIcon currentLayout={layout} />
              {layout === 1 && (
                <LayoutPicker
                  currentLayout={layout}
                  updateLayout={updateLayout}
                />
              )}
            </div>
          </div>
          {layout === 2 && (
            <LayoutPicker currentLayout={layout} updateLayout={updateLayout} />
          )}
        </div>
      </header>
    </>
  );
};
export default Header;
