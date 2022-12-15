import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RestCountries() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://restcountries.com/v2/name/Brazil',
    })
      .then((response) => {
        setData(response);
      });
  }, []);
  return {
    data,
  };
}
