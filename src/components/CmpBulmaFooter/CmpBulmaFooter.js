import React from "react";
import logofull from "../../img/Group 66@2x.png";
import { StyledFooterP, StyledLink } from "../StyledAzusaCmp";
import { useRest } from "@karpeleslab/react-klbfw-hooks";

const CmpBulmaFooter = function() {
  const [languages] = useLanguage();
  console.log(languages);

  function useLanguage() {
    return useRest("Language", "GET");
  }

  return (
    <footer className="footer" id="footer">
      <div className="level container">
        <div className="level-item">
          <img src={logofull} alt="" width="214px" />
        </div>
        <div className="level-item">
          <StyledLink to="/page/terms" className="level-item">
            TERMS
          </StyledLink>
        </div>
        <div className="level-item">
          <StyledLink to="/page/scta" className="level-item">
            SCTA
          </StyledLink>
        </div>
        <div className="level-item">
          <StyledLink to="/page/privacy" className="level-item">
            PRIVACY&nbsp;POLICY
          </StyledLink>
        </div>
        <div className="level-item">
          <div class="select is-rounded is-small">
            <select>
              <option>English (US)</option>
              <option>Arabe</option>
            </select>
          </div>
        </div>
        <div className="level-item">
          <StyledFooterP> © AzusaOs - All Rights Reserved</StyledFooterP>
        </div>
      </div>
    </footer>
  );
};

export default CmpBulmaFooter;
