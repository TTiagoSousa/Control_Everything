import { useState, useEffect } from 'react';
import http from '../../Services/httpService';

const useFetchPlatformsFromDataBase = () => { 

  const [ platformsList, setPlatformsList ] = useState(null)

  useEffect(() => {

    const fetchPlatformsFromDataBase = async () => {
      try {

        const response = await http.get(`platforms/get-all-platforms`);

        setPlatformsList(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlatformsFromDataBase();
  }, []); 

  return { platformsList };

}

export default useFetchPlatformsFromDataBase;