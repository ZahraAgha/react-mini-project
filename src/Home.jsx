import React from "react";
import Yarat from "./Components/Yarat/Yarat";
import Creatorspart from "./Components/Creators/Creatorspart";
import Uzvler from "./Components/Uzvler/Uzvler";
import Destek from "./Components/Support/Destek";
import Onlinemagaza from "./Components/Onlinemagaza/Onlinemagaza";
import Abonelik from "./Components/Abonelik/Abonelik";
import Brandarea from "./Components/BrandArea/Brandarea";
import Registration from "./Components/Qeydiyyathome/Registration";
import AccordionTransition from "./Components/Accordion/Accordion";


const Home = () => {
  return (
    <>
      <Yarat />
      <Creatorspart />
      <Uzvler />
      <Destek />
      <Onlinemagaza />
      <Abonelik />
      <AccordionTransition />
      <Brandarea />
      <Registration />
     
    </>
  );
};

export default Home;
