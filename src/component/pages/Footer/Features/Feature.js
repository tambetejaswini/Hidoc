import React from "react";
import { FeatureIcon } from "../../../data/Data";
import FeatureIconBox from "../../../common/FeatureIconBox/FeatureIconBox";
function Feature() {
  return (
    <div>
      <b>
        <div className="p-1 m-1">HIDOC DR. FEATURES</div>
      </b>
      <div className="row m-1 p-1 ">
        {FeatureIcon.map((iconDetails) => (
          <div className="col-3 p-0" key={iconDetails.id}>
            <FeatureIconBox iconDetails={iconDetails}></FeatureIconBox>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
