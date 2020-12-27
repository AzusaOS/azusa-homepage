import React from "react";

import {
  StyledPresentationH1,
  PresentationContainer,
  PresentationBox,
  LeftDiv
} from "../../components/StyledAzusaCmp";

function CmpPresentation({ title, text }) {
  return (
    <PresentationContainer>
      <LeftDiv>
        <StyledPresentationH1>{title}</StyledPresentationH1>
      </LeftDiv>
      <PresentationBox>{text}</PresentationBox>
    </PresentationContainer>
  );
}
export default CmpPresentation;
