import Link from "next/link";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between items-center w-full my-6 text-white">
            <div className="flex justify-center items-center mb-6">
                <Link className="duration-300 hover:-translate-y-1 hover:scale-105" href="https://www.facebook.com/emerpp/"><FaFacebookF size={32} className="mx-6" /></Link>
                <Link className="duration-300 hover:-translate-y-1 hover:scale-105" href="https://www.instagram.com/_emerp/"><FaInstagram size={32} className="mx-6" /></Link>
                <Link className="duration-300 hover:-translate-y-1 hover:scale-105" href="https://github.com/Naxn1a/"><FaGithub size={32} className="mx-6" /></Link>
            </div>
            <p>copyright ©2023 | WorkSpace by me</p>
        </footer>
    );
}
