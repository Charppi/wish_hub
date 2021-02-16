import { db } from "../firebase";
import UsersService from "./users.service";
import { errorHandler, presentToast, uploadFile } from "./utils.service";

export interface Category {
    name: string
    fileLocation?: string
    userId?: string
}
export default class Categories {
    static async create(category: Category, file: File) {
        try {
            const url = (await uploadFile(file, "categories")) as string
            if (url) category.fileLocation = url
            category.userId = new UsersService().currentUid
            await db.collection("categories").add(category);
            await presentToast("Categoría creada correctamente", "tertiary")
        } catch (error) {
            await presentToast(errorHandler(error.code), "danger")
        }
    }
}