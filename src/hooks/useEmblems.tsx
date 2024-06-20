import { useEffect, useState } from "react";
import { Emblem } from "types/emblem";

export const useEmblems = () => {
  const url = "https://www.bungie.net/Platform/Destiny2/Manifest/";
  const HEADER = "https://www.bungie.net";
  const API_KEY = "34d3ba0e2ae9494daffdcd6901133748";
  const [data, setData] = useState<Emblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const newEmblems = [];
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        const invItemUrl =
          jsonData.Response.jsonWorldComponentContentPaths["en"]
            .DestinyInventoryItemDefinition;

        try {
          const response = await fetch(`${HEADER}${invItemUrl}`);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const jsonData = await response.json();
          for (let key in jsonData) {
            if (jsonData[key].itemTypeDisplayName === "Emblem") {
              const hash = jsonData[key].hash;
              let name = jsonData[key].displayProperties.name;
              const icon = jsonData[key].displayProperties.icon;
              const secIcon = jsonData[key].secondaryIcon;
              const secOverlay = jsonData[key].secondaryOverlay;
              const secSpecial = jsonData[key].secondarySpecial;

              // Special name handling
              if (hash === 1968995963) {
                name += " (Sunflower)";
              }
              if (name && icon && secIcon && secOverlay && secSpecial) {
                newEmblems.push({
                  hash: hash,
                  name: name,
                  icon: icon,
                  secondaryIcon: secIcon,
                  secondaryOverlay: secOverlay,
                  secondarySpecial: secSpecial,
                });
              }
            }
          }
        } catch (error) {
          console.log(error);
        } finally {
        }
        setData(newEmblems);
        console.log(invItemUrl);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
