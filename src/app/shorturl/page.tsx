"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import notify from "@/libs/notify";
import Image from "next/image";
import loadingLogo from "../../assets/loading.gif";

// icon
import { AiFillCloseCircle } from "react-icons/ai"

type Props = {
    clicked: string;
    id: string;
    url: {
        createdAt?: string;
        id?: string;
        originalUrl: string;
        shortUrl: string;
        urlCode?: string;
        usersId?: string;
    };
    urlId: string;
};

const app = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    async function copyText(data: string) {
        await navigator.clipboard.writeText(data);
        notify("Copied", "green");
    }

    async function getData() {
        await fetch(`${process.env.SERVER}/url/get`, {
            credentials: "include"
        }).then(res => res.json()).then(data => {
            setUser(data.url)
            setLoading(false);
        })
    }

    async function handleDelete(idUrl: string, idAnalytic: string) {
        await fetch(`${process.env.SERVER}/url/del`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idUrl, 
                idAnalytic
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                location.reload();
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return loading ?  (
        <div className="flex justify-center items-center overflow-hidden translate-y-10 w-full">
            <Image className="select-none" src={loadingLogo} alt="loading" width={200} height={200} priority={true} />
        </div>
    ) : user.length !== 0 ? (
        <div className="w-full m-24">
            {user.map((i: Props, k) => (
                <div key={k} className={`mb-12 hover:scale-105 duration-300 flex justify-between items-center rounded-xl text-white p-6 ${k % 2 === 0 ? "bg-[#343434]" : "bg-[#8DABAC]"}`}>
                    <div>
                        <h1 onClick={() => copyText(i.url.shortUrl)} className="cursor-pointer">{i.url.shortUrl}</h1>
                        <h2>{i.url.originalUrl}</h2>
                    </div>
                    <div className="flex justify-center items-center gap-12">
                        <h1>{i.clicked}</h1>
                        <AiFillCloseCircle size={36} className="text-red-500 cursor-pointer" onClick={() => handleDelete(i.urlId, i.id )} />
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div className="w-full flex justify-center items-center text-[#343434]">
            <h1>You not have shorturl. <Link href="/tools/shorturl" className="text-blue-400 underline">click</Link></h1>
        </div>
    )
};

export default app;
