import Link from "next/link";
import Image from "next/image";

import gmailLogo from "../../assets/app/gmail.png";
import driveLogo from "../../assets/app/drive.png";
import meetLogo from "../../assets/app/meet.png";
import calendarLogo from "../../assets/app/calendar.png";
import sheetsLogo from "../../assets/app/sheets.png";
import translateLogo from "../../assets/app/translate.png";
import teamsLogo from "../../assets/app/teams.png";

export default function app() {
    return (
        <div className="m-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {menu?.map((i, k) => (
                    <Link href={i.link} key={k} className={`h-fit text-white py-8 px-5 rounded-xl duration-300 hover:scale-105 ${k % 2 === 0 ? "bg-[#343434]" : "bg-[#8DABAC]"}`}>
                        <Image className="mb-4" src={i.icon} alt={i.name} width={75} height={75} />
                        <h1>{i.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const menu = [
    { link: "https://mail.google.com/", icon: gmailLogo, name: "Gmail" },
    { link: "https://drive.google.com/", icon: driveLogo, name: "Drive" },
    { link: "https://meet.google.com/", icon: meetLogo, name: "Meet" },
    { link: "https://calendar.google.com/", icon: calendarLogo, name: "Calendar" },
    { link: "https://docs.google.com/spreadsheets/", icon: sheetsLogo, name: "Sheets" },
    { link: "https://translate.google.com/", icon: translateLogo, name: "Translate" },
    { link: "https://teams.microsoft.com/", icon: teamsLogo, name: "Teams" },
];
