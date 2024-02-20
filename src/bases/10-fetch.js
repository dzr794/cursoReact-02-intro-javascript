/* eslint-disable no-undef */
const apiKey = 'bwyPZ1r3FsAs9as9jopfW1osTmzLUVTW';
const fetchUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const peticion = fetch(fetchUrl);

// console.log(fetchUrl);

peticion
  .then(resp => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  }).catch(console.warn)


