import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1.5rem;
  border-style: solid;
  border-color: var(--color-secundary);
  border-width: 1px;
  width: 20rem;
  margin: 1rem 0rem 1rem 0rem;
`;

export const FormDiv = styled.div`
  color: var(--color-terciary);
  margin-left: -5rem;
  font-size: 0.9rem;
  font-style: italic;
`;
export const Title = styled.p`
  color: var(--color-principal);
  font-weight: 600;
  font-style: italic;
  font-size: 1rem;
`;
