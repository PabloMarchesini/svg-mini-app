import React, { useState, useContext } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import SvgContext from "../context/SvgContext";

const SvgSelect = (props) => {
  const [currentElement, setCurrentElement] = useState<any>();
  const [selectedElementPrevColor, setSelectedElementPrevColor] = useState({});
  const { setElementIndex } = useContext(SvgContext);

  const handleClick = (event) => {
    if (currentElement) {
      currentElement.setAttribute("stroke", selectedElementPrevColor);
    }
    const element = event.target;
    const elementsArray = Array.from(element.parentElement.children);
    const id = elementsArray.indexOf(element) + 1;
    setSelectedElementPrevColor(element.getAttribute("stroke"));

    setCurrentElement(element);
    setElementIndex(id);
    element.setAttribute("stroke", "yellow");
  };

  return (
    <>

        <div className="col col-6">
          <h3>Original</h3>
          <div className="image-container">
            <SvgLoader path={props.value}>
              <SvgProxy selector="*" onClick={handleClick} />
            </SvgLoader>
          </div>
        </div>
    </>
  );
};

export default SvgSelect;
