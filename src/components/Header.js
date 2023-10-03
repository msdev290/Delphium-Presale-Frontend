import Image from "next/image";
import React, { Fragment } from "react";
import Logo from "@/assets/img/logo.png";

const Header = () => {
  return (
    <div className=" fixed flex justify-between items-center flex-row w-full px-[280px] gap-24">
      <div className="flex items-center justify-center gap-2">
        <Image src={Logo} alt="delphium logo" width={52} height={39} />
        <div className="text-[24px] font-bold">Delphium</div>
      </div>
      {/* <div className="flex items-center gap-20">
        <div className="flex flex-row py-[20px] gap-10">
          <div>Home</div>
          <div>About</div>
          <div>Contact us</div>
        </div>
      </div> */}
      <div>
        <button className="px-[25px] py-[7px] bg-[#c5b939] text-[#fff] rounded-lg">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};
export default Header;
