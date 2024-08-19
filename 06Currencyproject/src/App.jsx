import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import UseCurrencyInfo from './hooks/usecurrencyinfo'

function App() {
  const[amount,setamount]=useState(0);
  const[from,setFrom]=useState("usd");
  const[to,setTo]=useState("inr");
  const[convertedAmt,setconvertedAmt]=useState(0);

  const currencyInfo=UseCurrencyInfo(from);
  const options= Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
  }

  const convert=()=>{
    setconvertedAmt(amount*currencyInfo[to]);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://cepr.org/sites/default/files/styles/og_image/public/voxeu-cover-image/AdobeStock_142481183_0.jpeg?itok=1p61MdCM')`,
        }}
      >
        <div className="w-full">
        <h1 className='text-center  mt-5 mb-10 text-3xl font-serif'>Currency Convertor </h1>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            oncurrencychange={(amount)=> setFrom(amount)}
                            onAmountchange={(amount) => setamount(amount)}
                            selectCurrency={from}     
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmt}
                            currencyOptions={options}
                            oncurrencychange={(Currency)=> 
                            setTo(Currency)}
                            selectCurrency={to}
                            amountdisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
