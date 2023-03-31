import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-left: 5rem;
`;

export const Card = styled(NavLink)`
  width: 20%;
  height: 500px;
  font-size: 0.9rem;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s;
  animation-duration: 2s;
  box-shadow: 10px 10px 10px 0px rgb(10, 10, 10);
  padding: 0px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: var(--color-sideBar);
  &:hover {
    box-shadow: 0px 0px 30px 0px white;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
  & p {
    margin-left: 5px;
    padding: 5px;
  }
`;

export const ImgContainer = styled.div`
  flex: 1 1 auto;
  & img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const Div = styled.div`
  color: var(--color-terciary);
  margin-left: 2rem;
  font-size: 0.9rem;
  font-style: italic;
  font-style: italic;
  align-self: flex-start;
`;
