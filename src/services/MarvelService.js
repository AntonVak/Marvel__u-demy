import {useHttp} from '../hooks/http.hook';
// 667125affbacc97913cef3c22c633039

const  useMarvelService = ()=> {
  const {loading, error, request, clearError, process, setProcess} = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=667125affbacc97913cef3c22c633039";
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  };
  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };
 
  const getAllComics = async (offset = 0) => {
    const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=12&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
}

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
      thumbnail:
      char.thumbnail.path +
        "." +
        char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
      description: comics.description || 'There is no description',
      thumbnail:
      comics.thumbnail.path +
        "." +
        comics.thumbnail.extension,
      language: comics.textObjects.language || 'en-us',
      price: comics.prices.price ? `${comics.prices.price}$` : 'not available',
    };
  };
  return {loading, 
          error, 
          process,
          setProcess, 
          getAllCharacters, 
          getCharacter, 
          clearError, 
          getAllComics, 
          getComics, 
          getCharacterByName }
}

export default useMarvelService;
