export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    tax: number;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    qty: number;
}

export class Product implements IProduct {
    constructor(public productId: number,
                public productName: string,
                public productCode: string,
                public tax: number,
                public description: string,
                public price: number,
                public starRating: number,
                public imageUrl: string,
                public qty: number){
    }
}
