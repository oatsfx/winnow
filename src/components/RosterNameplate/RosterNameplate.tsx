import React, { useState } from "react";
import { Emblem } from "types/emblem";

const RosterNameplate = ({
  name,
  emblem,
  isLead,
}: {
  name: string;
  emblem: Emblem;
  isLead: boolean;
}) => {
  return (
    <div
      style={{
        background: `rgba(${emblem.backgroundColor.r}, ${emblem.backgroundColor.g}, ${emblem.backgroundColor.b})`,
      }}
      className="w-[474px] h-[45px] flex flex-col shadow-lg relative tooltip tooltip-accent"
      data-tip="The color is likely different from in-game. This is a limitation of Bungie's API reporting incorrect background colors."
    >
      {isLead ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2044.21 2044.21"
          className="absolute w-4 fill-[#ccd32b] mt-[1px]"
          fill="currentColor"
        >
          <polygon points="0 0 0 2044.21 2044.21 0 0 0" />
        </svg>
      ) : (
        <></>
      )}
      <div className="flex items-center gap-[0.4rem]">
        <img
          src={`https://www.bungie.net${emblem.icon}`}
          className="h-[45px] mr-[4px]"
        ></img>
        <p className="text-[22px] opacity-50 font-symbol font-medium tracking-[0.8px] text-white">
          
        </p>
        <p
          className={
            "text-[23px] -mt-[2px] max-w-[18rem] font-emblem tracking-[0.2px] font-medium text-white placeholder-white drop-shadow-[0_2px_0px_#0003] truncate"
          }
        >
          {name ? name : "Guardian"}
        </p>

        <p className="text-[22px] opacity-40 font-emblem font-medium tracking-[0.8px] text-white drop-shadow-[0_2px_0px_#0003]">
          [WNW]
        </p>
      </div>
    </div>
  );
};

export default RosterNameplate;
