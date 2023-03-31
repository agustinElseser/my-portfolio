import styled from "styled-components";

export const IconDiv = styled.div`
  display: flex;
  color: var(--color-font-secundary);
  height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;
  font-size: 1rem;
  gap: 20px;
  margin-bottom: 20px;
`;

export const IconHover = styled.a`
  &:hover {
    transition: all 0.3s ease-in;
    cursor: pointer;
    color: var(--color-principal);
  }
`;
