'use client';

import {useEffect, useState} from "react";
import {Flex, Heading, Text} from "@radix-ui/themes";

import {IProduct} from "@/app/types/product";
import {PRODUCT} from "@/app/data/product";

export default function Home() {

    const [product, setProduct] = useState<IProduct | undefined>(PRODUCT);
    const [color, setColor] = useState<string | undefined>(undefined);
    const [photos, setPhotos] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (product?.colors.length) setColor(product.colors[0].value);
    }, [product])

    useEffect(() => {
        if (color && product) {
            const c = product.colors.find((c) => c.value === color);
            if (c) {
                setPhotos(c.photos);
                setPhoto(c.photos[0]);
            }
        }
    }, [color]);

    const prevPhoto = () => {
        if (photo) {
            const index = photos.indexOf(photo);
            if (index > -1) {
                const p = photos[index - 1];
                if (p) setPhoto(p);
            }
        }
    }

    const nextPhoto = () => {
        if (photo) {
            const index = photos.indexOf(photo);
            if (index > -1) {
                const p = photos[index + 1];
                if (p) setPhoto(p);
            }
        }
    }

    return (
        <Flex direction="column" className="flex-grow p-8 box-border gap-8" width="100%" height="100%"
              style={{color: 'var(--gold-12)'}}>
            <Flex className="gap-8">
                <div
                    className={`w-96 min-w-96 max-w-96 h-96 min-h-96 max-h-96 bg-center rounded-xl bg-contain ${photo || ''} duration-500`}
                >

                </div>
                <Flex direction="column" width="100%" className="gap-4">
                    <Heading>{product?.name}</Heading>
                    <Flex className="gap-2 font-bold">
                        <Text
                            style={{
                                textDecoration: product?.discount ? 'line-through' : 'none',
                                filter: product?.discount ? 'contrast(0.3)' : 'none',
                                // color: 'var(--gold-5)'
                            }}
                        >
                            {product?.price}
                        </Text>
                        {product?.discount &&
                            <Text
                                className="text-red-500">
                                {Math.round(product.price * ((100 - product.discount) / 100))}
                            </Text>
                        }
                        <Text>$</Text>
                    </Flex>
                    <Text>{product?.description}</Text>
                    <Flex className="gap-2 flex-wrap mt-auto">
                        {product?.colors.map((c) => {
                            const isActive = c.value === color;
                            return (
                                <Flex
                                    justify="center"
                                    align="center"
                                    className="w-24 h-8 border-r-8 hover:cursor-pointer hover:brightness-90 duration-500"
                                    style={{
                                        backgroundColor: c.hex,
                                        border: `${isActive ? 3 : 1}px solid var(--gold-${isActive ? 12 : 8})`,
                                        borderRadius: '8px',
                                        filter: c.available ? 'none' : 'grayscale(1) opacity(0.5)',
                                        pointerEvents: c.available ? 'auto' : 'none',
                                    }}
                                    onClick={() => setColor(c.value)}
                                >
                                    {c.label}
                                </Flex>
                            )
                        })}
                    </Flex>
                </Flex>
            </Flex>
            <Flex align="center" className="gap-2">
                <svg
                    width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={`hover:cursor-pointer hover:brightness-50 duration-500 ${photo === photos[0] ? 'opacity-50 pointer-events-none' : ''}`}
                    onClick={prevPhoto}
                >
                    <path
                        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                        fill="#8C7A5E" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
                <Flex className="w-fit h-24 gap-1 rounded-xl overflow-hidden">
                    {photos.map((p) => (
                        <div
                            className={`h-24 w-24 bg-contain ${p} ${p === photo ? '' : 'contrast-50'} hover:cursor-pointer hover:contrast-100 duration-500`}
                            onClick={() => setPhoto(p)}
                        ></div>
                    ))}
                </Flex>
                <svg
                    width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={`hover:cursor-pointer hover:brightness-50 duration-500 ${photo === photos[photos.length - 1] ? 'opacity-50 pointer-events-none' : ''}`}
                    onClick={nextPhoto}
                >
                    <path
                        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                        fill="#8C7A5E" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
            </Flex>
        </Flex>
    )
}