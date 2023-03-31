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
          {a} Curriculum{" "}
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
          </svg>
          <span>{b}</span>
        </NavCV>
      </Navbar>
    </>
  );
};

export default Navigation;
