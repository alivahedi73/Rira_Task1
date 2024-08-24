import { useState } from "react";
import UsdChild from "./UsdChild";
import { FaCaretSquareUp } from "react-icons/fa";
import { FaCaretSquareDown } from "react-icons/fa";
const Usd = () => {
  let [click, setClick] = useState(false);
  return (
    <>
      {/* start of Option */}
      {/* start of main div option */}
      <div
        className={`w-[90%] h-[40px]  mx-auto rounded-[10px] ${
          click ? "bg-[#8C3061]" : "bg-[#3b3b3b]"
        } transition-all duration-300 ease-linear relative text-center leading-[60px] font-bold text-[whitesmoke] text-[25px]`}
        onClick={() => setClick(!click)}
      >
        <div className="w-[100%] h-[100%] rounded-[10px] flex justify-between px-5 items-center">
          <p className="font-[iranYek] text-[18px] truncate">
            تبدیل دلار به ریال{" "}
          </p>
          <p className="font-[iranYek] text-[25px] font-bold transition-all duration-300 ease-linear">
            {click ? <FaCaretSquareUp /> : <FaCaretSquareDown />}
          </p>
        </div>
      </div>
      {/* end of main div option */}
      {/* start of div absoulte show or hidden */}
      <div
        className={`w-[90%] mx-auto my-1 bg-[#EEEEEE] border-[2px] border-dotted border-black rounded-[10px] ${
          click ? "translate-y-0" : "translate-y-[-100%]"
        } z-50 transition-all duration-500 ease-linear ${
          click ? "opacity-100" : "opacity-0"
        } ${
          click ? "h-auto" : "h-0"
        } z-50 shadow-[0_25px_80px_-30px_rgba(100,60,10,0.7)]`}
        onClick={() => setClick(true)}
      >
        {/* start of div absoulte option */}
        <UsdChild />
        {/* end of div absoulte option */}
      </div>
      {/* end of div absoulte show or hidden */}
      {/* End of option */}
    </>
  );
};

export default Usd;
