'use client';

import {useState} from "react";
import {Theme} from "@radix-ui/themes";

import Header from "@/app/components/layout/Header";
import Main from "@/app/components/layout/Main";
import Footer from "@/app/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <Theme className="flex flex-col max-h-full overflow-hidden">
            <Header setMenuOpen={setMenuOpen} />
            <Main menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                {children}
            </Main>
            <Footer />
        </Theme>
    )
}