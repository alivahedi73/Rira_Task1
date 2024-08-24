import "../App/App.css";
import Usd from "../Usd/Usd";
import Rial from "../Rial/Rial";
import { numberFormat } from "../Utils/Help";
const App = () => {
  return (
    <>
      {/* start project */}
      {/* start main Picture */}
      <div className="w-[100%] h-[100vh] relative main">
        {/* start main div */}
        <div className="mx-auto w-[100%] desktop:w-[50%] h-[95%] bg-[#ffffff81] translate-y-[2.5%] rounded-[20px] laptop:w-[70%] tablet:w-[90%] p-[20px]">
          {/* start of element */}
          <div className="w-[100%] h-[100%] relative overflow-y-auto">
            {/* start of Title */}
            <h1 className="text-center font-[iranYek] tablet:text-[25px] font-bold text-[whitesmoke] w-[90%] bg-[#2b2b2b] mx-auto rounded-[10px] truncate text-[18px] p-2">
              تبدیل دلار به ریال و بالعکس
            </h1>
            {/* End of Title */}
            {/* Start of option */}
            <h4 className="mr-8 font-[iranYek] font-extrabold tablet:text-[20px] text-[#3b3b3b] my-1 truncate text-[18px]">
              لطفا یکی از گزینه‌های زیر را انتخاب کنید :
            </h4>
            {/* start of convert USD to Rial */}
            <Usd />
            {/* End of convert USD to Rial */}
            {/* start of convert Rial to USD */}
            <Rial />
            {/* End of convert Rial to USD */}
            {/* End of option */}
            {/* start of subtitle in show information */}
            {/* css animation in use subtitle */}
            <div className=" absolute bottom-3 left-0 w-[100%] h-[50px] bg-[black] rounded-[10px] font-[iranYek] text-[18px] font-extrabold leading-[50px] text-center text-[whitesmoke] overflow-hidden">
              <p className="subtitle">
                {" "}
                نرخ به روز دلار {numberFormat(600000)} ریال می‌باشد .
              </p>
            </div>
            {/* End of subtitle in show information */}
          </div>
          {/* End of element */}
        </div>
        {/* End of main div */}
      </div>
      {/* End of main picture */}
      {/* End of project */}
    </>
  );
};

export default App;
