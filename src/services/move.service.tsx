import {Direction} from '../constants/move';
import utilsService from '../services/utils.service';

let directionMap = new Map();
directionMap.set(Direction.Up, -5);
directionMap.set(Direction.Down, 5);
directionMap.set(Direction.Right, 5);
directionMap.set(Direction.Left, -5);

const move = (direction, index) => {
    let previewSvgElement = utilsService.getPreviewSvgElement(index);

    switch (previewSvgElement.tagName) {
      case 'circle':
        moveCircle(direction, previewSvgElement);
        break;
      case 'rect':
        moveRect(direction, previewSvgElement);
        break;    
      default:
        break;
    }
  };

  const rotate = (index, amount) => {
    let previewSvgElement = utilsService.getPreviewSvgElement(index);

    switch (previewSvgElement.tagName) {
      case 'circle':
        const circle = previewSvgElement as SVGCircleElement;
        const cx = circle.cx.baseVal.value.toString();
        const cy = circle.cy.baseVal.value.toString();    
        circle.setAttribute('transform', 'rotate({amount} {cx} {cy})'.replace('{amount}', amount).replace('{cx}', cx).replace('{cy}', cy));
        break;
      case 'rect':
        const rect = previewSvgElement as SVGRectElement;
        const x = rect.x.baseVal.value + (rect.width.baseVal.value / 2);
        const y = rect.y.baseVal.value + (rect.height.baseVal.value / 2);
        rect.setAttribute('transform', 'rotate({amount} {x} {y})'.replace('{amount}', amount).replace('{x}', x.toString()).replace('{y}', y.toString()));
        break;    
      default:
        break;
    }
  };

  const scale = (index, amount) => {
    let previewSvgElement = utilsService.getPreviewSvgElement(index) as SVGRectElement;
    
    previewSvgElement.setAttribute('transform', 'scale({amount})'.replace('{amount}', amount.toString()));    

  }

  const moveCircle = (direction, previewSvgElement) => {
    if(direction === Direction.Up || direction === Direction.Down) {
        moveCircleVertically(previewSvgElement as SVGCircleElement, directionMap.get(direction));
      }
      if(direction === Direction.Right || direction === Direction.Left) {
        moveCircleHorizontally(previewSvgElement as SVGCircleElement, directionMap.get(direction));
      }
  }

  const moveRect = (direction, previewSvgElement) => {
    if(direction === Direction.Up || direction === Direction.Down) {
        moveRectVertically(previewSvgElement as SVGRectElement, directionMap.get(direction));
      }
      if(direction === Direction.Right || direction === Direction.Left) {
        moveRectHorizontally(previewSvgElement as SVGRectElement, directionMap.get(direction));
      }
  }

  const moveCircleVertically = (element: SVGCircleElement, amount) => {
    let cy = element.cy.baseVal.value as number;
    element.setAttribute('cy', (cy+amount).toString());
  }

  const moveCircleHorizontally = (element: SVGCircleElement, amount) => {
    let cx = element.cx.baseVal.value as number;
    element.setAttribute('cx', (cx+amount).toString());
  }

  const moveRectVertically = (element: SVGRectElement, amount) => {
    let y = element.y.baseVal.value as number;
    element.setAttribute('y', (y+amount).toString());
  }

  const moveRectHorizontally = (element: SVGRectElement, amount) => {
    let x = element.x.baseVal.value as number;
    element.setAttribute('x', (x+amount).toString());
  }

  export default{
      move,
      rotate,
      scale
  }
