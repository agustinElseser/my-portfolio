import styled from "styled-components";

export const Title = styled.h1`
  color: var(-color-terciary);
  font-size: 4rem;
  line-height: 1.1em;
  text-align: start;
  align-self: flex-start;

  margin-left: 3rem;
`;
export const SubTitle = styled.h2`
  color: var(--color-principal);
  font-size: 2rem;
  text-align: start;
  align-self: flex-start;
  line-height: 0.1em;
  margin: 1rem 0rem 1rem 3rem;
`;
export const B = styled.b`
  color: var(--color-principal);
  font-size: 4rem;
  line-height: 1em;
  text-align: start;
  align-self: flex-start;
  font-style: italic;
`;

export const H = styled.p`
  color: var(--color-terciary);
  font-size: 0.9rem;
  font-style: italic;
  align-self: flex-start;
  font-style: italic;
`;
export const Button = styled.button`
  width: 7rem;
  height: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-background);
  font-weight: 900;
  background-color: white;
  cursor: pointer;
  padding-top: 5px;
  animation-duration: 0.4s;
  transition: all 0.3s;
  box-shadow: 10px 10px 10px 0px rgb(10, 10, 10);
  &:hover {
    box-shadow: 0px 0px 30px 1px var(--color-principal);
    border-color: var(--color-principal);
    color: var(--color-principal);
  }
`;
