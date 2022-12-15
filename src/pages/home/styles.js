import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  align-content:center;

  h1{
    color: ${({ theme }) => theme.colors.white.primary}
  }
`;
