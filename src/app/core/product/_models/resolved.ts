import { ProductDetail } from './product';

export interface ProductResolved {
    product: ProductDetail;
    error?: any;
}
