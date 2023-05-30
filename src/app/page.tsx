import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col justify-between h-screen">
                <Header />
                <Footer />
            </div>
        </main>
    );
}
