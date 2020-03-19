import React from "react";
import screen from "../../img/azusa inter@2x.png";
import assist from "../../img/assist.png";
import secure from "../../img/secure.png";
import {
  FeaturesBox,
  Container,
  FeaturesContainer,
  StyledCenterP,
  StyledCenterH1
} from "../../components/StyledAzusaCmp";

function Features() {
  return (
    <FeaturesContainer>
      <Container>
        <div className="columns is-centered second-section">
          <div
            className="column is-3 has-text-centered"
            style={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}
          >
            <FeaturesBox style={{ height: "350px" }}>
              <img src={screen} alt="" width="270px" />
              <StyledCenterH1>Streaming Technology</StyledCenterH1>
              <StyledCenterP>
                Open your favorites applications instantly without any download
                or installation.
              </StyledCenterP>
            </FeaturesBox>
          </div>
          <div
            className="column is-3 has-text-centered"
            style={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}
          >
            <FeaturesBox style={{ height: "350px" }}>
              <img src={assist} alt="" width="168px" />
              <StyledCenterH1>OS Assistant</StyledCenterH1>
              <StyledCenterP>
                Meet Azusa, your new virtual assistant, available even when
                you’re not connected to the internet !
              </StyledCenterP>
            </FeaturesBox>
          </div>
          <div
            className="column is-3 has-text-centered"
            style={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}
          >
            <FeaturesBox style={{ height: "350px" }}>
              <img src={secure} alt="" width="168px" />
              <StyledCenterH1>Encrypted and Secure</StyledCenterH1>
              <StyledCenterP>
                Your safety is important for us. Our encrypted data system is
                here to protect you !
              </StyledCenterP>
            </FeaturesBox>
          </div>
        </div>
      </Container>
    </FeaturesContainer>
  );
}
export default Features;
