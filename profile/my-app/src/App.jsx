import React from "react";

// styles 
import { ContainerScroll, SectionScroll } from "./App.styles";

import { Cover } from "./components/Cover";
import { SectionComponent } from "./components/Section/SectionComponent";

const App = () => {
  const textPrueba = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illum sed ullam voluptas, quod nostrum recusandae qui est reprehenderit quibusdam consequatur natus, animi beatae dolor commodi quas facilis. Maiores, quis?';
  return (
    <ContainerScroll>
      <SectionScroll>
        <Cover />
      </SectionScroll>
      <SectionScroll>
        <SectionComponent
          title='About me'
          text1={textPrueba}
          text2={textPrueba} />
      </SectionScroll>
    </ContainerScroll>
  );
}

export default App;
