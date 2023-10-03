import Image from "next/image";
import React from "react";
import Layer from "@/assets/img/curve-layer.png";
import Jurgentzu from "@/assets/img/Jurgentzu.svg";
import Delphium from "@/assets/img/Delphium.svg";

const Land = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center items-center h-screen px-[280px]">
        <div className="flex w-1/2">
          <div className="flex flex-col pr-[100px] gap-[50px]">
            <div className="text-[56px] font-bold">Delphium Presale</div>
            <div className="text-[24px]">
              The platform helps investors to make easy to purchase and sell
              their tokens.
            </div>
            <div>
              <a
                href="https://delphic-chess.fandom.com/wiki/The_Delphic_Lore"
                target="_blank"
                className="px-[25px] py-[7px] bg-[#c5b939] shadow-2xl shadow-[#c5b939] text-white font-bold rounded-md"
              >
                WATCH LORE
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-1/2">
          <div className="flex flex-col justify-center items-center gap-[30px] w-[500px] h-[380px] shadow-2xl shadow-[#c5b93988] bg-[#33343B] px-[50px] py-[25px] rounded-xl">
            <div className="flex absolute flex-row gap-80 top-[200px]">
              <div>
                <Image src={Delphium} alt="Delphium" width={150} height={150} />
              </div>
              <div>
                <Image
                  src={Jurgentzu}
                  alt="Jurgentzu"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="font-bold text-[18px]">TOKEN SALE ENDS IN</div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col justify-center items-center gap-2">
                <div>Days</div>
                <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                  00
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <div>Hours</div>
                <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                  00
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <div>Minutes</div>
                <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                  00
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <div>Seconds</div>
                <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                  00
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="text-[18px]">
                $180,090 pledget of $25,000 goal
              </div>
              <div>
                <progress
                  className="progress h-[12px] border-solid bg-[#535459]  border-[#dcdce765] border-[1px] progress-info w-[350px]"
                  value="40"
                  max="100"
                ></progress>
              </div>
            </div>
            <div>
              <button className="px-[25px] py-[7px] bg-[#c5b939] shadow-2xl shadow-[#c5b039] w-[350px] text-white rounded-lg">
                PURCHASE TOKENS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full bottom-2">
        <Image src={Layer} className="w-full" alt="layer" height={260} />
      </div>
    </div>
  );
};
export default Land;
