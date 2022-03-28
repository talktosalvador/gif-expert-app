export const getFetchGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}&limit=4&api_key=iSxjBIXwgXfvRcGuUjo8px4LudEYocO4`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });
  return gifs;
};
