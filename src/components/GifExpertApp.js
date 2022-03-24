import React, { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball Z",
  ]);

  // const handleAdd = (nuevaCategoria) => {
  //   setCategorias([...categorias, nuevaCategoria]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ol>
    </>
  );
};
