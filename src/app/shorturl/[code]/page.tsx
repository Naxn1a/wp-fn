"use client"
import { useEffect } from "react"
import Image from "next/image";
import loadingLogo from "../../../assets/loading.gif";

interface Props {
    params: {
        code: string
    }
}

export default function page({ params }: Props) {

    async function direct() {
        await fetch(`${process.env.SERVER}/url/access`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code: params.code }),
        })
        .then(res => res.json())
        .then(data => {
            window.location.replace(data.url)
        })
    }

    useEffect(() => {
        direct();
    }, [])

    return (
        <div className="flex justify-center items-center overflow-hidden translate-y-10 w-full">
            <Image className="select-none" src={loadingLogo} alt="loading" width={200} height={200} priority={true} />
        </div>
    )
}
