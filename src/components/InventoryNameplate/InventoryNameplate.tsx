import React, { useState } from "react";
import { Emblem } from "types/emblem";

const InventoryNameplate = ({
  name,
  emblem,
}: {
  name: string;
  emblem: Emblem;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.bungie.net${emblem.secondarySpecial})`,
      }}
      className="w-[100%] h-full max-h-[210px] aspect-[17/1] bg-no-repeat bg-bottom bg-cover flex flex-col shadow-lg relative"
    >
      <div
        style={{
          backgroundImage: `url(https://www.bungie.net${emblem.secondaryOverlay})`,
        }}
        className="absolute top-[30%] h-[90%] w-[100%] bg-no-repeat bg-[4.3%] bg-contain"
      ></div>
      <div
        style={{
          background: `rgba(255,255,255,0.7)`,
        }}
        className="absolute ml-[10.7%] top-[31%] h-[2px] w-[10px] bg-no-repeat bg-[4.3%] bg-contain"
      ></div>
      <div className="absolute ml-[10.7%] top-[30%] flex flex-col w-2/3">
        <p
          className={
            "lg:text-[28px] md:text-[22px] max-w-[34rem] font-emblem tracking-[3px] font-extrabold text-white truncate"
          }
        >
          {name ? name : "Guardian"}
        </p>
        <div className="flex gap-3 w-1/2">
          <p
            className={
              "opacity-0 2xl:opacity-70 lg:text-[17px] -mt-[6px] font-emblem font-medium tracking-[2.5px] text-white"
            }
          >
            Season 99
          </p>
          <p
            className={
              "opacity-0 2xl:opacity-70 lg:text-[18px] -mt-[7px] font-symbol font-medium tracking-[3px] text-white"
            }
          >
            <span className="font-emblem ml-[8%]">999</span>
          </p>
          <p
            className={
              "opacity-0 2xl:opacity-70 lg:text-[18px] -mt-[7px] font-symbol font-medium tracking-[3px] text-white"
            }
          >
            <span className="font-emblem ml-[8%]">11</span>
          </p>
          <p
            className={
              "opacity-0 2xl:opacity-70 lg:text-[18px] -mt-[7px] font-symbol font-medium tracking-[3px] text-white"
            }
          >
            <span className="font-emblem">9999</span>
          </p>
          <p
            className={
              "opacity-0 2xl:opacity-70 lg:text-[18px] -mt-[7px] font-symbol font-medium tracking-[3px] text-white"
            }
          >
            <span className="font-emblem">99,999</span>
          </p>
        </div>
      </div>
      <div className="absolute 2xl:opacity-100 opacity-0 ml-[47%] top-[45%] flex gap-7">
        <p
          className={
            "text-[18px] font-emblem tracking-[1.5px] font-medium text-white opacity-70 hover:opacity-100 transition drop-shadow-[0_2px_0px_#0004]"
          }
        >
          CLAN
        </p>
        <p
          className={
            "text-[18px] font-emblem tracking-[1.5px] font-medium text-white opacity-70 hover:opacity-100 transition drop-shadow-[0_2px_0px_#0004]"
          }
        >
          COLLECTIONS
        </p>
        <p
          className={
            "text-[18px] font-emblem tracking-[1.5px] font-medium text-white opacity-70 hover:opacity-100 transition drop-shadow-[0_2px_0px_#0004]"
          }
        >
          JOURNEY
        </p>
        <p
          className={
            "text-[18px] font-emblem tracking-[1.5px] font-medium text-white opacity-70 hover:opacity-100 transition drop-shadow-[0_2px_0px_#0004]"
          }
        >
          CHARACTER
        </p>
        <p
          className={
            "text-[18px] font-emblem tracking-[1.5px] font-medium text-white opacity-70 hover:opacity-100 transition drop-shadow-[0_2px_0px_#0004]"
          }
        >
          INVENTORY
        </p>
        <p
          className={
            "text-[18px] font-symbol tracking-[1.5px] font-medium text-white opacity-70 hover:opacity-100 transition drop-shadow-[0_2px_0px_#0004]"
          }
        >
          
        </p>
      </div>
    </div>
  );
};

export default InventoryNameplate;
