export type VeritySide = "left" | "middle" | "right";

export type OutsideShape =
  | "prism"
  | "cone"
  | "cylinder"
  | "sphere"
  | "cube"
  | "pyramid";

export type OutsideShapeCalls = {
  left: OutsideShape | null;
  middle: OutsideShape | null;
  right: OutsideShape | null;
};

export type InsideShape = "circle" | "square" | "triangle";

export type InsideShapeCalls = {
  left: InsideShape | null;
  middle: InsideShape | null;
  right: InsideShape | null;
};

export type VerityResult = {
  left: InsideShape[];
  middle: InsideShape[];
  right: InsideShape[];
};

export type Dissection = {
  side: VeritySide;
  shape: InsideShape;
};
