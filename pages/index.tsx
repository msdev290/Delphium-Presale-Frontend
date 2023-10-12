import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "./assets/img/logo.png";
import Delphium from "./assets/img/Delphium.svg";
import Jurgentzu from "./assets/img/Jurgentzu.svg";
import Layer from "./assets/img/curve-layer.png";
import { useContractReads, useContractWrite } from "wagmi";
import Presaleabi from "../utils/abi/presaleABI";
import { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { GiEvilBook, GiGamepad } from "react-icons/gi";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import Link from "next/link";
import { parseEther } from "viem";
import { getAccount } from "@wagmi/core";

const Home: NextPage = () => {
  const [walletState, setWalletState] = useState(false);
  const [isConnect, setIsConnect] = useState(false);
  const [payableAmount, setPayableAmount] = useState("0");
  const [userBalance, setUserBalance] = useState(0);
  const [getPhium, setGetPhium] = useState(0);
  const currentDate = new Date();
  const timeStamp = Math.floor(currentDate.getTime() / 1000);
  const [endTime, setEndTime] = useState(1705330800);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const account = getAccount();

  // const { data: InitializeData } = useContractReads({
  //   contracts: [
  //     {
  //       address: "0x5B54E62805FC3E502220a8D0F6dC40592AB4C7cD",
  //       abi: Presaleabi,
  //       functionName: "startTimestamp",
  //       chainId: 5,
  //     },
  //     {
  //       address: "0x5B54E62805FC3E502220a8D0F6dC40592AB4C7cD",
  //       abi: Presaleabi,
  //       functionName: "endTimestamp",
  //       chainId: 5,
  //     },
  //     {
  //       address: "0x5B54E62805FC3E502220a8D0F6dC40592AB4C7cD",
  //       abi: Presaleabi,
  //       functionName: "totalUSDTamounttoSale",
  //       chainId: 5,
  //     },
  //     {
  //       address: "0x5B54E62805FC3E502220a8D0F6dC40592AB4C7cD",
  //       abi: Presaleabi,
  //       functionName: "sellAmount",
  //       chainId: 5,
  //     },
  //     {
  //       address: "0x5B54E62805FC3E502220a8D0F6dC40592AB4C7cD",
  //       abi: Presaleabi,
  //       functionName: "rate",
  //       chainId: 5,
  //     },
  //   ],
  // });

  // const { isLoading: BuyTokenLoading, write: BuyTokenWrite } = useContractWrite(
  //   {
  //     address: "0x5B54E62805FC3E502220a8D0F6dC40592AB4C7cD",
  //     abi: Presaleabi,
  //     functionName: "purchasea",
  //     args: [parseEther(payableAmount)],
  //     account: account.address,
  //     value: parseEther(payableAmount),
  //     chainId: 5,
  //   }
  // );

  // useEffect(() => {
  //   console.log("InitializeData:", Number(InitializeData[0].result));
  //   console.log("InitializeData:", Number(InitializeData[4].result));
  // });

  const handleBuyToken = async () => {
    // BuyTokenWrite();
    // console.log("BUY", Math.floor(new Date().getTime() / 1000));
  };

  const calcTime = () => {
    var ts_diff = endTime - Math.floor(new Date().getTime() / 1000);
    if (Math.floor(ts_diff / 60 / 60 / 24) >= 0) {
      setDays(Math.floor(ts_diff / 60 / 60 / 24));
    }
    if (
      Math.floor((ts_diff - days * 60 * 60 * 24) / 60 / 60) >= 0 &&
      Math.floor((ts_diff - days * 60 * 60 * 24) / 60 / 60) < 24
    ) {
      setHours(Math.floor((ts_diff - days * 60 * 60 * 24) / 60 / 60));
    }
    if (
      Math.floor((ts_diff - days * 60 * 60 * 24 - hours * 60 * 60) / 60) >= 0 &&
      Math.floor((ts_diff - days * 60 * 60 * 24 - hours * 60 * 60) / 60) < 60
    ) {
      setMinutes(
        Math.floor((ts_diff - days * 60 * 60 * 24 - hours * 60 * 60) / 60)
      );
    }
    if (
      Math.floor(
        ts_diff - days * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60
      ) >= 0 &&
      Math.floor(
        ts_diff - days * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60
      ) < 60
    ) {
      setSeconds(
        Math.floor(
          ts_diff - days * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60
        )
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calcTime();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const onChangeUSDTValue = (e) => {
    // setGetPhium(e.target.value / (Number(InitializeData[4].result) / 1000000));
    setGetPhium(e.target.value / 0.002);
  };

  return (
    <div>
      <div className="relative flex flex-col px-[280px] pt-4 justify-between h-screen">
        <div className="flex justify-between items-center flex-row w-full gap-24">
          <Link href="/">
            <div className="flex items-center justify-center gap-2">
              <Image src={Logo} alt="delphium logo" width={52} height={39} />
              <div className="text-[24px] font-bold">Delphium</div>
            </div>
          </Link>
          <div>
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                setUserBalance(account?.balanceFormatted);
                // console.log("b:", account?.balanceFormatted);

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            type="button"
                            className="p-3 bg-[#ffffff24] rounded-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#4ea4ff] duration-300 shadow-2xl shadow-[#0e141a]"
                          >
                            Connect Wallet
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button onClick={openChainModal} type="button">
                            Wrong network
                          </button>
                        );
                      }

                      return (
                        <div style={{ display: "flex", gap: 12 }}>
                          <button
                            onClick={openChainModal}
                            style={{ display: "flex", alignItems: "center" }}
                            type="button"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 12,
                                  height: 12,
                                  borderRadius: 999,
                                  overflow: "hidden",
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? "Chain icon"}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </button>

                          <button onClick={openAccountModal} type="button">
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
            {/* <button className="px-[25px] py-[7px] bg-[#c5b939] text-[#fff] rounded-lg">
            Connect Wallet
          </button> */}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex w-1/2">
            <div className="flex flex-col pr-[100px] gap-[50px]">
              <div className="text-[56px] font-bold">Delphium Presale</div>
              <div className="text-[24px]">
                The platform helps investors to make easy to purchase and sell
                their tokens.
              </div>
              <div>
                <a
                  href="https://kingdelphi.github.io/"
                  target="_blank"
                  className="px-[25px] py-[7px] bg-[#4ea4ff] shadow-2xl shadow-[#4ea4ff] text-white text-xl font-bold rounded-md"
                >
                  Playing Game
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-1/2">
            <div className="relative flex flex-col justify-center items-center gap-[20px] w-[500px] h-[450px] shadow-2xl shadow-[#0e141a] bg-[#33343B] rounded-xl">
              <div className="absolute top-[-100px] left-[-50px]">
                <Image src={Delphium} alt="Delphium" width={150} height={150} />
              </div>
              <div className="absolute top-[-100px] right-[-50px]">
                <Image
                  src={Jurgentzu}
                  alt="Jurgentzu"
                  width={150}
                  height={150}
                />
              </div>
              <div className="font-bold text-[18px]">TOKEN SALE ENDS IN</div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>Days</div>
                  <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                    {days.toString().length < 2 ? "0" + days : days}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>Hours</div>
                  <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                    {hours.toString().length < 2 ? "0" + hours : hours}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>Minutes</div>
                  <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                    {minutes.toString().length < 2 ? "0" + minutes : minutes}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>Seconds</div>
                  <div className="flex justify-center items-center text-[24px] px-[20px] py-[20px] border-solid border-white border-[1px] rounded-xl">
                    {seconds.toString().length < 2 ? "0" + seconds : seconds}
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
              <div className="flex flex-col gap-5 justify-center items-center">
                {/* <div>
                  <input></input> {"=>"} <input></input>
                </div> */}
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="form-control">
                    {/* <label className="label">
                    <span className="label-text text-white">Enter amount</span>
                  </label> */}
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="0.01"
                        onChange={(e) => onChangeUSDTValue(e)}
                        className="input input-bordered text-black w-20"
                      />
                      <span className="text-black text-sm px-3">USDT</span>
                    </label>
                  </div>
                  to
                  <div className="form-control">
                    {/* <label className="label">
                    <span className="label-text text-white">Enter amount</span>
                  </label> */}
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="0.01"
                        value={getPhium}
                        className="input input-bordered text-black w-20"
                      />
                      <span className="text-black text-sm px-3">$PHIUM</span>
                    </label>
                  </div>
                </div>

                <button
                  className="px-[25px] py-[7px] bg-[#4ea4ff] shadow-md shadow-[#0e141a] w-[350px] text-white rounded-lg"
                  onClick={handleBuyToken}
                >
                  PURCHASE TOKENS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-center gap-8 z-10 pb-20">
          <Link
            href="https://www.facebook.com/delphic.chess/"
            target="_blank"
            title="facebook"
          >
            <div className="p-3 bg-[#ffffff24] rounded-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#4ea4ff] duration-300 shadow-2xl shadow-[#0e141a]">
              <BiLogoFacebook href="" size={30} />
            </div>
          </Link>
          <Link
            href="https://twitter.com/DelphicChess"
            target="_blank"
            title="twitter"
          >
            <div className="p-3 bg-[#ffffff24] rounded-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#486cff] duration-300 shadow-2xl shadow-[#0e141a]">
              <BiLogoTwitter href="" size={30} />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            title="instagram"
          >
            <div className="p-3 bg-[#ffffff24] rounded-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#ff6c3a] duration-300 shadow-2xl shadow-[#0e141a]">
              <AiFillInstagram href="" size={30} />
            </div>
          </Link>
          <Link
            href="https://kingdelphi.github.io/"
            target="_blank"
            title="playing game"
          >
            <div className="p-3 bg-[#ffffff24] rounded-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-2xl shadow-[#0e141a]">
              <GiGamepad size={30} />
            </div>
          </Link>
          <Link
            href="https://delphic-chess.fandom.com/wiki/Delphic_Chess_Wiki"
            target="_blank"
            title="story"
          >
            <div className="p-3 bg-[#ffffff24] rounded-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-[#fb9551] duration-300 shadow-2xl shadow-[#0e141a]">
              <GiEvilBook href="" size={30} />
            </div>
          </Link>
        </div>
      </div>
      <div className="fixed w-full bottom-2">
        <Image src={Layer} className="w-full" alt="layer" height={260} />
      </div>
    </div>
  );
};

export default Home;
