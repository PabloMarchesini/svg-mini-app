import { useContext, useState } from "react";
import SvgContext from "../context/SvgContext";
import diagonalService from "../services/diagonal.service";
import moveService from "../services/move.service";
import styleService from "../services/style.service";
import React from "react";
import { Direction } from "../constants/move";
import Upload from "../images/upload.png";

export const Controls = () => {
  const [diagonalValue, setDiagonalValue] = useState(0);

  const { index, setSvgPath, svgPath } = useContext(SvgContext);

  const move = (direction) => {
    moveService.move(direction, index);
  };

  const rotate = (event) => {
    moveService.rotate(index, event.target.value);
  };

  const scale = (event) => {
    moveService.scale(index, event.target.value);
  };

  const opacity = (event) => {
    styleService.opacity(index, event.target.value);
  };

  const applyMinDiagonal = () => {
    diagonalService.removeElementsByDiagonal(diagonalValue);
  };

  const uploadFile = (event) => {
    let file = event.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        console.log("File content:", e.target.result);
        setSvgPath(e.target.result.toString());
      };
    }
  };

  return (
    <>
      {svgPath ? (
        <div className="row button-handler">
          {/* MOVEMENT */}
          <div className="col col-3">
            <label>Movement</label>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                disabled={!index}
                type="button"
                className="btn btn-secondary"
                onClick={() => move(Direction.Left)}
              >
                Left
              </button>
              <button
                disabled={!index}
                type="button"
                className="btn btn-secondary"
                onClick={() => move(Direction.Right)}
              >
                Right
              </button>
              <button
                disabled={!index}
                type="button"
                className="btn btn-secondary"
                onClick={() => move(Direction.Up)}
              >
                Up
              </button>
              <button
                disabled={!index}
                type="button"
                className="btn btn-secondary"
                onClick={() => move(Direction.Down)}
              >
                Down
              </button>
            </div>
          </div>

          {/* ROTATE */}
          <div className="col col-2">
            <label>Rotate</label>
            <input
              disabled={!index}
              className="slider"
              type="range"
              min="0"
              max="360"
              onChange={rotate}
            ></input>
          </div>

          {/* SCALE */}
          <div className="col col-2">
            <label>Scale</label>
            <input
              disabled={!index}
              className="slider"
              type="range"
              min="1"
              max="5"
              step="0.1"
              onChange={scale}
            ></input>
          </div>

          {/* OPACITY */}
          <div className="col col-2">
            <label>Opacity</label>
            <input
              disabled={!index}
              className="slider"
              type="range"
              step="0.1"
              min="0"
              max="1"
              onChange={opacity}
            ></input>
          </div>

          {/* DIAGONAL SIZE */}
          <div className="col col-3">
            <label>Min Diagonal Size</label>
            <div className="diagonal-input">
              <input
                disabled={!index}
                type="number"
                className="form-control"
                onChange={(event) =>
                  setDiagonalValue(event.target.valueAsNumber)
                }
              />
              <button
                disabled={!index}
                type="button"
                className="btn btn-secondary"
                onClick={applyMinDiagonal}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="row button-handler">
            {/* MOVEMENT */}
            <div className="col col-12 offset-5">
              <label className="custom-file-upload">
                <input type="file" onChange={uploadFile} />
                <img className="upload-button" src={Upload}></img>
                <span className="d-block mt-2 text-center">Upload SVG</span>
              </label>
            </div>
          </div>
        </>
      )}
    </>
  );
};
