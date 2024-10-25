import {IProduct} from "@/app/types/product";

export const PRODUCT: IProduct = {
    id: 'text',
    name: 'Nordic Nest Firwood Bed',
    description: 'Experience the warmth of nature every night with the Nordic Nest Firwood Bed. Made from sustainably sourced fir wood, this eco-friendly bed brings a cozy forest touch to your bedroom while prioritizing your health and the environment.',
    info: 'The Nordic Nest Firwood Bed is designed for those who value comfort, sustainability, and a touch of nature in their homes. Crafted from high-quality fir wood sourced from responsibly managed forests, this bed provides an eco-conscious option without compromising on durability or style.\n' +
        '\n' +
        'Fir wood is naturally strong yet lightweight, making it an ideal material for a long-lasting bed that’s easy to move if needed. Its unique grain and warm tones add a rustic charm to any bedroom, creating a soothing ambiance reminiscent of a peaceful forest retreat. Unlike chemically treated woods, our fir wood is processed with minimal intervention, preserving its natural essence and reducing exposure to synthetic chemicals, which is especially important for a healthy sleep environment.\n' +
        '\n' +
        'The Nordic Nest Firwood Bed is easy to assemble, and its sturdy design ensures minimal creaking, even after years of use. It’s compatible with a variety of mattress types, including memory foam, latex, and hybrid options. Available in different sizes to fit any room, it’s perfect for city dwellers who crave a natural touch and for countryside homes looking to harmonize with the environment.\n' +
        '\n' +
        'Transform your bedroom into a cozy sanctuary with the Nordic Nest Firwood Bed, where simplicity meets sustainability.',
    price: 1999,
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