import ServiceContainer from "../containers/service.container";
import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/Product/product.model";

class ProductService extends ServiceContainer<Product> {
    constructor() {
        super(ProductModel);
    }
}

export default new ProductService();
