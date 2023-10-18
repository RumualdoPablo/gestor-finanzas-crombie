
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Lato, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/global.css"

export const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });
const jakarta = Plus_Jakarta_Sans({subsets:["latin"]})

export const metadata: Metadata = {
    title: "Gastos Crombie",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={jakarta.className}>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
