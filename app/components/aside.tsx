'use client';

import {CSSProperties, useEffect, useState} from "react";

import {Flex, TabNav, Text, Em, Heading} from "@radix-ui/themes";

import "../globals.css";
import Tree from "@/app/components/tree";

export default function Aside() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [style, setStyle] = useState<CSSProperties>({
        width: '100%',
        height: '100%',
        transform: 'translateX(-100%)',
        transitionDuration: '0.5s',
    });

    useEffect( () => {
        setStyle({
            ...style,
            transform: `translateX(${isOpen ? '0' : '-100'}%)`,
        })
    }, [isOpen] )

    const routes = [
        { href: '#', label: 'Home' },
        { href: '#', label: 'Catalog' },
        { href: '#', label: 'About Us' },
        { href: '#', label: 'Contacts' },
    ]

    return (
        <aside
            className="relative w-1/4 flex z-10"
            style={{ borderRight: '1px solid var(--gold-8)' }}
            onMouseEnter={ () => setIsOpen(true)}
        >
            <Flex
                className="absolute top-0 left-0 w-full h-full"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            >
                <Flex className="relative w-full h-full">
                    <Flex className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
                        <Tree size={6} color="#B9A88D" />
                        <Heading size="7" style={{ color: 'var(--gold-8)', margin: '0 auto' }}>
                            <Em>
                                FIRnest
                            </Em>
                        </Heading>
                    </Flex>
                </Flex>

            </Flex>
            <TabNav.Root
                style={style}
                className="flex flex-col gap-4" onMouseLeave={() => setIsOpen(false)}
            >
                {routes.map((route) => (
                    <Flex className="w-full pt-2 box-border hover:bg-gold12 text-gold2 duration-500 cursor-pointer">
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
                size="5"
                className="absolute bottom-0 flex justify-center px-8 box-border"
                style={{...style, bottom: '0', height: 'auto', color: 'var(--gold-9)'}}
            >
                <Em>Breathe. Bloom. Belong.</Em>
            </Text>
        </aside>
    )
}