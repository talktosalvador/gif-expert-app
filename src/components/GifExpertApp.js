import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Game Of Thrones"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <ol>
        {categorias.map((categoria) => {
          return <GifGrid key={categoria} categoria={categoria}></GifGrid>;
        })}
      </ol>
    </>
  );
};
