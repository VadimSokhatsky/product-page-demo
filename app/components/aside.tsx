'use client';

import {CSSProperties, useEffect, useState} from "react";

import {Flex, TabNav, Text} from "@radix-ui/themes";

import "../globals.css";

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
        { href: '#', label: 'Partners' },
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

            </Flex>
            <TabNav.Root
                style={style}
                className="flex flex-col gap-1"
                onMouseLeave={() => setIsOpen(false)}
            >
                {routes.map( (route) => (
                    <Flex className="w-full hover:bg-gold8 duration-500 cursor-pointer" style={{ color: 'var(--gold-12' }}>
                        <TabNav.Link
                            href={route.href}
                            style={{ width: '100%' }}
                            className="w-full"
                        >
                            <Text className="w-full h-full">{route.label}</Text>
                        </TabNav.Link>
                    </Flex>
                ) )}
            </TabNav.Root>
        </aside>
    )
}