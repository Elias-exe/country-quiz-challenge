import { createGlobalStyle } from 'styled-components';

import background from '../images/background.png';

export default createGlobalStyle`
body{
  background-image: url(${background});
  background-size: cover;
  font-size: 16px;
  font-family:"Poppins",sans-serif;
  margin:0px;
}
button{
  cursor: pointer;
}
`;
