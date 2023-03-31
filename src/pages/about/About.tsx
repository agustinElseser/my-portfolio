import { P, Text, B } from "./styled-components/about.styled";

const About = () => {
  const a = `<`;
  const b = `>`;
  return (
    <>
      <P>
        {a}p{b}{" "}
      </P>
      <Text>
        ¡Hola! Soy <B>Agustin</B>, un apasionado desarrollador full stack <B>autodidacta</B>, especializado en frontend. Aunque aún no tengo
        experiencia laboral, he estado trabajando arduamente para aprender nuevas tecnologías y herramientas que me permitan{" "}
        <B>crear experiencias digitales atractivas e intuitivas.</B>
        <br />
        <br />
        Como autodidacta, he encontrado una gran satisfacción en aprender por mi cuenta y he descubierto que la curiosidad y la
        determinación son fundamentales para alcanzar el éxito en este campo. Por eso, siempre estoy buscando{" "}
        <B>nuevas oportunidades para mejorar mis habilidades y conocimientos.</B>
        <br />
        <br />
        Me considero una persona <B>responsable, comprometida y enérgica,</B> y estoy emocionado por la idea de trabajar en equipo para
        crear soluciones digitales útiles y atractivas. Siempre estoy dispuesto a escuchar nuevas ideas y perspectivas, y me gusta trabajar
        en un ambiente que fomente la <B>creatividad y la colaboración.</B>
        <br />
        <br />
        En mi portfolio, encontrarás una muestra de <B>mi trabajo y proyectos personales</B>, los cuales reflejan mi pasión por la creación
        de interfaces atractivas y fáciles de usar. Si te interesa trabajar conmigo o conocer más acerca de mi trabajo, no dudes en{" "}
        <B>contactarme.</B>
        <br />
        <br />
        <B>¡Gracias por visitar mi portfolio!</B>
      </Text>
      <P>
        {a}/p{b}{" "}
      </P>
    </>
  );
};

export default About;
