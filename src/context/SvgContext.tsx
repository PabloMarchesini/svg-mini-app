import React, { useState, useEffect, createContext, FC } from 'react';


interface ISvgContext {
    index: number,
    svgPath: string,
    setElementIndex?: (int) => void,
    setSvgPath?: (string) => void
  }

const defaultState = {
  index: 0,
  svgPath: null
};

const SvgContext = createContext<ISvgContext>(defaultState);

export const SvgProvider: FC = ({ children }) => {
    const [index, setIndex] = useState(defaultState.index);
    const [svgPath, setPath] = useState(defaultState.svgPath);
  
    const setElementIndex = (val) => {
        setIndex(val);
    };

    const setSvgPath = (val) => {
        setPath(val);
    };
  
    return (
      <SvgContext.Provider
        value={{
        index,
        setElementIndex,
        svgPath,
        setSvgPath
        }}
      >
        {children}
      </SvgContext.Provider>
    );
  };

export default SvgContext;