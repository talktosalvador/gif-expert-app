import { useEffect, useState } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getFetchGifs(categoria).then((gifs) => {
      setState({
        data: gifs,
        loading: false,
      });
    });
  }, [categoria]);

  return state;
};
