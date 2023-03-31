import { Layout } from "@/styled-components";
import { BodyContainer } from "./components/body";
import { SideNavigation } from "./components/SideNavigation";

const AppLayout = () => {
  return (
    <Layout>
      <SideNavigation />
      <BodyContainer />
    </Layout>
  );
};

export default AppLayout;
