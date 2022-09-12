import { connection } from "./baseDataBase";
import { productsData } from "../Types/typesProducts";

const productsType = (product:any) => {
    const typesProduct:productsData ={
        id:product.id,
        name:product.name,
        price:product.price,
        image_url:product.image_url
    }
    return typesProduct
}

export default async function selectAllProducts():Promise<productsData[] | undefined>{
    const result = await connection("labecommerce_products")

    const allProductsType = result.map((product) => {
        return productsType(product)
    })
    return allProductsType
}