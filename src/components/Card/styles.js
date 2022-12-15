import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color:white;
  padding: 0px 32px 0px 32px;
  border-radius:24px;
  width: 100%;
  max-width:464px;

  .quizQuestion{
    color:${({ theme }) => theme.colors.blue.primary}
  }
`;
