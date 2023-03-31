import { useState } from "react";
import { Card, Container, ImgContainer } from "../styled-components";

const CardProject = () => {
  const [isHovered, setIsHovered] = useState(0);

  return (
    <>
      <Container>
        <Card
          onMouseOver={() => setIsHovered(1)}
          onMouseOut={() => setIsHovered(0)}
          to="https://worlds-most-extraordinary-homes.onrender.com/"
          target="_blank"
        >
          <p>Projects [0]</p>

          <ImgContainer>
            <img
              src="https://res.cloudinary.com/mostarq/image/upload/v1680092657/nqfiz6iwlgt29hwevkcp.jpg"
              alt="World's Most Extraordinary Homes"
            />
          </ImgContainer>
          {isHovered == 1 ? (
            <svg className="animacion-vertical onHover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
            </svg>
          ) : (
            ""
          )}
        </Card>

        <Card onMouseOver={() => setIsHovered(2)} onMouseOut={() => setIsHovered(0)} to="" target="_blank">
          <p>Projects [1]</p>

          <ImgContainer>
            <img src="https://res.cloudinary.com/mostarq/image/upload/v1680092438/ra7unmo1uuss1vbnikkx.jpg" alt="Ser libre App" />
          </ImgContainer>
          {isHovered == 2 ? (
            <>
              <p className="textAdd">En desarrollo</p>
              <svg className="animacion-vertical onHover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
              </svg>
            </>
          ) : (
            ""
          )}
        </Card>

        <Card onMouseOver={() => setIsHovered(3)} onMouseOut={() => setIsHovered(0)} to="" target="_blank">
          <p>Projects [2]</p>

          <ImgContainer>
            <img src="https://res.cloudinary.com/mostarq/image/upload/v1680100923/bjm0yig1sbgf1irhb893.jpg" alt="Portfolio" />
          </ImgContainer>
          {isHovered == 3 ? (
            <svg className="animacion-vertical onHover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
            </svg>
          ) : (
            ""
          )}
        </Card>
        <Card onMouseOver={() => setIsHovered(4)} onMouseOut={() => setIsHovered(0)} to="" target="_blank">
          <p>Projects [3]</p>

          <ImgContainer>
            <img src="https://res.cloudinary.com/mostarq/image/upload/v1680267790/koirvmocuzxghzeikxgx.jpg" alt="Api F1 one" />
          </ImgContainer>
          {isHovered == 4 ? (
            <>
              <p className="textAdd">En desarrollo</p>
              <svg className="animacion-vertical onHover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
              </svg>
            </>
          ) : (
            ""
          )}
        </Card>
      </Container>
    </>
  );
};
export default CardProject;
