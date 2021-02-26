import { db } from "../firebase";
import { Products } from "../models/products";
import { errorToast, presentToast } from "./utils.service";

export default class ProductsService {
    static async createProduct(product: Products) {
        try {
            await db.products.add(product);
            await presentToast("Producto creado correctamente", "tertiary")
        } catch (error) {
            await errorToast(error.code)
        }
    }
    static async updateProduct(product: Products, uid: string) {
        try {
            await db.products.doc(uid).update(product);
            await presentToast("Producto editado correctamente", "tertiary")
        } catch (error) {
            await errorToast(error.code)
        }
    }
    static async deleteProduct(uid: string) {
        try {
            await db.products.doc(uid).delete()
            await presentToast("Producto eliminado correctamente", "tertiary")
        } catch (error) {
            await errorToast(error.code)
        }
    }
}