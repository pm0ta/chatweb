import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  svg {
    width: 100px;
    height: 100px;
    color: blueviolet;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Info = styled.p`
  font-size: 19px;
  text-align: center;
  max-width: 500px;
  color: blueviolet;
  line-height: 50px;
`
