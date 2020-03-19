import React from "react";
import CmpPresentation from "./CmpPresentation";

function CmpPresentationContainer({ title, text, position, image }) {
  if (position === "right") {
    return (
      <div className="columns">
        <div className="column is-4">
          <img id="vcentered" src={image} alt="" />
        </div>
        <div className="column">
          <CmpPresentation title={title} text={text} />
        </div>
      </div>
    );
  } else if (position === "left") {
    return (
      <div className="columns">
        <div className="column">
          <CmpPresentation title={title} text={text} />
        </div>
        <div className="column is-4">
          <img src={image} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <CmpPresentation title={title} text={text} />
      </div>
    );
  }
}
export default CmpPresentationContainer;
