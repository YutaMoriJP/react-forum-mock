import React from "react";
import dataLists from "./data/anime.json";

const Recipe = ({ name, description }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
};

const Menu = () => {
  return dataLists.map(dataList => <Recipe {...dataList} key={dataList.id} />);
};

export default Menu;
