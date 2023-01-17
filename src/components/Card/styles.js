import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color:white;
  padding: 0px 32px 0px 32px;
  border-radius:24px;
  width: 100%;
  max-width:464px;

  .quizFlag{
    color:${({ theme }) => theme.colors.blue.primary};
    font-size:84px;
  }

  .quizQuestion{
    font-size: 24px;
    color:${({ theme }) => theme.colors.blue.terciary};
  }

  .buttonContainer{
    margin-bottom: 64px;
  }
`;
