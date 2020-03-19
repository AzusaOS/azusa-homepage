import React from "react";
import {
  StyledButton,
  StyledH1,
  StyledP,
  NewsBox
} from "../../components/StyledAzusaCmp";
import logofile from "../../img/logofile.png";

function CmpDownloadBox({ title, text, size, format }) {
  return (
    <NewsBox>
      <div className="columns">
        <div className="column is-3">
          <div
            className="image is-64x64"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <img src={logofile} alt="" />
          </div>
          <br />
          <StyledButton className="button is-rounded is-fullwidth">
            Download Now
          </StyledButton>
        </div>
        <div className="column">
          <StyledH1>{title}</StyledH1>
          <StyledP>{text}</StyledP>
          <StyledP>
            Size : {size} Format : {format}
          </StyledP>
        </div>
      </div>
    </NewsBox>
  );
}
export default CmpDownloadBox;
