'use client';

import {Dispatch, ReactNode, SetStateAction} from "react";
import {Box, Flex} from "@radix-ui/themes";

import Aside from "@/app/components/layout/Aside";

export default function Main(
    props: {
        children: ReactNode,
        menuOpen: boolean,
        setMenuOpen: Dispatch<SetStateAction<boolean>>,
    }
) {

    const { children, menuOpen, setMenuOpen } = props;

    return (
        <main className="flex flex-col flex-grow max-h-full overflow-hidden bg-gold2">
            <Flex width="100%" height="100%" className="relative flex-grow h-full max-h-full overflow-hidden py-4 box-border">
                <Aside menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Box className="w-full overflow-auto sm:w-3/4 flex-grow">
                    {children}
                </Box>
            </Flex>
        </main>
    )
}