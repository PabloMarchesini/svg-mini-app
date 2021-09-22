import utilsService from "./utils.service";

const removeElementsByDiagonal= (minDiagonal) => {
    const elements = utilsService.getAllSvgElements();
    
    const elementsArray = Array.from(elements);
    elementsArray.forEach((element: any) => {
        const box = element.getBBox();
        const diagonal = Math.sqrt((box.width * box.width) + (box.height * box.height));
        if(diagonal < minDiagonal) {
            const svgPreview = document.getElementsByTagName("svg")[1];
            svgPreview.removeChild(element);
        }
    })
}

export default {
    removeElementsByDiagonal
}