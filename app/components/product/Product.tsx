'use client';

import {Flex, Heading} from "@radix-ui/themes";

import {useEffect, useState} from "react";

import Price from "@/app/components/product/components/Price";
import Image from "@/app/components/product/components/Image";
import Slider from "@/app/components/product/components/Slider";
import Colors from "@/app/components/product/components/Colors";
import Description from "@/app/components/product/components/Description";
import Info from "@/app/components/product/components/Info";
import Params from "@/app/components/product/components/Params";
import AddToCart from "@/app/components/product/components/AddToCart";

import {COLORS} from "@/app/components/product/product.data";

export function Product() {

    const [color, setColor] = useState<string | undefined>(COLORS[0].value);

    const [photos, setPhotos] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (color) {
            const c = COLORS.find((c) => c.value === color);
            if (c) {
                setPhotos(c.photos);
                setPhoto(c.photos[0]);
            }
        }
    }, [color]);

    return(
        <Flex className="gap-8 flex-grow px-4 py-0 md:px-8 md:py-8 box-border">
            <Flex direction="column" className="relative gap-4 md:gap-8" width="100%"
                  height="100%"
                  style={{color: 'var(--gold-12)'}}
            >
                <Flex className="flex-col-reverse md:flex-row gap-4 md:gap-12 lg:gap-8">
                    <Image src={photo}/>
                    <Flex width="100%" className="flex-row md:flex-col gap-4 items-end md:items-start">
                        <Flex justify="between" width="100%" className="gap-4">
                            <Flex className="flex-row md:flex-col items-end md:items-start gap-4 w-full">
                                <Heading size="5">Nordic Nest Firwood Bed</Heading>
                                <Price />
                            </Flex>
                            <div className="hidden md:block 2xl:hidden">
                                <AddToCart />
                            </div>
                        </Flex>
                        <div className="hidden md:block">
                            <Description />
                        </div>
                        <div className="hidden md:block mt-auto">
                            <Colors color={color} setColor={setColor}/>
                        </div>
                    </Flex>
                </Flex>
                <Slider photo={photo} setPhoto={setPhoto} photos={photos}/>
                <div className="block md:hidden">
                    <Colors color={color} setColor={setColor}/>
                </div>
                <div className="block md:hidden">
                    <AddToCart/>
                </div>
                <Info />
                <div className="block 2xl:hidden">
                    <Params />
                </div>
            </Flex>
            <div className="hidden 2xl:flex flex-col gap-4 md:min-w-40 xl:min-w-64 md:w-40 xl:w-64">
                <AddToCart />
                <div className="hidden xl:block">
                    <Params />
                </div>
            </div>
        </Flex>
    )
}