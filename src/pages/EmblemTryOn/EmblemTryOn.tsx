import { EmblemNameplate } from "components/EmblemNameplate";
import { Loader } from "components/Loader";
import { useEmblems } from "hooks/useEmblems";
import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
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
  const [name, setName] = useState(
    searchParams.get("name")
      ? (searchParams.get("name" as string) as string)
      : ""
  );

  const [selectedEmblem, setSelectedEmblem] = useState<Emblem>({
    hash: 0,
    name: "",
    icon: "",
    secondaryIcon: "",
    secondaryOverlay: "",
    secondarySpecial: "",
  });

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;
    if (newName.length <= 18) {
      setName(newName);
    }
  };

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
      <p className="font-bold text-2xl font-display tracking-tighter">
        Emblem Try On
      </p>

      {emblemLoading ? (
        <Loader />
      ) : (
        <div className="flex w-full flex-col items-center gap-3">
          <p className="text-xl font-semibold">Try On Result</p>
          <input
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
            value={name}
            className="input input-bordered w-full max-w-xs"
          />
          <EmblemNameplate name={name} emblem={selectedEmblem} />
          <p className="text-lg font-medium">Trying on {selectedEmblem.name}</p>
          <input
            type="text"
            placeholder="Search an emblem"
            className="input input-bordered w-full max-w-xs"
            onChange={handleEmblemSearch}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
          {showSearch &&
          emblemData.filter(
            (x) =>
              x.name.toLowerCase().includes(emblemQuery) &&
              emblemQuery.length > 0
          ).length > 0 ? (
            <div className="absolute top-[480px] z-[50] border w-80 rounded gap-1 p-2 flex flex-col bg-base-100">
              {emblemData
                .filter(
                  (x) =>
                    replaceNonEnglish(x.name)
                      .toLowerCase()
                      .includes(emblemQuery) && emblemQuery.length > 0
                )
                .slice(0, 7)
                .map((emblem) => (
                  <p
                    className="flex align-left w-full items-center gap-2 hover:cursor-pointer"
                    onMouseDown={() => setSelectedEmblem(emblem)}
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
                <li className="pointer-events-none">
                  <p>Coming soon...</p>
                </li>
                {/* <li>
                  <a>Toggle Fireteam Lead</a>
                </li> */}
              </ul>
            </details>
          </div>
          {alert.message.length > 0 ? (
            <div role="alert" className={"alert w-2/3 " + alert.alertType}>
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
          <p className="text-lg">As formerly seen on Levante</p>
        </div>
      )}

      <div className="divider font-display" />
    </div>
  );
};

export default VerityCallouts;
