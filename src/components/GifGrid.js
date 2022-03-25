import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=game+of+thrones&limit=15&api_key=iSxjBIXwgXfvRcGuUjo8px4LudEYocO4";
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      };
    });
    setImagenes(gifs);
  };

  return (
    <>
      <h3>{categoria}</h3>
      <div className="card-grid">
        {imagenes.map((imagen) => (
          <GifGridItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};
