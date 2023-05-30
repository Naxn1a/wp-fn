"use client"
import React, { useEffect, useState } from "react";
import notify from "@/libs/notify";

const tokenGenerator = () => {

    const [upper, setUpper] = useState(true);
    const [lower, setLower] = useState(true);
    const [num, setNum] = useState(true);
    const [symbol, setSymbol] = useState(false);

    const [len, setLen] = useState(64);
    const [data, setData] = useState("");

    const word = {
        upper: upper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "",
        lower: lower ? "abcdefghijklmnopqrstuvwxyz" : "",
        num: num ? "1234567890" : "",
        symbol: symbol ? "~`!@#$%^&*()_-+=[{}]|/;:',<.>/?" : "", 
    }

    const chars = word.upper + word.lower + word.num + word.symbol;
    let token = "";

    const menus = [
        {name: "Uppercase (ABC...)", set: setUpper, get: upper},
        {name: "Lowercase (abc...)", set: setLower, get: lower},
        {name: "Numbers (012...)", set: setNum, get: num},
        {name: "Symbols (;-!...)", set: setSymbol, get: symbol},
    ];

    function genToken() {
        token = "";
        if (chars) {
            for (let i = 0; i < len; i++) {
                let rd = Math.floor(Math.random() * chars.length);
                token += chars[rd];
            }
        }
        setData(token)
    }

    async function copyText() {
        await navigator.clipboard.writeText(data);
        notify("Copied", "green");
    }

    useEffect(() => {
        genToken();
    }, [len, upper, lower, num, symbol])

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="w-1/2 text-[#343434]">
                <h1 className="text-7xl">Token generator</h1>
            </div>
            <hr className="bg-[#343434] w-1/2 h-1" />
            <div className="w-1/2 mb-5 text-[#343434]">
                <p className="text-xl">Generate random string with the chars you want: uppercase or lowercase letters, numbers and/or symbols.</p>
            </div>
            <section className="bg-[#8DABAC] w-1/2 h-fit p-5 rounded-xl">
                <ul className="flex flex-wrap justify-center items-center">
                    {
                        menus.map((i, k) => (
                            <li key={k} className="w-1/2 flex justify-center py-4 items-center gap-2">
                                <span>{i.name}</span>
                                <div onClick={() => i.set(!i.get)} className={`flex w-10 h-5 bg-gray-600 rounded-full transition-all duration-500 ${i.get && `bg-green-400`}`}>
                                    <span className={`w-5 h-5 bg-white rounded-full transition-all duration-500 ${i.get && `ml-5`}`}></span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center mb-5">
                    <p className="w-32">Length ({len})</p>
                    <input type="range" min={1} max={512} value={len} onChange={(e) => setLen(Number(e.target.value))} className="w-full accent-sky-300" />
                </div>
                <textarea className={`text-white bg-[#343434] p-4 w-full h-64 resize-none rounded-lg mb-5`} readOnly value={data}></textarea>
                <div className="flex justify-center items-center gap-12">
                    <button className="text-xl hover:text-white duration-300" onClick={copyText}>Copy</button>
                    <button className="text-xl hover:text-white duration-300" onClick={genToken}>Refresh</button>
                </div>
            </section>
        </div>
    );
};

export default tokenGenerator;
