'use client';

import {Dispatch, SetStateAction} from "react";
import {RiShoppingCartLine} from "react-icons/ri";
import {BsTreeFill} from "react-icons/bs";
import {Em, Flex, Heading, Text} from "@radix-ui/themes";

export default function Header({ setMenuOpen }: { setMenuOpen: Dispatch<SetStateAction<boolean>> }) {

    const toggleMenu = () => {
        setMenuOpen( (prevState) => !prevState );
    }

    return (
        <header className="h-32 md:h-24 lg:h-20 2xl:h-16 m-0 px-4 sm:px-8 box-border bg-gold8">
            <Flex justify="center" align="center" height="100%">
                <Flex
                    justify="center"
                    align="center"
                    className="gap-2.5 mr-auto hover:cursor-pointer hover:brightness-150 duration-500"
                    onClick={toggleMenu}
                >
                    <BsTreeFill className="text-2xl md:text-4xl text-gold2" />
                    <Heading
                        className="pt-1 md:p-0 !text-lg md:!text-2xl"
                        style={{color: 'var(--gold-2)'}}
                    >
                        <Em>FIRnest</Em>
                    </Heading>
                </Flex>
                <Text
                    size="5"
                    className="hidden sm:flex mx-auto"
                    style={{color: 'var(--gold-2)'}}
                >
                    <Em>Breathe. Bloom. Belong.</Em>
                </Text>
                <RiShoppingCartLine size="1.75rem" className="text-gold2 ml-auto mr-2 sm:mr-0"/>
            </Flex>
        </header>
    )
}