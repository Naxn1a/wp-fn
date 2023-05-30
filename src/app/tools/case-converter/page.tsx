"use client"
import notify from "@/libs/notify";
import React, { useState } from "react";

// icon
import { MdOutlineContentCopy } from "react-icons/md"

const caseConvert = () => {

    const [data, setData] = useState("");

    function style1(text: string) {
        return text.split(" ").map(i => {
            return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
        }).join("");
    }

    function style2(text: string) {
        return text.split(" ").map(i => {
            return i.charAt(0).toUpperCase() + i.slice(1);
        }).join(" ");
    }

    function style3(text: string) {
        return text.split(" ").map(i => {
            return i.toUpperCase();
        }).join("_");
    }

    function style4(text: string) {
        return text.split(" ").map(i => {
            return i.toLowerCase();
        }).join(".");
    }

    function style5(text: string) {
        return text.split(" ").map(i => {
            return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
        }).join("-");
    }

    function style6(text: string) {
        return text.split(" ").map(i => {
            return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
        }).join("+");
    }

    function style7(text: string) {
        return text.split(" ").map(i => {
            return i.toLowerCase();
        }).join("-");
    }

    function style8(text: string) {
        return text.split(" ").map(i => {
            return i.toLowerCase();
        }).join("/");
    }

    function style9(text: string) {
        return text.split(" ").map(i => {
            return i.toLowerCase();
        }).join("_");
    }

    const menus = [
        {name: "style1:", func: style1(data)},
        {name: "style2:", func: style2(data)},
        {name: "style3:", func: style3(data)},
        {name: "style4:", func: style4(data)},
        {name: "style5:", func: style5(data)},
        {name: "style6:", func: style6(data)},
        {name: "style7:", func: style7(data)},
        {name: "style8:", func: style8(data)},
        {name: "style9:", func: style9(data)},
    ];

    async function copyText(text: string) {
        await navigator.clipboard.writeText(text);
        notify("Copied", "green")
    }
    
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="w-1/2 text-[#343434]">
                <h1 className="text-7xl">Case converter</h1>
            </div>
            <hr className="bg-[#343434] w-1/2 h-1" />
            <div className="w-1/2 mb-5 text-[#343434]">
                <p className="text-xl">Change the case of a string and chose between different formats</p>
            </div>
            <section className="bg-[#343434] w-1/2 h-fit p-5 rounded-xl flex flex-col justify-center items-center">
                <div className="flex justify-center items-center w-full gap-4">
                    <p className="w-fit text-[#EDE9E0]">text: </p>
                    <input type="text" value={data} onChange={(e) => setData(e.target.value)} className="w-full bg-[#EDE9E0] text-[#343434] leading-8 px-4 rounded-lg" />
                </div>
                <hr className="text-[#EDE9E0] w-full my-4 border-2" />
                {
                    menus.map((i, k) => (
                        <div key={k} className="text-[#EDE9E0] flex justify-center items-center w-full gap-4 mb-2 relative">
                            <p className="w-fit text-right">{i.name} </p>
                            <input type="text" value={i.func} readOnly className="w-full bg-[#EDE9E0] leading-8 px-4 rounded-lg text-[#343434]" />
                            <MdOutlineContentCopy onClick={() => copyText(i.func)} className="text-[#343434] absolute right-2 cursor-pointer" />
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default caseConvert;
