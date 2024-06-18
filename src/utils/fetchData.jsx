export const exerciseOptions = {
        
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      
      }

export const ytOptions = {
  method:'GET',
  headers:{
    'x-rapidapi-key': process.env.REACT_API_KEY,
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();
    return data;
}