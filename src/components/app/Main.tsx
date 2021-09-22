import React, { useContext } from "react";
import SvgSelect from "../svg-select";
import SvgContext from "../../context/SvgContext";
import { Controls } from "../controls";
import SvgPreview from "../svg-preview";

export default () => {
  const { svgPath } = useContext(SvgContext);

  return (
    <>
      <div className="container">
        <Controls></Controls>
        {svgPath && (
          <div className="row">
            {/* ORIGINAL IMAGE */}
            <SvgSelect value={svgPath}></SvgSelect>
            {/* MODIFIED IMAGE */}
            <SvgPreview value={svgPath}></SvgPreview>
          </div>
        )}
      </div>
    </>
  );
};
