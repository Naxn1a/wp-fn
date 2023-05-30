"use client";
import React, { useEffect, useState } from "react";

// icon
import { FaCentercode } from "react-icons/fa"
import { CgMenuRight, CgLogOut } from "react-icons/cg"
import SideItem from "./SideItem";

export default function Sidebar() {
    const [side, setSide] = useState(false);
    const [user, setUser] = useState({
        id: "",
        username: "",
    });

    async function auth() {
        await fetch(`${process.env.SERVER}/user/auth`, {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setUser({
                    id: data.user.id,
                    username: data.user.username,
                });
            });
    }

    useEffect(() => {
        auth();
    }, []);

    async function logout() {
        document.cookie = `token=;`
        location.reload();
    }

    return (
        <div className={`duration-300 flex flex-col justify-between bg-[#4e8197] h-screen ${side ? "w-72" : "w-[76px]"} text-gray-100 px-4`}>
            <div>
                <div className="relative flex items-center py-6">
                    <div className="flex items-center gap-6">
                        <FaCentercode size={36} className={`${!side && `rotate-180 duration-300`}`} />
                        <h1 className={`text-3xl duration-300 select-none ${!side && `scale-0 translate-x-full`}`}>WorkSpace</h1>
                    </div>
                    <CgMenuRight onClick={() => setSide(!side)} size={36} className="absolute cursor-pointer -right-8 text-[#343434]" />
                </div>
                <div>
                    <SideItem side={side} />
                </div>
            </div>
            <div className="relative flex items-center mb-6">
                <h1 className={`text-3xl duration-300 ${!side && `scale-0 translate-x-full`}`}>{user.username}</h1>
                <CgLogOut size={36} className="absolute right-0 cursor-pointer" onClick={logout} />
            </div>
        </div>
    )
}
