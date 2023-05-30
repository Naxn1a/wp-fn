import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-[#EDE9E0]">
            <Sidebar />   
            {children}
        </div>
    )
}
