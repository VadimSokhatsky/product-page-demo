import {Flex, Text} from "@radix-ui/themes";

export default function Price() {

    const price = 1999;
    const discount = 30;

    return (
        <Flex className="gap-2 font-bold ml-auto sm:m-0">
            <Text
                style={{
                    textDecoration: discount ? 'line-through' : 'none',
                    filter: discount ? 'contrast(0.3)' : 'none',
                }}
            >
                {price}
            </Text>
            {discount &&
                <Text
                    className="text-red-500">
                    {Math.round(price * ((100 - discount || 0) / 100))}
                </Text>
            }
            <Text>$</Text>
        </Flex>
    )
}