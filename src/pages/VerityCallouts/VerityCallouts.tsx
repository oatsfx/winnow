import { InsideCallouts } from "components/InsideCallouts";
import { OutsideCallouts } from "components/OutsideCallouts";
import { useEffect, useState } from "react";
import { Alert } from "types/util";
import {
  Dissection,
  InsideShape,
  InsideShapeCalls,
  OutsideShape,
  OutsideShapeCalls,
  VerityResult,
  VeritySide,
} from "types/verity";
import {
  createCommaSeparatedString,
  insideShapeToNeededShapes,
  shape2dTo3d,
  shape3dTo2d,
} from "util/formatters";
import { Cone } from "components/Shapes/Cone";
import { Cube } from "components/Shapes/Cube";
import { Cylinder } from "components/Shapes/Cylinder";
import { Prism } from "components/Shapes/Prism";
import { Pyramid } from "components/Shapes/Pyramid";
import { Sphere } from "components/Shapes/Sphere";
import { Circle } from "components/Shapes/Circle";
import { Square } from "components/Shapes/Square";
import { Triangle } from "components/Shapes/Triangle";

const outsideShapeElements: { [key in OutsideShape]: JSX.Element } = {
  cone: <Cone />,
  cylinder: <Cylinder />,
  prism: <Prism />,
  cube: <Cube />,
  pyramid: <Pyramid />,
  sphere: <Sphere />,
};

const insideShapeElements: { [key in InsideShape]: JSX.Element } = {
  circle: <Circle />,
  square: <Square />,
  triangle: <Triangle />,
};

const VerityCallouts: React.FC = () => {
  const [alert, setAlert] = useState<Alert>({
    alertType: "alert",
    message: "",
  });

  const [insideShapes, setInsideShapes] = useState<InsideShapeCalls>({
    left: null,
    middle: null,
    right: null,
  });
  const [outsideShapes, setOutsideShapes] = useState<OutsideShapeCalls>({
    left: null,
    middle: null,
    right: null,
  });

  const [dissections, setDissections] = useState<Dissection[]>([]);

  const [outsideResult, setOutsideResult] = useState<OutsideShapeCalls>({
    left: null,
    middle: null,
    right: null,
  });

  const [checks, setChecks] = useState<OutsideShapeCalls[]>();

  const handleInsideShapeChange = (side: VeritySide, shape: InsideShape) => {
    const newShapes = { ...insideShapes };
    switch (side) {
      case "left": {
        if (newShapes.left === shape) newShapes.left = null;
        else newShapes.left = shape;

        break;
      }
      case "middle": {
        if (newShapes.middle === shape) newShapes.middle = null;
        else newShapes.middle = shape;
        break;
      }
      case "right": {
        if (newShapes.right === shape) newShapes.right = null;
        else newShapes.right = shape;
        break;
      }
    }
    console.log(Object.values(newShapes));
    setInsideShapes(newShapes);
  };

  const handleOutsideShapeChange = (side: VeritySide, shape: OutsideShape) => {
    const newShapes = { ...outsideShapes };
    switch (side) {
      case "left": {
        if (newShapes.left === shape) newShapes.left = null;
        else newShapes.left = shape;

        break;
      }
      case "middle": {
        if (newShapes.middle === shape) newShapes.middle = null;
        else newShapes.middle = shape;
        break;
      }
      case "right": {
        if (newShapes.right === shape) newShapes.right = null;
        else newShapes.right = shape;
        break;
      }
    }
    console.log(Object.values(newShapes));
    setOutsideShapes(newShapes);
  };

  const findDissections = () => {
    setAlert({
      alertType: "alert",
      message: "",
    });
    const inputsMissing = [];

    if (insideShapes.left === null) {
      inputsMissing.push("Inside Left");
    }

    if (insideShapes.middle === null) {
      inputsMissing.push("Inside Middle");
    }

    if (insideShapes.right === null) {
      inputsMissing.push("Inside Right");
    }

    if (outsideShapes.left === null) {
      inputsMissing.push("Outside Left");
    }

    if (outsideShapes.middle === null) {
      inputsMissing.push("Outside Middle");
    }

    if (outsideShapes.right === null) {
      inputsMissing.push("Outside Right");
    }

    if (inputsMissing.length > 0) {
      setAlert({
        alertType: "alert-error",
        message: `Missing Inputs: ${createCommaSeparatedString(inputsMissing)}`,
      });
      console.log(inputsMissing);

      return;
    }

    const currentShapes: VerityResult = {
      left: [...shape3dTo2d[outsideShapes.left as OutsideShape]],
      middle: [...shape3dTo2d[outsideShapes.middle as OutsideShape]],
      right: [...shape3dTo2d[outsideShapes.right as OutsideShape]],
    };

    const neededShapes: VerityResult = {
      left: insideShapeToNeededShapes[insideShapes.left as InsideShape],
      middle: insideShapeToNeededShapes[insideShapes.middle as InsideShape],
      right: insideShapeToNeededShapes[insideShapes.right as InsideShape],
    };

    const neededDissections: VerityResult = {
      left: [],
      middle: [],
      right: [],
    };

    const removedDissections: VerityResult = {
      left: [],
      middle: [],
      right: [],
    };

    const newChecks = [];

    neededDissections.left.push(
      ...neededShapes.left.filter(
        (shape) => !currentShapes.left.includes(shape)
      )
    );

    removedDissections.left.push(
      ...currentShapes.left.filter(
        (shape) => !neededShapes.left.includes(shape)
      )
    );

    neededDissections.middle.push(
      ...neededShapes.middle.filter(
        (shape) => !currentShapes.middle.includes(shape)
      )
    );

    removedDissections.middle.push(
      ...currentShapes.middle.filter(
        (shape) => !neededShapes.middle.includes(shape)
      )
    );

    neededDissections.right.push(
      ...neededShapes.right.filter(
        (shape) => !currentShapes.right.includes(shape)
      )
    );

    removedDissections.right.push(
      ...currentShapes.right.filter(
        (shape) => !neededShapes.right.includes(shape)
      )
    );

    console.log(currentShapes);
    console.log(neededShapes);
    console.log(removedDissections);
    console.log(neededDissections);

    const newDissections: Dissection[] = [];

    for (let index in removedDissections.left) {
      const shape = removedDissections.left[index];
      // find the spot that needs the shape
      if (
        neededDissections.middle.includes(shape) &&
        !currentShapes.middle.includes(shape)
      ) {
        console.log(
          `${shape} left and ${
            currentShapes.middle[
              currentShapes.middle.indexOf(currentShapes.middle[0])
            ]
          } middle`
        );
        newDissections.push({ side: "left", shape: shape });
        newDissections.push({
          side: "middle",
          shape:
            currentShapes.middle[
              currentShapes.middle.indexOf(currentShapes.middle[0])
            ],
        });
        currentShapes.left[currentShapes.left.indexOf(shape)] =
          currentShapes.middle[
            currentShapes.middle.indexOf(currentShapes.middle[0])
          ];

        currentShapes.middle[
          currentShapes.middle.indexOf(currentShapes.middle[0])
        ] = shape;
        newChecks.push({
          left: shape2dTo3d(currentShapes.left),
          middle: shape2dTo3d(currentShapes.middle),
          right: shape2dTo3d(currentShapes.right),
        });
      } else if (
        neededDissections.right.includes(shape) &&
        !currentShapes.right.includes(shape)
      ) {
        console.log(
          `${shape} left and ${
            currentShapes.right[
              currentShapes.right.indexOf(currentShapes.right[0])
            ]
          } right`
        );
        newDissections.push({ side: "left", shape: shape });
        newDissections.push({
          side: "right",
          shape:
            currentShapes.right[
              currentShapes.right.indexOf(currentShapes.right[0])
            ],
        });
        currentShapes.left[currentShapes.left.indexOf(shape)] =
          currentShapes.right[
            currentShapes.right.indexOf(currentShapes.right[0])
          ];

        currentShapes.right[
          currentShapes.right.indexOf(currentShapes.right[0])
        ] = shape;
        newChecks.push({
          left: shape2dTo3d(currentShapes.left),
          middle: shape2dTo3d(currentShapes.middle),
          right: shape2dTo3d(currentShapes.right),
        });
      }
    }

    for (let index in removedDissections.middle) {
      const shape = removedDissections.middle[index];
      // find the spot that needs the shape
      if (
        neededDissections.left.includes(shape) &&
        !currentShapes.left.includes(shape)
      ) {
        console.log(
          `${shape} middle and ${
            currentShapes.left[
              currentShapes.left.indexOf(currentShapes.left[0])
            ]
          } left`
        );
        newDissections.push({ side: "middle", shape: shape });
        newDissections.push({
          side: "left",
          shape:
            currentShapes.left[
              currentShapes.left.indexOf(currentShapes.left[0])
            ],
        });
        currentShapes.middle[currentShapes.middle.indexOf(shape)] =
          currentShapes.left[currentShapes.left.indexOf(currentShapes.left[0])];

        currentShapes.left[currentShapes.left.indexOf(currentShapes.left[0])] =
          shape;
        newChecks.push({
          left: shape2dTo3d(currentShapes.left),
          middle: shape2dTo3d(currentShapes.middle),
          right: shape2dTo3d(currentShapes.right),
        });
      } else if (
        neededDissections.right.includes(shape) &&
        !currentShapes.right.includes(shape)
      ) {
        console.log(
          `${shape} middle and ${
            currentShapes.right[
              currentShapes.right.indexOf(currentShapes.right[0])
            ]
          } right`
        );
        newDissections.push({ side: "middle", shape: shape });
        newDissections.push({
          side: "right",
          shape:
            currentShapes.right[
              currentShapes.right.indexOf(currentShapes.right[0])
            ],
        });
        currentShapes.middle[currentShapes.middle.indexOf(shape)] =
          currentShapes.right[
            currentShapes.right.indexOf(currentShapes.right[0])
          ];

        currentShapes.right[
          currentShapes.right.indexOf(currentShapes.right[0])
        ] = shape;
        newChecks.push({
          left: shape2dTo3d(currentShapes.left),
          middle: shape2dTo3d(currentShapes.middle),
          right: shape2dTo3d(currentShapes.right),
        });
      }
    }

    for (let index in removedDissections.right) {
      const shape = removedDissections.right[index];
      // find the spot that needs the shape
      if (
        neededDissections.left.includes(shape) &&
        !currentShapes.left.includes(shape)
      ) {
        console.log(
          `${shape} right and ${
            currentShapes.left[
              currentShapes.left.indexOf(currentShapes.left[0])
            ]
          } left`
        );
        newDissections.push({ side: "right", shape: shape });
        newDissections.push({
          side: "left",
          shape:
            currentShapes.left[
              currentShapes.left.indexOf(currentShapes.left[0])
            ],
        });
        currentShapes.right[currentShapes.right.indexOf(shape)] =
          currentShapes.left[currentShapes.left.indexOf(currentShapes.left[0])];

        currentShapes.left[currentShapes.left.indexOf(currentShapes.left[0])] =
          shape;
        newChecks.push({
          left: shape2dTo3d(currentShapes.left),
          middle: shape2dTo3d(currentShapes.middle),
          right: shape2dTo3d(currentShapes.right),
        });
      } else if (
        neededDissections.middle.includes(shape) &&
        !currentShapes.middle.includes(shape)
      ) {
        console.log(
          `${shape} right and ${
            currentShapes.middle[
              currentShapes.middle.indexOf(currentShapes.middle[0])
            ]
          } middle`
        );
        newDissections.push({ side: "right", shape: shape });
        newDissections.push({
          side: "middle",
          shape:
            currentShapes.middle[
              currentShapes.middle.indexOf(currentShapes.middle[0])
            ],
        });
        currentShapes.right[currentShapes.right.indexOf(shape)] =
          currentShapes.middle[
            currentShapes.middle.indexOf(currentShapes.middle[0])
          ];

        currentShapes.middle[
          currentShapes.middle.indexOf(currentShapes.middle[0])
        ] = shape;
        newChecks.push({
          left: shape2dTo3d(currentShapes.left),
          middle: shape2dTo3d(currentShapes.middle),
          right: shape2dTo3d(currentShapes.right),
        });
      }
    }

    setOutsideResult({
      left: shape2dTo3d(neededShapes.left),
      middle: shape2dTo3d(neededShapes.middle),
      right: shape2dTo3d(neededShapes.right),
    });
    console.log(newChecks);
    setChecks(newChecks);

    setDissections(newDissections);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <p className="font-bold text-2xl font-display tracking-tighter">
        Verity Callouts
      </p>
      <p className="text-xl font-semibold">Inside / Solo</p>

      <div className="flex">
        <div className="flex flex-col items-center">
          <p className="">Left</p>
          <InsideCallouts
            side={"left"}
            selectedShapes={insideShapes}
            handleInsideShapeChange={handleInsideShapeChange}
          />
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex flex-col items-center">
          <p className="">Middle</p>
          <InsideCallouts
            side={"middle"}
            selectedShapes={insideShapes}
            handleInsideShapeChange={handleInsideShapeChange}
          />
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex flex-col items-center">
          <p className="">Right</p>
          <InsideCallouts
            side={"right"}
            selectedShapes={insideShapes}
            handleInsideShapeChange={handleInsideShapeChange}
          />
        </div>
      </div>
      <p className="text-xl font-semibold">Outside / Team</p>
      <div className="flex">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <OutsideCallouts
              side={"left"}
              selectedShapes={outsideShapes}
              handleOutsideShapeChange={handleOutsideShapeChange}
            />
          </div>
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <OutsideCallouts
              side={"middle"}
              selectedShapes={outsideShapes}
              handleOutsideShapeChange={handleOutsideShapeChange}
            />
          </div>
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <OutsideCallouts
              side={"right"}
              selectedShapes={outsideShapes}
              handleOutsideShapeChange={handleOutsideShapeChange}
            />
          </div>
        </div>
      </div>
      {alert.message.length > 0 ? (
        <div role="alert" className={"alert w-2/3 " + alert.alertType}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{alert.message}</span>
        </div>
      ) : (
        <></>
      )}
      <div className="flex gap-4 p-2">
        <button
          className={"btn btn-success"}
          onClick={() => {
            findDissections();
          }}
        >
          Find Dissections
        </button>
        <button
          className={"btn btn-outline btn-error"}
          onClick={() => {
            setInsideShapes({ left: null, middle: null, right: null });
            setOutsideShapes({ left: null, middle: null, right: null });
            setAlert({
              alertType: "alert",
              message: "",
            });
            setOutsideResult({ left: null, middle: null, right: null });
          }}
        >
          Reset
        </button>
      </div>
      <p className="text-xl font-semibold">Dissections</p>
      <div className="flex flex-col items-center w-full">
        {dissections.length ? (
          <p className="text-lg pb-4">Here's what you should do:</p>
        ) : (
          <p>Set your shapes and click "Find Dissections"!</p>
        )}
        {checks?.map((check, index) => (
          <div className="flex flex-col items-center gap-1 w-1/2">
            <p className="font-semibold">Dissect:</p>
            <div className="flex gap-4">
              {dissections.slice(index * 2, (index + 1) * 2).map((d) => (
                <p className="flex flex-col items-center text-lg">
                  {d.side.toLocaleUpperCase()}
                  {insideShapeElements[d.shape]}
                </p>
              ))}
            </div>
            <p className="font-medium pt-2">Double check your work:</p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <p className="">LEFT</p>
                {outsideShapeElements[check.left as OutsideShape]}
              </div>
              <div className="divider divider-horizontal" />
              <div className="flex flex-col items-center">
                <p className="">MIDDLE</p>
                {outsideShapeElements[check.middle as OutsideShape]}
              </div>
              <div className="divider divider-horizontal" />
              <div className="flex flex-col items-center">
                <p className="">RIGHT</p>
                {outsideShapeElements[check.right as OutsideShape]}
              </div>
            </div>
            <div className="divider" />
          </div>
        ))}
      </div>

      <div className="divider font-display" />
    </div>
  );
};

export default VerityCallouts;
