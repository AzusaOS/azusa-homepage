import React from "react";
import {
  StyledContactButton,
  NewsTitle,
  StyledP,
  NewsBox
} from "../../components/StyledAzusaCmp";
import az2 from "../../img/az2.png";

function CmpNewsBox({ title, text }) {
  return (
    <NewsBox>
      <div className="columns">
        <div className="column is-3">
          <img src={az2} alt="" width="250px" height="250px" />
        </div>
        <div className="column">
          <NewsTitle>{title}</NewsTitle>
          <StyledP>{text}</StyledP>
          <StyledContactButton className="button is-rounded">
            Read more
          </StyledContactButton>
        </div>
      </div>
    </NewsBox>
  );
}
export default CmpNewsBox;
