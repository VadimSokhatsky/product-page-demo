import {Button} from "@radix-ui/themes";

export default function AddToCart() {
    return (
        <div className="w-full md:w-40 xl:w-64">
            <Button className="!w-full !h-12 !text-gold2 !bg-gold12 hover:!bg-gold10 !rounded-lg hover:cursor-pointer !duration-500">
                Add to Cart
            </Button>
        </div>
    )
}