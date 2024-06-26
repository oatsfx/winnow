import {
  Dissection,
  InsideShape,
  OutsideShape,
  OutsideShapeCalls,
  VerityResult,
  VeritySide,
} from "types/verity";

const sides: VeritySide[] = ["left", "middle", "right"];

export const createCommaSeparatedString = (arr: string[]): string => {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;

  const allButLast = arr.slice(0, -1).join(", ");
  const lastItem = arr[arr.length - 1];

  return `${allButLast}, and ${lastItem}`;
};

export const shape3dTo2d: { [key in OutsideShape]: InsideShape[] } = {
  cone: ["circle", "triangle"],
  cube: ["square", "square"],
  cylinder: ["circle", "square"],
  prism: ["triangle", "square"],
  pyramid: ["triangle", "triangle"],
  sphere: ["circle", "circle"],
};

export const shape2dTo3d = (
  insideShapes: InsideShape[]
): OutsideShape | null => {
  for (const [outsideShape, mappedInsideShapes] of Object.entries(
    shape3dTo2d
  )) {
    if (
      JSON.stringify(mappedInsideShapes.sort()) ===
      JSON.stringify(insideShapes.sort())
    ) {
      return outsideShape as OutsideShape;
    }
  }
  return null; // Return null if no matching OutsideShape is found
};

export const insideShapeToNeededShapes: {
  [key in InsideShape]: InsideShape[];
} = {
  circle: ["triangle", "square"],
  square: ["circle", "triangle"],
  triangle: ["circle", "square"],
};

export const getAvailableShapes = (
  outsideShapes: OutsideShapeCalls
): InsideShape[] => {
  const availableShapes: InsideShape[] = [
    "circle",
    "circle",
    "triangle",
    "triangle",
    "square",
    "square",
  ];
  for (const call of Object.values(outsideShapes)) {
    if (call === null) {
      continue;
    }
    for (const add of shape3dTo2d[call as keyof typeof shape3dTo2d]) {
      availableShapes.splice(availableShapes.indexOf(add), 1);
    }
  }
  return availableShapes;
};

export const getOutsideShapesLeft = (
  insideShapes: InsideShape[]
): OutsideShape[] => {
  const shapeCounts = insideShapes.reduce((counts, shape) => {
    counts[shape] = ((counts[shape] || 0) as number) + 1;
    return counts;
  }, {} as { [key in InsideShape]?: number });
  const possibleShapes: OutsideShape[] = [];
  if (shapeCounts.circle === 2) possibleShapes.push("sphere");
  if (shapeCounts.square === 2) possibleShapes.push("cube");
  if (shapeCounts.triangle === 2) possibleShapes.push("pyramid");
  if (shapeCounts.circle && shapeCounts.triangle) possibleShapes.push("cone");
  if (shapeCounts.circle && shapeCounts.square) possibleShapes.push("cylinder");
  if (shapeCounts.triangle && shapeCounts.square) possibleShapes.push("prism");

  return possibleShapes;
};

export const replaceNonEnglish = (str: string) => {
  return str
    .replace("ê", "e")
    .replace("à", "a")
    .replace("È", "E")
    .replace("ö", "o")
    .replace("…", "...");
};
