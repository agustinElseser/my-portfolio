import Loader from "@/Layout/components/body/components/Loader";
import CardProject from "./components/CardProject";
import { Div } from "./styled-components";

const Projects = () => {
  const a = `<`;
  const b = `>`;
  return (
    <>
      <div className="center">
        <Div>
          {a}div{b}
        </Div>
        <CardProject />
        <Div>
          {a}/div{b}
        </Div>
      </div>
    </>
  );
};

export default Projects;
