import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Body, Container, Contenedor, Contenido, Html } from "./styled-components/bodyContainer.styled";

interface Iprops {
  Component?: JSX.Element | JSX.Element[];
}

const BodyContainer = ({ Component }: Iprops) => {
  const { pathname } = useLocation();

  const a = `<`;
  const b = `>`;
  return (
    <>
      <Container>
        <div>
          <Html>
            {a}html{b}
          </Html>
          <Body>
            {a}body{b}
          </Body>
        </div>
        <Contenedor>
          <Contenido>{Component ? Component : pathname == "/" ? <Navigate to="/home" /> : <Outlet />}</Contenido>
        </Contenedor>
        <div>
          <Body>
            {a}/body
            {b}
          </Body>
          <Html>
            {a}/html{b}
          </Html>
        </div>
      </Container>
    </>
  );
};

export default BodyContainer;
