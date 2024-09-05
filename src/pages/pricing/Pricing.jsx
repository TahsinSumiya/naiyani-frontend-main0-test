import { useState } from "react";

import { GiCheckMark } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";

import { LiaSlashSolid } from "react-icons/lia";
import Footer from "../../layouts/Footer";
import Navbar1 from "../../components/navbar/Navbar1";
import { useNavigate } from "react-router-dom";
const Pricing = () => {
  const [showMonthly, setShowMonthly] = useState(true);
  const [showYearly, setShowYearly] = useState(false);
const navigate = useNavigate()
  const handleMonthlyClick = () => {
    setShowMonthly(true);
    setShowYearly(false);
  };

  const handleYearlyClick = () => {
    setShowMonthly(false);
    setShowYearly(true);
  };
  const handleSubmit = () => {
    console.log('Navigating to /subscribe...');
    navigate('/subscribe');
  };
  
  
  
  return (
    <div className="lg:px-32 px-8 font-sans">
      <Navbar1 />
      <div className="headerFont gradient-text text-center lg:text-[44px] my-10 text-xl text-[#A1A1A1]">
        Plans and Pricing
      </div>

      {/* button */}
      <div className="text-center mt-8">
        <div
          style={{
            boxShadow: "1px 4px 2px rgba(26, 25, 25, 0.25)",
          }}
          className="w-[175px] rounded-[50px] mx-auto flex justify-center items-center "
        >
          <div>
            <button
              className={`border-none cursor-pointer  rounded-[30px]  text-sm py-2 px-5  ${
                showMonthly
                  ? "bg-[#963939] font-semibold text-white"
                  : "bg-white text-[#A1A1A1]"
              }`}
              onClick={handleMonthlyClick}
            >
              Monthly
            </button>
          </div>
          <div>
            <button
              className={`border-none cursor-pointer text-[#A1A1A1] rounded-[30px] e text-sm py-2 px-5 ${
                showYearly
                  ? "bg-[#A1A1A1] font-semibold text-white"
                  : "bg-white text-[#A1A1A1]"
              }`}
              onClick={handleYearlyClick}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-12 justify-center my-8">
        {/* Free div */}
        <div
          style={{
            boxShadow: "3px 3px rgba(26, 25, 25, 0.25)",
          }}
          className="lg:w-[450px] h-[420px]   rounded-[30px] bg-white px-4 flex flex-col  gap-5"
        >
          <div className=" flex flex-col text-center gap-1 mt-5">
            <div className="text-[24px] text-[#A1A1A1] tracking-[.2rem]">
              Starter
            </div>
            <div className="text-[28px] font-bold">$0/mo</div>
            <div className="text-[18px] text-[#A1A1A1]">Free forever</div>
          </div>

          <div className="text-[#A1A1A1] my-auto mx-auto lg:text-[18px] text-[12px]">
            <GiCheckMark size={12} /> Limited access to Naiyani product database
          </div>
          <div className="mt-auto mb-10">
            <button onClick={handleSubmit}
              style={{
                boxShadow: "1px 4px 2px rgba(26, 25, 25, 0.25)",
              }}
              className="rounded-2xl text-gray-600 hover:bg-gray-600 hover:text-white border-none  font-semibold lg:text-[16px] text-[12px] flex items-center justify-between py-1 cursor-pointer mx-auto "
            >
              <span className="lg:px-16 px-5">START NOW</span>{" "}
              <FaArrowAltCircleRight className="h-[16px] w-[16px]   " />
            </button>
          </div>
        </div>

        {/*monthly Premium */}
        {showMonthly && (
          <div
            style={{
              boxShadow: "3px 3px rgba(26, 25, 25, 0.25)",
            }}
            className="lg:w-[450px] h-[420px]  rounded-[30px] bg-white  flex flex-col gap-5 px-5 "
          >
            <div className=" flex flex-col text-center gap-1 mt-5">
              <div className="text-[24px] text-[#A1A1A1] tracking-[.2rem]">
                Premium
              </div>
              <div className="text-[28px] font-bold">$49/mo</div>
              <div className="text-[18px] text-[#A1A1A1]">Billed Monthly</div>
            </div>
            <div className="text-[#A1A1A1]  lg:text-[18px] text-[12px] flex flex-col  lg:text-left gap-2 my-auto mx-auto">
              <div>
                {" "}
                <GiCheckMark size={12} /> Access to Naiyani product database
              </div>
              <div>
                <GiCheckMark size={12} /> Individual product refresh feature
              </div>
              <div>
                <GiCheckMark size={12} /> Early access to upcoming new features
              </div>
              <div>
                <GiCheckMark size={12} /> Data integrated with third-party APIs
              </div>
            </div>
            <div className="mt-auto mb-10">
              <button onClick={handleSubmit}
                style={{
                  boxShadow: "1px 4px 2px rgba(26, 25, 25, 0.25)",
                }}
                className="rounded-2xl text-gray-600 hover:bg-gray-600 hover:text-white border-none  font-semibold lg:text-[16px] text-[12px] flex items-center justify-between py-1 cursor-pointer mx-auto "
              >
                <span className="lg:px-5 px-2">START A 7-DAY FREE TRIAL</span>{" "}
                <FaArrowAltCircleRight className="h-[15px] w-[15px]   " />
              </button>
            </div>
          </div>
        )}
        {showYearly && (
          <div
            style={{
              boxShadow: "3px 3px rgba(26, 25, 25, 0.25)",
            }}
            className="lg:w-[450px] h-[420px]  rounded-[30px] bg-white  flex flex-col gap-5 px-5"
          >
            <div className=" flex flex-col text-center gap-1 mt-5 ">
              <div className="text-[24px] text-[#A1A1A1] tracking-[.2rem]">
                Premium
              </div>
              <div className="font-bold relative">
                <span>
                  <LiaSlashSolid
                    className="text-red-500 absolute top-[10px] ml-[6px]  "
                    size={28}
                  />
                </span>{" "}
                <span className="text-[18px]">$49</span>{" "}
                <span className="text-[28px]">$39/mo</span>
              </div>
              <div className="text-[18px] text-[#A1A1A1]">Billed Annually</div>
              <div className="text-[12px] text-[#A1A1A1]">You save $119 </div>
            </div>
            <div className="text-[#A1A1A1]  lg:text-[18px] text-[12px] flex flex-col  lg:text-left gap-2 my-auto mx-auto">
              <div>
                {" "}
                <GiCheckMark size={12} /> Access to Naiyani product database
              </div>
              <div>
                <GiCheckMark size={12} /> Individual product refresh feature
              </div>
              <div>
                <GiCheckMark size={12} /> Early access to upcoming new features
              </div>
              <div>
                <GiCheckMark size={12} /> Data integrated with third-party APIs
              </div>
            </div>
            <div className="mt-auto mb-10">
              <button onClick={handleSubmit}
                style={{
                  boxShadow: "1px 4px 2px rgba(26, 25, 25, 0.25)",
                }}
                className="rounded-2xl text-gray-600 hover:bg-gray-600 hover:text-white border-none  font-semibold lg:text-[16px] text-[12px] flex items-center justify-between py-1 cursor-pointer mx-auto "
              >
                <span className="lg:px-5 px-2">START A 7-DAY FREE TRIAL</span>{" "}
                <FaArrowAltCircleRight className="h-[15px] w-[15px]   " />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
