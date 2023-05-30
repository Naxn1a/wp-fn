"use client"
import React, { useEffect, useState } from "react";
import QR from "qrcode.react";

const qrcode = () => {

    const [data, setData] = useState("");
    const [er, setEr] = useState("L");
    const [Qrcode, setQrcode] = useState<JSX.Element>();

    useEffect(() => {
        const Qrcode = () => (
            <QR value={data} renderAs="canvas" level={er} />
        )
        setQrcode(Qrcode)
    }, [data, er])


    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="w-1/2 text-[#343434]">
                <h1 className="text-7xl">QR Code generator</h1>
            </div>
            <hr className="bg-[#343434] w-1/2 h-1" />
            <div className="w-1/2 mb-5 text-[#343434]">
                <p className="text-xl">Generate and download QR-code for an url or just a text and customize the background and foreground colors.</p>
            </div>
            <section className="bg-[#8DABAC] w-1/2 h-fit p-5 rounded-xl flex flex-col justify-center items-center">
                <div className="flex items-center gap-4 mb-5 w-full">
                    <span className="w-1/4 text-right">Text:</span>
                    <input type="text" value={data} onChange={(e) => setData(e.target.value)} className="text-white w-3/4 bg-[#343434] leading-8 px-4 rounded-lg" />
                </div>
                <div className="flex items-center gap-4 mb-5 w-full">
                    <span className="w-1/4 text-right">Error resistance:</span>
                    <select onChange={(e) => setEr(e.target.value)} className="text-white bg-[#343434] w-3/4 h-8 px-4 rounded-lg">
                        <option value="L">low</option>
                        <option value="M">medium</option>
                        <option value="Q">quartile</option>
                        <option value="H">high</option>
                    </select>
                </div>
                <div className="w-[175px] h-[175px] bg-white flex justify-center items-center rounded-lg">
                    {Qrcode ? Qrcode : null}
                </div>
            </section>
        </div>
    );
};

export default qrcode;
