import React from "react";

import styled from "styled-components";
import FabButtonToggle from "../components/FabButtonToggle";
import MainOptionsGrid from "../components/MainOptionsGrid";

// FabButtonToggle can props icon and closIcon prop, both react components, to overide default icons
const HomeStyles = styled.div``;

export default function Home() {
  return (
    <HomeStyles>
      <div className="home">
        <FabButtonToggle>
          <MainOptionsGrid />
        </FabButtonToggle>
      </div>
    </HomeStyles>
  );
}
