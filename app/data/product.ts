import {IProduct} from "@/app/types/product";

export const PRODUCT: IProduct = {
    id: 'text',
    name: 'Name',
    description: 'Short description',
    info: 'Full description',
    price: 999,
    discount: 30,
    colors: [
        { value: 'color1', label: 'Color 1', available: true, hex: '#fecaca' },
        { value: 'color2', label: 'Color 2', available: true, 'hex': '#bbf7d0' },
        { value: 'color3', label: 'Color 3', available: false, 'hex': '#bfdbfe' },
    ],
}