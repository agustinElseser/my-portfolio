import { Sidebar } from "@/styled-components";
import Icons from "./components/Icons";
import Navigation from "./components/Navigation";
import { Title } from "./styled-components/navigation.styled";

export const SideNavigation = () => {
  const name = `{dev.ae}`;
  return (
    <Sidebar>
      <Title>{name}</Title>
      <Navigation />
      <Icons />
    </Sidebar>
  );
};
