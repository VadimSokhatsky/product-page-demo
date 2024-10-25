import {IProduct} from "@/app/types/product";

export const PRODUCT: IProduct = {
    id: 'text',
    name: 'Name',
    description: 'Short description',
    info: 'Full description',
    price: 999,
    discount: 30,
    colors: [
        {
            value: 'ivory',
            label: 'Ivory',
            available: true,
            hex: '#FEFBE9',
            photos: ['bed-ivory-1', 'bed-ivory-2', 'bed-ivory-3'],
        },
        {
            value: 'green',
            label: 'Green',
            available: true,
            hex: '#C4E8D1',
            photos: ['bed-green-1', 'bed-green-2'],
        },
        {
            value: 'pink',
            label: 'Pink',
            available: false,
            hex: '#F6CEE7',
            photos: [],
        },
    ],
}