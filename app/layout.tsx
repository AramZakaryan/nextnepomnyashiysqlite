import {Metadata} from "next";
import "./globals.css";
import {TheHeader} from "@/components/TheHeader";
import {TheFooter} from "@/components/TheFooter";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Next and SQLite",
    description: "Next App, SQLite with prisma",
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>

        <TheHeader/>

        <main className="container">
            {children}
        </main>

        <TheFooter/>

        </body>
        </html>
    )
}