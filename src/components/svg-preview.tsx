import React from "react";
import { SvgLoader } from "react-svgmt";

const SvgPreview = (props) => {
  return (
    <>
      
        <div id="modified" className="col col-6">
          <h3>Modified</h3>
          <div className="image-container">
            <SvgLoader path={props.value}></SvgLoader>
          </div>
        </div>

    </>
  );
};

export default SvgPreview;
