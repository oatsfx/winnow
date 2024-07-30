import React, { useState } from "react";
import { Emblem } from "types/emblem";

const EmblemNameplate = ({
  name,
  setName,
  emblem,
  isLead,
  isOutlined,
}: {
  name: string;
  setName: (name: string) => void;
  emblem: Emblem;
  isLead: boolean;
  isOutlined: boolean;
}) => {
  const [overflowedBy, setOverflowedBy] = useState(0.0);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;

    if (newName.length <= 26) {
      setName(newName);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://www.bungie.net${emblem.secondaryIcon})`,
      }}
      className={
        "w-[474px] h-[95px] pl-[85px] flex flex-col shadow-lg rounded-sm relative tooltip tooltip-accent text-left" +
        (isOutlined ? " outline outline-1 outline-offset-2 outline-white" : "")
      }
      data-tip="Click the name here to change it"
    >
      {isLead ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2044.21 2044.21"
          className="absolute w-5 fill-[#ccd32b] -ml-[84px] mt-[1px]"
          fill="currentColor"
        >
          <polygon points="0 0 0 2044.21 2044.21 0 0 0" />
        </svg>
      ) : (
        <></>
      )}
      <p className="absolute font-emblem text-[#d5c154] right-[8px] -top-[6px] text-[36px]">
        <span className="relative font-symbol text-[26px] -top-[5px]"></span>
        <span className="font-semibold drop-shadow-[0_2px_0px_#0003] tracking-[1.4px]">
          9999
        </span>
      </p>
      <input
        type="text"
        placeholder="Click here to change"
        value={name}
        onChange={handleNameChange}
        onBlur={(e) => {
          if (e.currentTarget.scrollWidth !== e.currentTarget.clientWidth) {
            const overflowCalc =
              e.currentTarget.scrollWidth / (e.currentTarget.clientWidth - 45);
            setOverflowedBy(overflowCalc);
          }
        }}
        onFocus={(e) => {
          setOverflowedBy(0);
        }}
        className={
          "-ml-[16.5px] -m-[3.5px] input hover:input-bordered hover:border-white transition max-w-[19.5rem] bg-transparent outline-transparent " +
          "font-emblem tracking-[0.8px] font-semibold text-white placeholder-white drop-shadow-[0_2px_0px_#0003]"
        }
        style={{ fontSize: overflowedBy > 0.0 ? 27.0 / overflowedBy : 27 }}
      />

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
