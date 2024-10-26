'use client';

import {CSSProperties, useEffect, useState, Dispatch, SetStateAction} from "react";

import {BsTreeFill} from "react-icons/bs"

import {Flex, TabNav, Text, Em} from "@radix-ui/themes";

import "../../globals.css";

export default function Aside(
    props: {
        menuOpen: boolean,
        setMenuOpen: Dispatch<SetStateAction<boolean>>,
    }
) {

    const { menuOpen, setMenuOpen } = props;

    const [style, setStyle] = useState<CSSProperties>({
        width: '100%',
        height: '100%',
        transform: 'translateX(-100%)',
        transitionDuration: '0.5s',
    });

    useEffect( () => {
        setStyle({
            ...style,
            transform: `translateX(${menuOpen ? '0' : '-100'}%)`,
        })
    }, [menuOpen] )

    const routes = [
        { href: '#', label: 'Home' },
        { href: '#', label: 'Catalog' },
        { href: '#', label: 'About Us' },
        { href: '#', label: 'Contacts' },
    ];

    return (
        <aside
            className={`absolute ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 -translate-y-4 lg:translate-y-0 lg:relative w-full md:w-96 lg:w-1/4 h-full max-h-full lg:h-auto z-10 duration-500`}
            style={{ borderRight: '1px solid var(--gold-8)', backgroundColor: 'var(--gold-2)' }}
            onMouseEnter={ () => setMenuOpen(true)}
        >
            <Flex
                className="absolute top-0 left-0 w-full h-full"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            >
                <Flex className="relative w-full h-full">
                    <Flex className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
                        <BsTreeFill size="10rem" className="text-gold8 mx-auto" />
                    </Flex>
                </Flex>

            </Flex>
            <TabNav.Root
                style={style}
                className="flex flex-col gap-4 !translate-x-0" onMouseLeave={() => setMenuOpen(false)}
            >
                {routes.map((route) => (
                    <Flex className={`w-full pt-2 box-border hover:bg-gold12 text-gold2 duration-0 md:duration-500 cursor-pointer`}>
                        <TabNav.Link
                            href={route.href}
                            style={{width: '100%'}}
                            className="w-full hover:text-gold2"
                        >
                            <Text
                                size="5"
                                className="w-full h-full px-8 box-border font-thin text-center text-gold10 hover:text-gold2"
                                style={{ color: 'var(--gold-9' }}
                            >
                                {route.label}
                            </Text>
                        </TabNav.Link>
                    </Flex>
                ))}
            </TabNav.Root>
            <Text
                className="absolute bottom-0 pb-16 lg:pb-0 flex justify-center px-8 box-border  md:text-xl"
                style={{...style, bottom: '0', height: 'auto', color: 'var(--gold-9)'}}
            >
                <Em>Breathe. Bloom. Belong.</Em>
            </Text>
        </aside>
    )
}