export const exerciseOptions = {
        
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3f37b68d81mshf810da3429030dbp1fd7c7jsn400272583b04',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      
}

export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();
    return data;
}