import { useState } from "react";
import { numberFormat } from "../Utils/Help";
import { TbCurrencyIranianRial } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { LuCircleEqual } from "react-icons/lu";
const RialChild = () => {
  let [usd, setUsd] = useState(false);
  let [convert, setConvert] = useState(0);
  const changeData = (e) => {
    setConvert(Number(e.target.value));
  };
  return (
    <>
      {/* start of div absoulte option */}
      {/* start of input */}
      <div className="w-[100%] h-auto flex justify-center items-center my-[10px] gap-x-2">
        <p className="font-bold font-[Roboto] text-[30px]">
          <TbCurrencyIranianRial />
        </p>
        <input
          type="number"
          name="USD"
          id="USD"
          min="0"
          className="block w-[50%] h-[35px] rounded-[10px] font-[iranYek] text-[15px] p-[10px] font-extrabold"
          placeholder="لطفا نرخ ریال مورد نظر را وارد کنید"
          onChange={changeData}
          style={{ direction: "ltr" }}
        />
      </div>
      {/* end of input */}
      {/* start of button show or hidden */}
      <div className="w-[100%] h-auto">
        <div
          className="w-[50%] h-[30px] mx-auto capitalize bg-[#8C3061] font-[iranYek] font-bold text-[15px] text-[whitesmoke] rounded-[10px] flex justify-center items-center hover:bg-slate-600 hover:scale-105 active:bg-orange-700 transition-all duration-300 mb-1"
          onClick={() => setUsd(!usd)}
        >
          {usd ? "پنهان" : "نمایش"}
        </div>
      </div>
      {/* end of button show or hidden */}
      {/* start of show result */}
      <h1
        className={`${
          usd ? "block" : "hidden"
        } font-sans text-[18px] text-[#2b2b2b] font-bold text-center my-1 flex flex-nowrap justify-center items-center gap-1`}
      >
        <p className="text-[20px]">
          <AiOutlineDollar />
        </p>
        <p className="truncate">{convert / 600000}</p>
        <p className="mx-3 text-[20px]">
          <LuCircleEqual />
        </p>
        <p className="text-[20px]">
          <TbCurrencyIranianRial />
        </p>
        <p>{numberFormat(convert)}</p>
      </h1>
      {/* end of show result */}
      {/* start of div absoulte option */}
    </>
  );
};

export default RialChild;
