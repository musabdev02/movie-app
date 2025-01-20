import React, { useEffect } from "react";
import Card from "./Card";
import loading from "../assets/loading.svg";
// funcs
import { fetchMovies } from "../API/api";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../Store/Features/MoviesList";
import { setLoading } from "../Store/Features/LoadingSlice";
const CardContainer = () => {
  const moviesData = useSelector((state) => state.MovieList);
  const itemQuery = useSelector((state) => state.ListSearch);
  const isloading = useSelector((state) => state.LoadingSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    const fetchTrend = async () => {
      if (itemQuery === "trending") {
        const data = await fetchMovies(itemQuery);
        dispatch(setMovies(data));
        dispatch(setLoading(false));
      }
    };
    fetchTrend();
  }, ["", itemQuery]);
  return (
    <>
    {
      isloading ?
      <div className="w-full h-[80vh] flex items-center justify-center">
        <img src={loading} alt="loader" className="w-40" />
      </div>
      :
      <div className='p-8'>
      <h1 className='font-semibold text-3xl text-zinc-600 dark:text-zinc-400'>{itemQuery.slice(0,1).toUpperCase()+itemQuery.slice(1)}</h1>
      <div className='wrapper_card max-w-100 grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-5 mt-12 justify-start items-start h-[70vh]'>
        { moviesData.length > 0 && moviesData.map((item, index) => <Card content={item} key={index}/>)}
      </div>
    </div> 
  }
    </>
  );
};

export default CardContainer;
