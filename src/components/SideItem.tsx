import Link from "next/link";
import React from "react";

// icons
import { AiFillTool, AiOutlineDashboard } from "react-icons/ai";
import { MdApps } from "react-icons/md";

type Props = {
    side: boolean
}

export default function SideItem({ side }: Props) {
    return (
        <div>
            {menu.map((i, k) => (
                <Link href={i.link} className="flex items-center gap-6 mb-6 duration-300 rounded-lg p-1 hover:bg-white hover:text-[#343434]">
                    <div>
                        {React.createElement(i.icon, { size: "36" })}
                    </div>    
                    <h2 className={`text-xl duration-300 select-none ${!side && `scale-0 translate-x-full`}`}>{i.name}</h2>
                </Link>
            ))}
        </div>
    );
}

const menu = [
    {name: "Tools", link: "/tools", icon: AiFillTool},
    {name: "App", link: "/app", icon: MdApps},
    {name: "Shorturl", link: "/shorturl", icon: AiOutlineDashboard},
]