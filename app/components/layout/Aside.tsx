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
            className={`
            flex 
            absolute ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
             lg:translate-x-0 lg:relative
              w-full md:w-96 lg:w-2/5 xl:w-1/4
               h-full max-h-full lg:h-auto
                lg:py-4 
                bg-gold2 box-border 
                z-10 duration-500
            `}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
        >
            <div
                className="
                 relative 
                 flex flex-col justify-between
                  w-full flex-grow 
                  h-full max-h-full lg:h-auto
                  py-4 lg:py-0
                  box-border bg-gold2
                  md:border-r md:border-solid md:border-gold8
                  z-10 duration-500
                "
            >
                <TabNav.Root
                    style={style}
                    className="flex flex-col gap-4 h-auto !lg:h-full flex-grow !translate-x-0"

                >
                    {routes.map((route, index) => (
                        <Flex
                            align="center"
                            className={`w-full py-1 box-border hover:bg-gold12 text-gold2 duration-0 md:duration-500 cursor-pointer`}
                            key={`route-${index}`}>
                            <TabNav.Link
                                href={route.href}
                                style={{width: '100%'}}
                                className="w-full hover:text-gold2"
                            >
                                <Text
                                    size="5"
                                    className="w-full h-full px-8 box-border font-thin text-center text-gold10 hover:text-gold2"
                                    style={{color: 'var(--gold-9'}}
                                >
                                    {route.label}
                                </Text>
                            </TabNav.Link>
                        </Flex>
                    ))}
                </TabNav.Root>
                <Flex
                    className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <BsTreeFill size="10rem" className="text-gold8 mx-auto"/>
                </Flex>
                <Text
                    className="relative !h-8 flex justify-center lg:absolute lg:bottom-0 px-8 box-border  md:text-xl"
                    style={{...style, color: 'var(--gold-9)'}}
                >
                    <Em>Breathe. Bloom. Belong.</Em>
                </Text>
            </div>
        </aside>
    )
}