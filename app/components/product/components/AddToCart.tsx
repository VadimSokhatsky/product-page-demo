import {Button} from "@radix-ui/themes";

export default function AddToCart() {
    return (
        <div className="w-full md:w-40 xl:w-64">
            <Button
                style={{
                    width: '100%',
                    height: '48px',
                    color: 'var(--gold-2)',
                    backgroundColor: 'var(--gold-12)',
                    borderRadius: '8px',
                }}
            >
                Add to Cart
            </Button>
        </div>
    )
}