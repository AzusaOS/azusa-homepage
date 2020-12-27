import React from "react";
import CmpBulmaNavbar from "../../components/CmpBulmaNavbar/CmpBulmaNavbar";
import CmpBulmaFooter from "../../components/CmpBulmaFooter/CmpBulmaFooter";
import CmpDownloadBox from "../download/CmpDownloadBox";
import dlpicto from "../../img/dlpicto.png";
import { StyledH1BotBor, CenterSection, LeftDiv, Container } from "../../components/StyledAzusaCmp";

function Download() {
  return (
    <div>
      <Container>
        <CmpBulmaNavbar />
        <CenterSection>
          <LeftDiv>
            <figure>
              <img src={dlpicto} alt="" width="48px" height="48px" />
            </figure>
            <StyledH1BotBor>Downloads</StyledH1BotBor>
          </LeftDiv>

          <CmpDownloadBox
            title="Azusa v28.01"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis."
            size=""
            format=""
          />
          <CmpDownloadBox
            title="Azusa v28.01"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis."
            size=""
            format=""
          />
          <CmpDownloadBox
            title="Azusa v28.01"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis."
            size=""
            format=""
          />
        </CenterSection>
      </Container>
      <CmpBulmaFooter />
    </div>
  );
}
export default Download;
