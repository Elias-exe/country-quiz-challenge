/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';
import { Container } from './styles';

import RestCountries from '../../api/RestCountries';

export default function Card() {
  const { data } = RestCountries();
  const [capitalFiltered, setCapitalFiltered] = useState();

  useEffect(() => {
    data.data?.map((capital) => (
      setCapitalFiltered(capital.capital)
    ));
  }, [data]);

  return (
    <Container>
      <h1 className="quizQuestion">{capitalFiltered} is the capital of</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nihil quas necessitatibus nulla, et magni praesentium possimus cupiditate
        officiis mollitia recusandae molestiae illo corporis dignissimos, nemo,
        tempora ex numquam consequuntur enim?
      </p>
    </Container>

  );
}
