import { useLocation } from "react-router-dom";
import { Navbar, NavCV, NavItem } from "../styled-components/navigation.styled";
const Navigation = () => {
  const { pathname } = useLocation();
  const a = `<`;
  const b = `/>`;
  return (
    <>
      <Navbar>
        <NavItem to="about">
          {a} Descripción <span>{b}</span>
        </NavItem>

        <NavItem className={pathname.includes("skills") ? "active" : ""} to="skills/home">
          {a} Tecnologías <span>{b}</span>
        </NavItem>

        <NavItem to="projects">
          {a} Proyectos <span>{b}</span>
        </NavItem>

        <NavItem to="contact">
          {a} Contacto <span>{b}</span>
        </NavItem>
        <NavCV href="/Cv-Elseser,Agustin-FullStack.pdf" download="Cv-Elseser,Agustin-FullStack.pdf">
          {a} Curriculum <span>{b}</span>
        </NavCV>
      </Navbar>
    </>
  );
};

export default Navigation;
