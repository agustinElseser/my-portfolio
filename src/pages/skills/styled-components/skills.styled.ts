import styled from "styled-components";

export const Skill = styled.div`
  width: 15rem;
  border-style: solid;
  border-color: var(--color-secundary);
  border-width: 1px;
  transition: all 0.3s;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  &:hover {
    box-shadow: 0px 0px 30px 1px var(--color-principal);
    border-color: var(--color-principal);
    color: var(--color-principal);
  }
`;

export const SkillConteiner = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin: 1rem 0rem 1rem 0rem;
`;

export const CodeConteiner = styled.div`
  display: flex;
  width: 500px;
  animation-duration: 2s;
`;

export const Conteiner = styled.div`
  display: flex;

  flex-direction: row;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;
export const DivSkill = styled.div`
  color: var(--color-terciary);
  margin-left: 2rem;
  font-size: 0.9rem;
  font-style: italic;
  font-style: italic;
  align-self: flex-start;
`;
export const Arrow = styled.svg`
  color: var(--color-principal);
  align-self: center;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
`;
