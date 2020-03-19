import React from "react";
import CmpBulmaNavbar from "../../components/CmpBulmaNavbar/CmpBulmaNavbar";
import CmpBulmaFooter from "../../components/CmpBulmaFooter/CmpBulmaFooter";
import CmpNewsBox from "../news/CmpNewsBox";
import news from "../../img/news@2x.png";
import {
  StyledH1BotBor,
  LeftDiv,
  CenterSection,
  Container
} from "../../components/StyledAzusaCmp";

function News() {
  return (
    <div>
      <Container>
        <CmpBulmaNavbar />
        <CenterSection>
          <LeftDiv>
            <figure>
              <img src={news} alt="" width="48px" height="48px" />
            </figure>
            <StyledH1BotBor>News</StyledH1BotBor>
          </LeftDiv>
          <CmpNewsBox
            title="Azusa is coming in 2021"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis."
          />
          <CmpNewsBox
            title="Azusa is coming in 2021"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis."
          />
          <CmpNewsBox
            title="Azusa is coming in 2021"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis."
          />
        </CenterSection>
      </Container>
      <CmpBulmaFooter />
    </div>
  );
}
export default News;
