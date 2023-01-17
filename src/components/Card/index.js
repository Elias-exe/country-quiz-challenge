/* eslint-disable no-bitwise */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  useCallback, useEffect, useState,
} from 'react';

import { Container } from './styles';
import { Button } from '../Button';

import RestCountries from '../../api/RestCountries';

export default function Card() {
  const { data } = RestCountries();

  const [flag, setFlag] = useState('');

  const handleRandomizeCapital = useCallback((datas) => {
    if (datas.data) {
      const filteredCapitals = datas.data.map((capital) => (
        {
          capital: capital.capital,
          flag: capital.flag,
        }
      ));

      const capitalFiltered = filteredCapitals[Math.floor(Math.random() * filteredCapitals.length)];

      setFlag(capitalFiltered.flag);
    }
  });

  useEffect(() => {
    handleRandomizeCapital(data);
  }, [data]);

  return (
    <Container>
      <span className="quizFlag">{flag}</span>
      <span className="quizQuestion">is the capital of</span>
      <div className="buttonContainer">
        <Button type="button">
          <span className="questionLetter">
            A
          </span>
          <span>
            Vietnan
          </span>
        </Button>
        <Button type="button">
          <span className="questionLetter">
            B
          </span>
          <span>
            Finland
          </span>
        </Button>
        <Button type="button">
          <span className="questionLetter">
            C
          </span>
          <span>
            Sweden
          </span>
        </Button>
        <Button type="button">
          <span className="questionLetter">
            D
          </span>
          <span>
            Austria
          </span>
        </Button>
      </div>

    </Container>

  );
}
