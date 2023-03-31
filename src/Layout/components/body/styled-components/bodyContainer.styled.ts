import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 1rem;
  padding: 1.5rem;
`;

export const Html = styled.div`
  color: #515152;
  font-size: 0.9rem;
  font-style: italic;
`;
export const Body = styled.div`
  color: #515152;
  font-size: 0.9rem;
  margin-left: 2rem;
  font-weight: 400;
  font-style: italic;
`;

export const Contenedor = styled.div`
  width: 80vw;
  height: 80vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 4rem;
  padding: 20px 20px 20px 20px;
`;

export const Contenido = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background: none;
  border: none;
  outline: none;
  padding: 30px;
  font-size: 16px;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  color: var(--color-font-secundary);
  text-align: justify;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;
