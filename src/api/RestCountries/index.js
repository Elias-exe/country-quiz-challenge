import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RestCountries() {
  const [data, setData] = useState({});

  const subRegion = ['South America', 'Southern Europe', 'Central America', 'Eastern Asia'];
  const randomSubRegion = subRegion[Math.floor(Math.random() * subRegion.length)];

  async function handleData() {
    try {
      await axios({
        method: 'get',
        url: `https://restcountries.com/v3.1/subregion/${randomSubRegion}`,
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
