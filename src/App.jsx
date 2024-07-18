import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./Hooks/usecurrencyinfo";


function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setfrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  return (
  
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-reoeat"
      style={{
        background: `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blue-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setamount(amount)}
                onAmountChange={(amount)=>setamount(amount)}
                selectcurrency={from}
              />
            </div>
            <div className="relative w-full h=0.5">
              <button 
                type="button"
                className="absolute left-1/2 translate-x-1/2-translaye-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              > SWAP
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectcurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default App;









/*git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Poojasharma-2206/Currency-Convertor.git
git push -u origin main */