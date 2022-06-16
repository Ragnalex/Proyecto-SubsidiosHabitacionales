import React, { Fragment } from "react";
import Header from '../../components/Layouts/Header/header';
import SearchBar from "./SearchBar/search-bar";
import About from "./About/about";
import "./home.css";

const home = () => {
  return (
    <div className="container home-content">
      <div className="text-center">
        <Header/>
        <SearchBar/>
        <About/>
      </div>
    </div>
  );
};

export default home;
