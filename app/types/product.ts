export interface IProduct {
    id: string;
    name: string;
    description: string;
    info: string;
    price: number;
    colors: TColor[];
    discount?: number;
}

export type TColor = {
    value: string;
    label: string;
    available: boolean;
    hex?: string;
}