import React, { useRef, useState, useEffect } from "react";
// ICONS
import { CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
// redux
import { getData } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../Store/Features/ListSearch";
import { setMovies } from "../Store/Features/MoviesList";
import { setLoading } from "../Store/Features/LoadingSlice";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const searchMovie = (name) => {
    const fetchData = async () => {
      const response = await getData(name);
      dispatch(setMovies(response));
      dispatch(setLoading(false));
    };
    fetchData();
    dispatch(setItem("discover"));
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (searchTerm.trim() !== "") {
        dispatch(setLoading(true));
        searchMovie(searchTerm.toLowerCase());
      }
    }
  };
  // dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="bg-[#3B54D4] py-2 px-3 flex gap-3 justify-between items-center z-50 fixed w-full sm:static">
      <search className="flex gap-5">
        <label htmlFor="search-input" className="text-zinc-300 self-center py-5 pl-6">
          <CiSearch size="1.4rem" />
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Search..."
          className="bg-transparent text-zinc-300 font-normal w-full py-5"
          spellCheck={false}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </search>
      <button className="flex-none cursor-pointer text-zinc-300 py-5 px-6 align-center" onClick={toggleDarkMode}>
        {
          isDarkMode ?
          <IoSunnyOutline size="1.4rem" />:
          <FaRegMoon size="1.2rem" />
        }
      </button>
    </div>
  );
};

export default SearchBar;
