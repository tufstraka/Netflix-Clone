 const API_KEY ="3968a7344aff40a0b95a4eac0cef53bb";

 const requests = {
     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28` ,
     
 }

export default requests;




