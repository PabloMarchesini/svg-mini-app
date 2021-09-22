import utilsService from "./utils.service";

const opacity = (index, amount) => {
    const element = utilsService.getPreviewSvgElement(index) as SVGRectElement;
    element.setAttribute('opacity', amount);
}
  export default {
    opacity
  }