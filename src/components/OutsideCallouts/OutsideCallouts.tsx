import { Cone } from "components/Shapes/Cone";
import { Cube } from "components/Shapes/Cube";
import { Cylinder } from "components/Shapes/Cylinder";
import { Prism } from "components/Shapes/Prism";
import { Pyramid } from "components/Shapes/Pyramid";
import { Sphere } from "components/Shapes/Sphere";
import { OutsideShape, OutsideShapeCalls, VeritySide } from "types/verity";
import { getAvailableShapes, getOutsideShapesLeft } from "util/formatters";

const nonSquaredOutsideShapes: OutsideShape[] = ["cone", "cylinder", "prism"];

const squaredOutsideShapes: OutsideShape[] = ["cube", "pyramid", "sphere"];

const shapes: { [key in OutsideShape]: JSX.Element } = {
  cone: <Cone />,
  cylinder: <Cylinder />,
  prism: <Prism />,
  cube: <Cube />,
  pyramid: <Pyramid />,
  sphere: <Sphere />,
};

const OutsideCallouts = ({
  side,
  selectedShapes,
  handleOutsideShapeChange,
}: {
  side: VeritySide;
  selectedShapes: OutsideShapeCalls;
  handleOutsideShapeChange: (side: VeritySide, shape: OutsideShape) => void;
}) => {
  const checkDisabledButton = (shape: OutsideShape) => {
    const available2dShapes = getAvailableShapes(selectedShapes);
    const available3dShapes = getOutsideShapesLeft(available2dShapes);

    // Selected shape for the current Guardian call.
    const selectedShape = selectedShapes[
      side as keyof typeof selectedShapes
    ] as OutsideShape;

    // Don't disable any buttons of the first selection.
    if (
      selectedShape !== null &&
      Object.values(selectedShapes).filter((x) => x !== null).length === 1
    ) {
      return false;
    }

    if (selectedShape === shape) {
      return false;
    }

    return !available3dShapes.includes(shape);
  };

  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex items-center gap-2 justify-center">
        {nonSquaredOutsideShapes.map((shape) => (
          <button
            className={
              "w-16 btn" +
              (selectedShapes[side as keyof typeof selectedShapes] === shape
                ? " btn-info"
                : "")
            }
            onClick={() => {
              handleOutsideShapeChange(side, shape);
            }}
            disabled={checkDisabledButton(shape)}
            key={shape}
          >
            {shapes[shape as keyof typeof shapes]}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 justify-center">
        {squaredOutsideShapes.map((shape) => (
          <button
            className={
              "w-16 btn" +
              (selectedShapes[side as keyof typeof selectedShapes] === shape
                ? " btn-info"
                : "")
            }
            onClick={() => {
              handleOutsideShapeChange(side, shape);
            }}
            disabled={checkDisabledButton(shape)}
            key={shape}
          >
            {shapes[shape as keyof typeof shapes]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OutsideCallouts;
