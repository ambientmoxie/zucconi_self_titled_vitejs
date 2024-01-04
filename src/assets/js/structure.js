import { randomColor } from "./utils";

/* --------------------------------------------------------------------------------------------------------------------

Each function returns an HTML structure along with a description of the content's position.
The final description is constructed by concatenating the "subtitle" property value returned by each function.

------------------------------------------------------------------------------------------------------------------- */


export function besideStructure(child1, child2) {
  return {
    html: `<div class="beside">${child1.html}${child2.html}</div>`,
    subtitle: `${child1.subtitle} beside ${child2.subtitle}`,
  };
}

export function endStructure() {
  const color = randomColor();
  return {
    html: `<div class="base" style="background-color: ${color.code}"></div>`,
    subtitle: `a bloc of ${color.name}`,
  };
}

export function withinStructure(child) {
  const color = randomColor();
  return {
    html: `<div class="within" style="background-color: ${color.code}">${child.html}</div>`,
    subtitle: `${child.subtitle} within a bloc of ${color.name}`,
  };
}

export function onStructure(child1, child2) {
  const color = child1.code || randomColor().code;
  return {
    html: `<div class="on" style="background-color: ${color}">${child1.html}${child2.html}</div>`,
    subtitle: `${child1.subtitle} on top of ${child2.subtitle}`,
  };
}


