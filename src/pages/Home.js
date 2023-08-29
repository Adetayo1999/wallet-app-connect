import React, { useEffect, useState } from "react";
import PriceCard from "../component/PriceCard";
import { CRYPTO_CURRENCIES } from "../assets/cryptoCurrency";
import HERO from "../assets/castle.png";
import HERO2 from "../assets/hero.jpg";
import HERO3 from "../assets/1.png";
import { CATEGORY_LIST } from "../utils/constant";
import Footer from "../component/Footer";
import { CategoryCard } from "../component/CategoryCard";

export default function Home() {
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);
  const [doge, setDoge] = useState(0);

  const btcUrl = "https://blockchain.info/ticker";
  const ethUrl =
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,CNY,JPY,GBP";
  const dogeUrl =
    "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD,EUR,CNY,JPY,GBP";

  useEffect(() => {
    fetch(btcUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBtc(data.USD.last);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch(ethUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEth(data.USD);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch(dogeUrl)
      .then((res) => res.json())
      .then((data) => {
        setDoge(data.USD);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const CRYPTO_CURRENCIES = [
    {
      name: "Bitcoin",
      price: btc,
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
    },
    {
      name: "Ethereum",
      price: eth,
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
    },
    {
      name: "Dogecoin",
      price: doge,
      logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022",
    },
  ];

  return (
    <div className=" text-white flex flex-col justify-between">
      <div className="px-4 my-8 p-8  flex flex-col justify-center item-center h-screen w-full">
        <img
          className=" sm:w-full md:w-2/3 flex place-items-center items-center object-contain"
          src={HERO3}
          alt="hero"
        />
        <div className="flex flex-wrap gap-2 z-10 items-center justify-center">
          {CRYPTO_CURRENCIES.map((currency) => (
            <PriceCard key={currency.symbol} {...currency} />
          ))}
        </div>
      </div>
      <div className="my-3 pb-10 flex flex-col justify-center items-center w-full bg-category bg-cover">
        <h1 className="text-2xl mt-8 font-bold">
          Please Select Issue category
        </h1>
        <p>Which of these is related to your issue?</p>
        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-8 px-12 my-8 cursor-pointer mb-16">
          {CATEGORY_LIST.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-600 mb-2">
          Ready to Start
        </h1>
        <p className="text-center  w-[40%] mb-6 text-gray-300 font-medium">
          We are ready to provide help in any related issues you are having with
          your wallet account
        </p>
        <textarea
          placeholder="Message"
          className="bg-gray-100 p-2 rounded-md outline-none text-black my-2"
          cols={40}
          rows={5}
        />
        <button className="bg-blue-300 rounded-md mb-3 text-black p-2 flex w-80 item-center justify-center">
          Get Started &rarr;
        </button>
      </div>
      <Footer />
    </div>
  );
}
