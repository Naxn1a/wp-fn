"use client"
import React, { useState } from "react";

// icon
import { MdOutlineContentCopy } from "react-icons/md";
import notify from "@/libs/notify";

const shorturl = () => {
    const [url, setUrl] = useState("");
    const [data, setData] = useState("");

    async function copyText() {
        await navigator.clipboard.writeText(data);
        notify("Copied", "green")
    }

    const createUrl = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            await fetch(`${process.env.SERVER}/url/create`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: url,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 200) {
                        setData(data.url.shortUrl);
                        notify("Generate success", "green")
                    } else {
                        notify("Fail, Please try again", "red");
                    }
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="w-1/2 text-[#343434]">
                <h1 className="text-7xl">Short URL</h1>
            </div>
            <hr className="bg-[#343434] w-1/2 h-1" />
            <div className="w-1/2 mb-5 text-[#343434]">
                <p className="text-xl">
                    ShortURL is a free tool to shorten URLs and generate
                    short links Our URL shortener allows to create a
                    shortened link making it easy to share.
                </p>
                <br />
                <p className="text-xl">
                    exam: "https://example.com"
                </p>
            </div>
            <section className="bg-[#343434] w-1/2 h-fit p-5 rounded-xl">
                <div>
                    <input
                        type="text"
                        placeholder="your url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-4/5 text-[#343434] bg-[#EDE9E0] leading-8 px-4 rounded-lg mr-4"
                    />
                    <button
                        onClick={(e) => createUrl(e)}
                        className="rounded-lg duration-300 hover:translate-x-3 leading-8 mb-5 text-left text-white"
                    >
                        Shorten URL
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-4 mb-2 relative">
                    <input
                        type="text"
                        value={data}
                        readOnly
                        className="w-full bg-[#EDE9E0] text-[#343434] leading-8 px-4 rounded-lg"
                    />
                    <MdOutlineContentCopy
                        onClick={() => copyText()}
                        className="absolute right-2 cursor-pointer text-[#343434]"
                    />
                </div>
            </section>
        </div>
    );
};

export default shorturl;
