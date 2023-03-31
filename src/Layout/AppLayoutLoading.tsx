import { Layout } from "@/styled-components";
import { BodyContainer } from "./components/body";
import Loader from "@/Layout/components/body/components/Loader";
import { SideNavigation } from "./components/SideNavigation";

const AppLayoutLoading = () => {
  return (
    <Layout>
      <SideNavigation />
      <BodyContainer Component={Loader} />
    </Layout>
  );
};

export default AppLayoutLoading;
