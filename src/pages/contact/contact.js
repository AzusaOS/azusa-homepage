import React from "react";
import CmpBulmaNavbar from "../../components/CmpBulmaNavbar/CmpBulmaNavbar";
import CmpBulmaFooter from "../../components/CmpBulmaFooter/CmpBulmaFooter";
import CmpContactBox from "./CmpContactBox";
import {
  StyledContactH1,
  CenterSection,
  Container,
  CenterDiv
} from "../../components/StyledAzusaCmp";

function Contact() {
  return (
    <div>
      <Container>
        <CmpBulmaNavbar />
        <CenterSection>
          <CenterDiv>
            <StyledContactH1>Contact us</StyledContactH1>
          </CenterDiv>
          <CmpContactBox />
        </CenterSection>
      </Container>
      <CmpBulmaFooter />
    </div>
  );
}
export default Contact;
