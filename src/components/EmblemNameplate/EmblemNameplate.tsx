import React from "react";
import { Emblem } from "types/emblem";

const EmblemNameplate = ({
  name,
  emblem,
}: {
  name: string;
  emblem: Emblem;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.bungie.net${emblem.secondaryIcon})`,
      }}
      className="w-[474px] h-[95px] pl-[85px] flex flex-col shadow-lg rounded"
    >
      <p className="text-[27px] font-emblem font-semibold tracking-[0.8px] text-white">
        {name ? name : "Guardian"}
      </p>

      <p className="text-[22px] -mt-[9px] opacity-40 font-emblem font-medium tracking-[0.8px] text-white">
        <span className="font-symbol">⓫</span> Paragon
      </p>
      <p className="text-[23px] -mt-[6px] opacity-30 font-emblem font-medium tracking-[0.8px] text-white">
        winnow.oatsfx.com
      </p>
    </div>
  );
};

export default EmblemNameplate;
