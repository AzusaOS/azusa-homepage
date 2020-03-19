import React, { useLayoutEffect, useState } from "react";
import Azusav2 from "../../img/Azusa_v2_alpha@2x.png";
import {
  StyledButton,
  StyledH1,
  StyledP
} from "../../components/StyledAzusaCmp";
import { Link } from "react-router-dom";

const FirstSection = function() {
  let [isMobile, SetIsMobile] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("resize", CheckIsMobile);
  });

  function CheckIsMobile() {
    if (window.outerWidth >= 1024) {
      SetIsMobile(false);
    } else {
      SetIsMobile(true);
    }
  }

  const ImageAzusa = function() {
    if (!isMobile) {
      return (
        <div className="tile is-5 is-vertical">
          <div className="Azusav2">
            <img src={Azusav2} alt="" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="FirstSection">
      <div className="tile is-ancestor" style={{ height: "650px" }}>
        <div className="tile is-vertical is-parent" id="first-section">
          <div className="tile is-child">
            <StyledH1>
              Azusa OS brings change to your desktop, mobile phone and more!
            </StyledH1>
            <StyledP>
              Azusa is coming! Discover a new operating system accessible to
              everyone with new features! Free and easy to use, Azusa allows you
              to start applications without having to download them. No more
              saturated hard drives, take it easy, AzusaOs is here for you!
            </StyledP>
            <StyledP>
              Your virtual assistant Azusa will help you to handle our operating
              system. Even if it still in development, regular updates are
              released weekly and you can try AsuzaOs right now.
            </StyledP>
            <StyledP>
              <StyledButton className="button is-rounded is-large">
                <Link to="/download" style={{ color: "white" }}>
                  TRY IT NOW
                </Link>
              </StyledButton>
            </StyledP>
          </div>
        </div>
        <ImageAzusa />
      </div>
    </div>
  );
};
export default FirstSection;
