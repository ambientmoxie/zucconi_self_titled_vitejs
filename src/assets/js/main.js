/*

* Understanding recursive functions by reproducing the digital artwork "sefl-titled" by american artist damon zucconi.
* While the visual outcome is identical to the artwork, the method and code may differ.

*/

import "../scss/style.scss";
import { getRandomInt, subZone, resizeText } from "./utils";
import {
  onStructure,
  withinStructure,
  besideStructure,
  endStructure,
} from "./structure";

/*

The "randomDepthStructure" function generates nested div elements with a maximum nesting
depth controlled by the MAX_DEPTH constant using recursion. It ceases execution when the nesting level
reaches 10 or a random number between 0 and 1 exceeds 0.6. On execution, it generates a random integer between
0 and 2, deciding the HTML structure to return and increments the currentDepth variable to track the nesting level.

*/

export const MAX_DEPTH = 10;

function randomDepthStructure(currentDepth = 0) {
  if (currentDepth >= MAX_DEPTH || Math.random() > 0.6) {
    // Base case: Return a simple Structure
    return endStructure();
  } else {
    // Recursion case: Nest further
    switch (getRandomInt(0, 2)) {
      case 0:
        return besideStructure(
          randomDepthStructure(currentDepth + 1),
          randomDepthStructure(currentDepth + 1)
        );
      case 1:
        return onStructure(
          randomDepthStructure(currentDepth + 1),
          randomDepthStructure(currentDepth + 1)
        );
      case 2:
        return withinStructure(randomDepthStructure(currentDepth + 1));
      default:
        return endStructure();
    }
  }
}

/*

The "generateArtwork" function retrieves the output of the "randomDepthStructure" function into a variable named "result".
The HTML content is injected into the div element with the id "compositionArea".
The text content is injected into the div element with the id "subtitleArea".

*/

function generateArtwork() {
  const result = randomDepthStructure();
  document.getElementById("compositionArea").innerHTML = result.html;
  document.getElementById("subtitleArea").innerText = result.subtitle;
}

// Generate the whole thing and handle the caption's size.

function globaleComposition() {
  generateArtwork();
  resizeText(subZone);
}

// New composition is created on click.

globaleComposition();
window.addEventListener("click", globaleComposition);
