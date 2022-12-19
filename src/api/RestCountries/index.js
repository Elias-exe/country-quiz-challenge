import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RestCountries() {
  const [data, setData] = useState({});

  async function handleData() {
    try {
      await axios({
        method: 'get',
        url: 'https://restcountries.com/v2/name/Brazil',
      })
        .then((response) => {
          setData(response);
        });
    } catch {
      console.log('Algo deu errado');
    }
  }

  useEffect(() => {
    handleData();
  }, []);
  return {
    data,
  };
}
