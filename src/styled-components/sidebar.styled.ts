import styled from "styled-components";

export const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  padding: 10px;
  background-color: var(--color-sideBar);
  color: var(--color-principal);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  background-image: radial-gradient(transparent 1px, var(--color-sideBar) 1px);
  background-size: 5px 5px;
  box-shadow: 17px 8px 22px rgba(0, 0, 0, 0.8);
`;
