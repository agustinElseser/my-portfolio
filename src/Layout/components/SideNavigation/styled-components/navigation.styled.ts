import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-size: 1rem;
  gap: 10px;
`;

export const Title = styled.h1`
  align-self: center;
  font-size: 2.7rem;
  margin-top: 2rem;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px 5px 0px;
  border-bottom: 1px solid #282828;
  color: var(--color-font-secundary);
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  border-bottom: 1px solid #282828;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

  &:focus,
  &:hover {
    transition: all 0.4s ease-in;
    color: var(--color-principal);
    border-bottom: 1px solid var(--color-principal);
  }
  a:focus:after,
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &:after {
    content: "";
    pointer-events: none;
    bottom: -1px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: var(--color-principal);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
  &.active {
    color: var(--color-principal);
  }
`;

export const NavCV = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px 5px 0px;
  border-bottom: 1px solid #282828;
  color: var(--color-font-secundary);
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  border-bottom: 1px solid #282828;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

  &:focus,
  &:hover {
    transition: all 0.4s ease-in;
    color: var(--color-principal);
    border-bottom: 1px solid var(--color-principal);
  }
  a:focus:after,
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &:after {
    content: "";
    pointer-events: none;
    bottom: -1px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: var(--color-principal);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
  &.active {
    color: var(--color-principal);
  }
`;
