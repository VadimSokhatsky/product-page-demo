import {Flex} from "@radix-ui/themes";
import {COLORS} from "@/app/components/product/product.data";

export default function Colors(
    props: {
        color?: string;
        setColor: (color?: string) => void;
    }
) {

    const { color, setColor } = props;

    return (
        <div className="flex gap-2 flex-wrap mt-auto">
            {COLORS.map((c, index) => {
                const isActive = c.value === color;
                return (
                    <Flex
                        key={`color${index}`}
                        justify="center"
                        align="center"
                        className={`w-24 h-8 border-r-8 hover:cursor-pointer hover:brightness-110 duration-500 ${c.available ? '' : 'opacity-50 grayscale'} `}
                        style={{
                            backgroundColor: c.hex,
                            border: `${isActive ? 3 : 1}px solid var(--gold-${isActive ? 8 : 5})`,
                            borderRadius: '8px',
                            // filter: c.available ? 'none' : 'grayscale(1) opacity(0.5)',
                            pointerEvents: c.available ? 'auto' : 'none',
                        }}
                        onClick={() => setColor(c.value)}
                    >
                        {c.label}
                    </Flex>
                )
            })}
        </div>
    )
}