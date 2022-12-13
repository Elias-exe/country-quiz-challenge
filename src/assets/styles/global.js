import { createGlobalStyle } from 'styled-components';

import background from '../images/background.png';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
body{
  background-image: url(${background});
  background-size: cover;
  font-size: 16px;
}
button{
  cursor: pointer;
}
`;
