import { EmblemNameplate } from "components/EmblemNameplate";
import { InventoryNameplate } from "components/InventoryNameplate";
import { Loader } from "components/Loader";
import { RosterNameplate } from "components/RosterNameplate";
import { useEmblems } from "hooks/useEmblems";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Emblem } from "types/emblem";
import { Alert } from "types/util";
import { replaceNonEnglish } from "util/formatters";

const VerityCallouts: React.FC = () => {
  const [alert, setAlert] = useState<Alert>({
    alertType: "alert",
    message: "",
  });
  const [searchParams] = useSearchParams();

  const { data: emblemData, loading: emblemLoading } = useEmblems();
  const [emblemQuery, setEmblemQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isLead, setIsLead] = useState(false);
  const [name, setName] = useState(
    searchParams.get("name")
      ? (searchParams.get("name" as string) as string)
      : ""
  );
  const [outlineEmblem, setOutlineEmblem] = useState(false);

  const [selectedEmblem, setSelectedEmblem] = useState<Emblem>({
    hash: 0,
    name: "",
    icon: "",
    secondaryIcon: "",
    secondaryOverlay: "",
    secondarySpecial: "",
    backgroundColor: { r: 0, g: 0, b: 0 },
  });

  const handleEmblemSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setEmblemQuery(e.currentTarget.value);
  };

  useMemo(() => {
    if (!emblemLoading) {
      if (searchParams.get("emblem")) {
        if (
          emblemData.some((x) => x.hash === Number(searchParams.get("emblem")))
        ) {
          const index = emblemData.findIndex(
            (x) => x.hash === Number(searchParams.get("emblem"))
          );
          setSelectedEmblem(emblemData[index]);
        }
      } else {
        setSelectedEmblem(
          emblemData[Math.floor(Math.random() * emblemData.length)]
        );
      }
    }
  }, [emblemData]);

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <p className="font-bold text-3xl font-display tracking-tighter text-accent">
        Emblem Try On
      </p>
      <p
        className="pb-4"
        onMouseEnter={() => {
          setOutlineEmblem(true);
        }}
        onMouseLeave={() => {
          setOutlineEmblem(false);
        }}
      >
        Click on the emblem to the right to change the name!
      </p>

      {emblemLoading ? (
        <Loader />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <div className="lg:flex-row flex-col flex items-center gap-3">
            <RosterNameplate
              name={name}
              emblem={selectedEmblem}
              isLead={isLead}
            />
            <EmblemNameplate
              name={name}
              setName={setName}
              emblem={selectedEmblem}
              isLead={isLead}
              isOutlined={outlineEmblem}
            />
          </div>
          <InventoryNameplate name={name} emblem={selectedEmblem} />

          <p className="text-lg pt-4">
            Trying on{" "}
            <span className="text-primary font-semibold">
              {selectedEmblem.name}
            </span>
          </p>
          <div className="flex w-1/3 gap-2 justify-center">
            <input
              type="text"
              placeholder="Search an emblem"
              className="input input-bordered w-full max-w-xs"
              id="emblem-search"
              onChange={handleEmblemSearch}
              onFocus={() => setShowSearch(true)}
              onBlur={() => setShowSearch(false)}
            />
            <button
              className={"btn tooltip tooltip-accent font-normal"}
              onClick={() =>
                setSelectedEmblem(
                  emblemData[Math.floor(Math.random() * emblemData.length)]
                )
              }
              data-tip="Randomize Emblem"
            >
              <svg
                viewBox="650 650 2000 2000"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6"
              >
                <path d="M2192.43,1144.2c0-44.99.44-87.99-.15-130.97-.39-28.68,10.62-50.5,35.76-64.27,25.55-14,50.11-10,73.05,6.59,114.83,83.05,229.81,165.88,344.25,249.47,44,32.14,43.94,83.74.15,115.66-113.92,83.05-228.35,165.41-342.47,248.18-23.61,17.13-48.51,22.37-74.89,7.97-25.97-14.17-36.5-36.99-35.91-66.48.84-42.12.21-84.27.21-127.82-162.15,8.92-302.71,64.57-415.99,177.33-119.43,118.87-234.5,242.17-349.98,364.94-138,146.7-305.52,237.56-503.97,270.15-43.71,7.18-88.58,9.35-132.97,9.98-63.4.89-115.24-51.45-116.47-113.72-1.32-66.61,46.58-120.16,112.52-121.68,138.93-3.21,267.73-39.05,377.19-125.79,57.83-45.83,108.52-101.01,160.27-154.07,94.34-96.75,185.63-196.51,280.82-292.4,139.71-140.74,310.45-220.23,506.39-246.43,26.33-3.52,53.02-4.34,82.19-6.61Z" />
                <path d="M1582.1,1930.95c54.99-57.14,109.37-113.65,164.8-171.24,57.84,64.26,124.36,114.12,201.02,150.14,76.62,36.01,157.09,55.86,244.5,57.94,0-41.72.86-82.38-.28-122.98-.87-30.84,8.08-55.68,36.07-70.87,29.46-15.99,55.17-6.48,80.37,11.88,111.51,81.25,223.5,161.85,335.16,242.9,45.79,33.24,46.05,82.53.33,115.81-112.75,82.07-225.93,163.54-338.61,245.71-24.36,17.76-49.77,23.63-76.92,9.74-27.29-13.96-37.08-38.12-36.37-68.35.99-41.5.25-83.05.25-127.62-239.7-9.17-443.12-98.7-610.32-273.06Z" />
                <path d="M1423.05,1419.77c-55.7,57.89-109.66,113.96-164.4,170.84-24.43-22.49-47.28-45.71-72.34-66.24-110.49-90.54-237.88-136.5-380.33-141.88-14.76-.56-29.95-.65-44.1-4.24-56.71-14.4-93.4-67.35-86.78-123.27,7.56-63.92,55.12-109.93,116.69-109.28,247.59,2.61,456.47,95.19,631.25,274.07Z" />
              </svg>
            </button>
          </div>
          {showSearch &&
          emblemData.filter(
            (x) =>
              (replaceNonEnglish(x.name).toLowerCase().includes(emblemQuery) ||
                x.name.toLowerCase().includes(emblemQuery)) &&
              emblemQuery.length > 0
          ).length > 0 ? (
            <div
              className="absolute z-[50] border rounded gap-1 p-2 flex flex-col bg-base-100"
              style={{
                top:
                  (
                    document.getElementById("emblem-search") as HTMLElement
                  ).getBoundingClientRect().y + 50,
                left: (
                  document.getElementById("emblem-search") as HTMLElement
                ).getBoundingClientRect().x,
                width: (
                  document.getElementById("emblem-search") as HTMLElement
                ).getBoundingClientRect().width,
              }}
            >
              {emblemData
                .filter(
                  (x) =>
                    (replaceNonEnglish(x.name)
                      .toLowerCase()
                      .includes(emblemQuery) ||
                      x.name.toLowerCase().includes(emblemQuery)) &&
                    emblemQuery.length > 0
                )
                .slice(0, 7)
                .map((emblem) => (
                  <p
                    className="flex align-left w-full items-center gap-2 hover:cursor-pointer"
                    onMouseDown={() => setSelectedEmblem(emblem)}
                    key={emblem.hash}
                  >
                    <img
                      className="w-8 rounded"
                      src={"https://www.bungie.net" + emblem.icon}
                    />
                    {emblem.name}
                  </p>
                ))}
            </div>
          ) : (
            <></>
          )}
          <div className="flex gap-4">
            <button
              className={"btn btn-success"}
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.location.href}?emblem=${selectedEmblem.hash}${
                    name ? `&name=${name}` : ""
                  }`
                );
                setAlert({
                  alertType: "alert-info",
                  message: `Copied link to clipboard! ${
                    name ? name : "Guardian"
                  } trying on ${selectedEmblem.name}.`,
                });
              }}
            >
              Share
            </button>
            <details className="dropdown dropdown-center">
              <summary className="btn w-24">Tools</summary>
              <ul className="p-2 shadow-xl menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a onClick={() => setIsLead((old) => !old)}>
                    Toggle Fireteam Lead
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://destinyemblemcollector.com/emblem?id=" +
                      selectedEmblem.hash
                    }
                    target="_blank"
                  >
                    View on DEC
                  </a>
                </li>
                <li>
                  <a
                    href={"https://emblem.report/" + selectedEmblem.hash}
                    target="_blank"
                  >
                    View on emblem.report
                  </a>
                </li>

                <li className="pointer-events-none">
                  <p className="text-neutral">More coming soon...</p>
                </li>
              </ul>
            </details>
          </div>
          {alert.message.length > 0 ? (
            <div
              role="alert"
              className={"alert w-2/3 " + alert.alertType}
              onClick={() => {
                setAlert({
                  alertType: "alert",
                  message: "",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{alert.message}</span>
            </div>
          ) : (
            <></>
          )}
          <p className="font-light">
            As formerly seen on{" "}
            <a className="underline" href="https://levante.dev" target="_blank">
              Levante
            </a>
          </p>
          <p className="font-light italic">This is not a perfect replica</p>
        </div>
      )}

      <div className="divider font-display" />
    </div>
  );
};

export default VerityCallouts;
