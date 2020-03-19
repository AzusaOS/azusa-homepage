import React from "react";
import github from "../../img/GitHub_Logo@2x.png";
import twitter from "../../img/Twitter_Logo_Blue@2x.png";
import { CenterSection} from "../../components/StyledAzusaCmp";

function ThirdSection() {
  return (
    <div className="ThirdSection">
      <div id="third-section">
        <div>
          <h1>Follow our project on:</h1>
        </div>
        <div className="columns is-centered">
          <div className="column is-5 has-text-centered">
            <CenterSection
              style={{
                height: "180px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={github}
                className="image"
                alt=""
                width="215"
                height="88"
                style={{ display: "inline" }}
              />
            </CenterSection>
            <p>
              More technical informations about the project are available on
              Github
            </p>
            <input
              class="input is-rounded"
              type="text"
              placeholder="Your email"
            ></input>
          </div>
          <div className="column is-5">
            <CenterSection
              style={{
                height: "180px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={twitter}
                className="image"
                alt=""
                width="168"
                height="168"
                style={{ display: "inline" }}
              />
            </CenterSection>

            <p>Stay tune about lasts news and announcements for AzusaOs.</p>

            <button className="button is-rounded" style={{marginTop:"0"}}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThirdSection;
