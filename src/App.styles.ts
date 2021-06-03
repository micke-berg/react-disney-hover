import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  height: auto;
  background: #242838;
  padding: 20px 60px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
