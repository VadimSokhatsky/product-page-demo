'use client';

import {useEffect, useState} from "react";
import {Flex, Heading, Text} from "@radix-ui/themes";

import {IProduct} from "@/app/types/product";
import {PRODUCT} from "@/app/data/product";

export default function Home() {

    const [product, setProduct] = useState<IProduct | undefined>(PRODUCT);
    const [color, setColor] = useState<string | undefined>(undefined);

    useEffect( () => {
        if (product?.colors.length) setColor(product.colors[0].value);
    }, [product] )

  return (
    <Flex direction="column" className="flex-grow p-8 box-border gap-8" width="100%" height="100%" style={{ color: 'var(--gold-12)' }}>
        <Flex className="gap-8">
            <div className="w-96 min-w-96 max-w-96 h-96 min-h-96 max-h-96" style={{ border: '1px solid var(--gold-12)', borderRadius: '8px' }}></div>
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
                    {product?.colors.map( (c) => {
                        const isActive = c.value === color;
                        return (
                            <Flex
                                justify="center"
                                align="center"
                                className="w-24 h-8 border-r-8 hover:cursor-pointer hover:brightness-90 duration-500"
                                style={{
                                    backgroundColor: isActive ? 'var(--gold-12)' : c.hex,
                                    color: `var(--gold-${isActive ? 1 : 12})`,
                                    border: '2px solid var(--gold-8)',
                                    borderRadius: '8px',
                                }}
                                onClick={() => setColor(c.value)}
                            >
                                {c.label}
                            </Flex>
                        )
                    } )}
                </Flex>
            </Flex>
        </Flex>
        <Flex>
            {product?.info}
        </Flex>
    </Flex>
  );
}
