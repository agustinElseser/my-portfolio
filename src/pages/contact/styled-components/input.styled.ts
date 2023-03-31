import styled from "styled-components";

export const Input = styled.input`
  font-size: 16px;
  padding: 5px 5px 5px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid var(--color-terciary);
  background: transparent;

  &:focus {
    outline: none;
    transition: all 0.2s ease-in;
    border-bottom: 1px solid var(--color-principal);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: none;
    font-family: var(--family-principal);
    -webkit-text-fill-color: var(--color-font-secundary);
    -webkit-box-shadow: 0 0 0px 1000px var(--color-background) inset;
    transition: background-color 5000s ease-in-out 0s;
    outline: none;
    transition: all 0.2s ease-in;
    border-bottom: 1px solid var(--color-principal);
  }
  &:valid {
    border-bottom: 1px solid var(--color-principal);
  }
  &:invalid {
    border-bottom: 1px solid var(--color-terciary);
  }
`;

export const Textarea = styled.textarea`
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid var(--color-terciary);
  background: transparent;
  resize: vertical;
  min-height: 40px;
  &:focus {
    outline: none;
    transition: all 0.2s ease-in;
    border-bottom: 1px solid var(--color-principal);
  }
  &:valid {
    border-bottom: 1px solid var(--color-principal);
  }
  &:invalid {
    border-bottom: 1px solid var(--color-terciary);
  }
`;
export const Button = styled.button`
  font-size: 18px;
  font-family: var(--family-principal);
  display: block;
  width: 150px;
  text-align: center;
  display: inline;
  height: 30px;
  border: 1px solid var(--color-secundary);
  background: transparent;
  padding: 5px;
  padding-top: 7px;
  &:hover {
    transition: all 0.2s ease-in;
    border: 1px solid var(--color-principal);
    color: var(--color-principal);
    box-shadow: 0px 0px 30px 1px var(--color-principal);
  }
`;
