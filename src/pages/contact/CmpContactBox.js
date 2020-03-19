import React from "react";

import az2 from "../../img/az2.png";
import {
  StyledH1,
  StyledContactP,
  StyledContactButton,
  ContactBox
} from "../../components/StyledAzusaCmp";

function CmpContactBox() {
  return (
    <ContactBox>
      <div className="columns">
        <div className="column">
          <StyledH1>Got Questions ? </StyledH1>
          <StyledContactP>Perfect, we got answers !</StyledContactP>
          <img src={az2} alt="" />
        </div>
        <div className="column">
          <StyledContactP>Email Adress</StyledContactP>
          <input className="input" type="text" placeholder="" />
          <StyledContactP>Name</StyledContactP>
          <input className="input" type="text" placeholder="" />
          <StyledContactP>Subject</StyledContactP>
          <input className="input" type="text" placeholder="" />
          <StyledContactP>Message</StyledContactP>
          <div class="field">
            <div class="control">
              <textarea className="textarea is-small" placeholder=""></textarea>
            </div>
          </div>
          <StyledContactButton className="button is-rounded">
            SEND
          </StyledContactButton>
        </div>
      </div>
    </ContactBox>
  );
}
export default CmpContactBox;
