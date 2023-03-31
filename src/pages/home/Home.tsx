import { B, Button, H, SubTitle, Title } from "./styled-components";
import "animate.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const a = `<`;
  const b = `>`;
  return (
    <>
      <div className="center">
        <H>
          {a}h1{b}
        </H>
        <div className="flex">
          <div>
            <br />
            <Title>Hola, </Title>
            <Title>
              soy <B>Agustin</B>,
            </Title>
            <Title>desarrollador web</Title>
            <br />
            <H>
              {a}/h1{b}
            </H>

            <H>
              {a}h2{b}
            </H>
            <SubTitle>Full Stack dev</SubTitle>
            <H>
              {a}/h2{b}
            </H>
          </div>
          <div className="flex-column">
            <img className="hueco" src="https://res.cloudinary.com/mostarq/image/upload/v1679329214/lm8t3vg6da2rdskxe7fu.png" alt="" />
            <Button className="animacion-vertical	" onClick={() => navigate("/contact")}>
              CONTÁCTAME
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
