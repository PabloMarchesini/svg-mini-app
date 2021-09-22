const getPreviewSvgElement = (index) => {
    const svgChanges = document.getElementsByTagName("svg")[1];
    const elementChanges = svgChanges.children[index-1];
    return elementChanges;
  }


  const getAllSvgElements = () => {
    const svgChanges = document.getElementsByTagName("svg")[1];
    const elements = svgChanges.children;
    return elements;
  }

  export default {
      getPreviewSvgElement,
      getAllSvgElements
  }