import textFit from "textfit";

export const subZone = document.getElementsByClassName("subtitle")[0];

export const COLORS = [
  { name: "medium slate blue", code: "#7B68EE" },
  { name: "pale violet red", code: "#DB7093" },
  { name: "medium aquamarine", code: "#66CDAA" },
  { name: "cornsilk", code: "#FFF8DC" },
  { name: "alice blue", code: "#F0F8FF" },
  { name: "medium orchid", code: "#BA55D3" },
  { name: "indigo", code: "#4B0082" },
  { name: "burly wood", code: "#DEB887" },
  { name: "snow", code: "#FFFAFA" },
  { name: "dark violet", code: "#9400D3" },
  { name: "brown", code: "#A52A2A" },
  { name: "dark goldenrod", code: "#B8860B" },
  { name: "moccasin", code: "#FFE4B5" },
  { name: "cyan", code: "#00FFFF" },
  { name: "fuchsia", code: "#FF00FF" },
  { name: "pale turquoise", code: "#AFEEEE" },
  { name: "light goldenrod yellow", code: "#FAFAD2" },
  { name: "wheat", code: "#F5DEB3" },
  { name: "orange red", code: "#FF4500" },
  { name: "cadet blue", code: "#5F9EA0" },
  { name: "chocolate", code: "#D2691E" },
  { name: "cornflower blue", code: "#6495ED" },
  { name: "light grey", code: "#D3D3D3" },
  { name: "dark cyan", code: "#008B8B" },
  { name: "yellow", code: "#FFFF00" },
  { name: "lavender blush", code: "#FFF0F5" },
  { name: "lavender", code: "#E6E6FA" },
  { name: "light sea green", code: "#20B2AA" },
  { name: "navy", code: "#000080" },
  { name: "white smoke", code: "#F5F5F5" },
  { name: "medium sea green", code: "#3CB371" },
  { name: "green yellow", code: "#ADFF2F" },
  { name: "blanched almond", code: "#FFEBCD" },
  { name: "medium violet red", code: "#C71585" },
  { name: "red", code: "#FF0000" },
  { name: "ivory", code: "#FFFFF0" },
  { name: "chartreuse", code: "#7FFF00" },
  { name: "medium spring green", code: "#00FA9A" },
  { name: "lemon chiffon", code: "#FFFACD" },
  { name: "spring green", code: "#00FF7F" },
  { name: "aqua", code: "#00FFFF" },
  { name: "dark gray", code: "#A9A9A9" },
  { name: "light blue", code: "#ADD8E6" },
  { name: "orchid", code: "#DA70D6" },
  { name: "green", code: "#008000" },
  { name: "dark sea green", code: "#8FBC8F" },
  { name: "slate blue", code: "#6A5ACD" },
  { name: "medium slate blue", code: "#7B68EE" },
  { name: "dark olive green", code: "#556B2F" },
  { name: "black", code: "#000000" },
  { name: "white", code: "#FFFFFF" },
];

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

// Resize text

export function resizeText(el) {
  textFit(el, {
    minFontSize: 16,
    maxFontSize: 9999,
    multiLine: true,
  });
}
