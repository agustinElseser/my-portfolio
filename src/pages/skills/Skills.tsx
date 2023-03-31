import "animate.css";
import { Arrow, CodeConteiner, Conteiner, DivSkill, Skill, SkillConteiner } from "./styled-components/skills.styled";
import { skillsProvider } from "./service/skillsProvider";
import { useSkill } from "@/hooks/useSkill";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const skills = skillsProvider();
  const { example, handleClick } = useSkill();
  const { pathname } = useLocation();

  const a = `<`;
  const b = `>`;

  return (
    <>
      <DivSkill>
        {a}div{b}
      </DivSkill>

      <Conteiner>
        <SkillConteiner>
          <Arrow className="animacion-vertical ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
            </svg>
          </Arrow>
          {skills.map((skill) => (
            <Skill
              key={skill.title}
              className={pathname == `/skills/${skill.title}` ? "activeSkill" : ""}
              onClick={() => handleClick(skill.example, skill.title)}
            >
              {skill.icon} {skill.title}
            </Skill>
          ))}
        </SkillConteiner>
        <CodeConteiner className={example == "" ? "" : "animate__animate animate__fadeIn"}>
          <pre>{example}</pre>
        </CodeConteiner>
      </Conteiner>
      <DivSkill>
        {a}/div{b}
      </DivSkill>
    </>
  );
};

export default Skills;
