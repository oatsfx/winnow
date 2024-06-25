import { Circle } from "components/Shapes/Circle";
import { Square } from "components/Shapes/Square";
import { Triangle } from "components/Shapes/Triangle";
import { InsideShape, InsideShapeCalls, VeritySide } from "types/verity";

const insideShapes: InsideShape[] = ["square", "triangle", "circle"];

const shapes: { [key in InsideShape]: JSX.Element } = {
  circle: <Circle />,
  square: <Square />,
  triangle: <Triangle />,
};

const InsideCallouts = ({
  side,
  selectedShapes,
  handleInsideShapeChange,
}: {
  side: VeritySide;
  selectedShapes: InsideShapeCalls;
  handleInsideShapeChange: (side: VeritySide, shape: InsideShape) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex items-center gap-2 justify-center">
        {insideShapes.map((shape) => (
          <button
            className={
              "w-16 btn" +
              (selectedShapes[side as keyof typeof selectedShapes] === shape
                ? " btn-accent"
                : "")
            }
            onClick={() => {
              handleInsideShapeChange(side, shape);
            }}
            disabled={
              Object.values(selectedShapes).includes(
                shape
              ) /* Selected shapes has the button's shape */ &&
              selectedShapes[side as keyof typeof selectedShapes] !==
                shape /* Selected shape isn't the button */
            }
            key={shape}
          >
            {shapes[shape as keyof typeof shapes]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InsideCallouts;
