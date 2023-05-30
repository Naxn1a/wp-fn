"use client";
import notify from "@/libs/notify";
import users from "@/libs/users";
import Cookies from "js-cookie";
import React, { useState } from "react";

// icons
import { FaUserCircle, FaKey, FaRegTimesCircle } from "react-icons/fa";

export default function Login() {
    const [active, setActive] = useState(false);
    const [next, setNext] = useState(true);

    const [data, setData] = useState({
        username: "",
        p1: "",
        p2: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { username, p1 } = data;
        const user = await users(username, p1, "login");
        if (user.status === 200) {
            document.cookie = `token=${user.token}`
            notify(user.msg, "green");
            setTimeout(() => {
                window.location.href = "/tools"
            }, 2000);
            return 
        }
        return notify(user.msg, "red");
    }

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { username, p1, p2 } = data;
        if (p1 !== p2) {
            return notify("Password not match!", "red");
        }
        const user = await users(username, p1, "register");
        if (user.status === 200) {
            setNext(true);
            return notify(user.msg, "green");
        }
        return notify(user.msg, "red");
    }

    return (
        <div>
            <button
                onClick={() => setActive(true)}
                className="duration-300 hover:-translate-x-1 text-2xl border-2 border-slate-900 bg-slate-900 py-2 px-4 rounded-xl font-semibold text-white hover:bg-transparent hover:border-transparent hover:text-slate-900"
            >
                Login
            </button>
            <div
                className={`duration-300 fixed top-0 left-0 w-full h-screen flex justify-center items-center ${
                    active ? "scale-100" : "scale-0"
                }`}
            >
                <form
                    onSubmit={next ? handleLogin : handleRegister}
                    className="flex flex-col justify-center items-center p-12 rounded-xl border-2 border-white backdrop-blur-sm"
                >
                    <FaRegTimesCircle
                        size={24}
                        className="absolute right-2 top-2 text-slate-900 cursor-pointer"
                        onClick={() => setActive(false)}
                    />
                    <h1 className="text-white mb-6 text-5xl font-semibold letter tracking-wide">
                        {next ? "Login" : "Register"}
                    </h1>
                    <div className="relative">
                        <input
                            onChange={(e) => handleChange(e)}
                            className="text-slate-600 my-3 p-2 rounded-xl w-72"
                            placeholder="username"
                            type="text"
                            autoComplete="off"
                            name="username"
                        />
                        <FaUserCircle
                            size={18}
                            className="text-slate-600 absolute right-4 top-1/2 -translate-y-1/2 text-xl"
                        />
                    </div>
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            className="text-slate-600 my-3 p-2 rounded-xl w-72"
                            placeholder="password"
                            type="password"
                            name="p1"
                        />
                        <FaKey
                            size={18}
                            className="text-slate-600 absolute right-4 top-1/2 -translate-y-1/2 text-xl"
                        />
                    </div>
                    {next ? null : (
                        <div className="relative">
                            <input
                                onChange={handleChange}
                                className="text-slate-600 my-3 p-2 rounded-xl w-72"
                                placeholder="confirm password"
                                type="password"
                                name="p2"
                            />
                            <FaKey
                                size={18}
                                className="text-slate-600 absolute right-4 top-1/2 -translate-y-1/2 text-xl"
                            />
                        </div>
                    )}
                    <div className="mt-6 w-full flex flex-col justify-center items-center gap-6">
                        <button className="duration-300 w-full text-2xl border-2 border-slate-900 bg-slate-900 py-2 px-4 rounded-xl font-semibold text-white hover:bg-transparent hover:border-transparent hover:translate-y-1">
                            {next ? "Login" : "Register"}
                        </button>

                        {next ? (
                            <p
                                onClick={() => setNext(false)}
                                className="text-white cursor-pointer hover:underline"
                            >
                                Don't have an account?
                            </p>
                        ) : (
                            <p
                                onClick={() => setNext(true)}
                                className="text-white cursor-pointer hover:underline"
                            >
                                Already have an accoun?
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
