import Link from "next/link";
import React from "react";

// icon
import { FaRandom } from "react-icons/fa";
import { MdShortText, MdQrCode2 } from "react-icons/md";
import { RiFontSize } from "react-icons/ri";

export default function tools() {
    return (
        <div className="m-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {menu.map((i, k) => (
                    <Link href={i.link} key={k} className={`h-fit text-white py-8 px-5 rounded-xl duration-300 hover:scale-105 ${k % 2 === 0 ? "bg-[#343434]" : "bg-[#8DABAC]"}`}>
                        <div className="mb-4">
                            {React.createElement(i.icon, { size:"36" })}
                        </div>
                        <h1>{i.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const menu = [
    {link: "/tools/token-generator", icon: FaRandom, name: "Token generator" },
    {link: "/tools/shorturl", icon: MdShortText, name: "Short url" },
    {link: "/tools/qrcode", icon: MdQrCode2, name: "QR code generator" },
    {link: "/tools/case-converter", icon: RiFontSize, name: "Case converter" },
]