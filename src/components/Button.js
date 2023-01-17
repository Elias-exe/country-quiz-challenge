import styled from 'styled-components';

export const Button = styled.button`
  width: 400px;
  border-radius: 12px;
  background:none;
  padding:15px;
  border:none;
  border: 2px solid rgba(96, 102, 208, 0.7);
  display:flex;
  font-size:15px;
  font-family: "Poppins", "arial";
  color: rgba(96, 102, 208, 0.8);
  align-items:center;

  .questionLetter{
    font-weight:bold;
    font-size:24px;
    margin-right:42px;
  }

  & + &{
    margin-top:32px;
  }

`;
