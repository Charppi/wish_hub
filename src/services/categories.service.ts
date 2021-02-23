import { db } from "../firebase";
import UsersService from "./users.service";
import { errorToast, presentToast, uploadFile } from "./utils.service";
import { Categories } from "../models/categories"

export default class CategoriesService {
    private static async uploadCategoryFile(file: File) {
        return (await uploadFile(file, "categories")) as string
    }
    static async create(category: Categories, file: File) {
        try {
            category.fileLocation = await this.uploadCategoryFile(file)
            category.userId = UsersService.currentUid()
            await db.categories.add(category)
            await presentToast("Categoría creada correctamente", "tertiary")
        } catch (error) {
            await errorToast(error.code)
        }
    }
    static async getCategories() {
        try {
            const userId = UsersService.currentUid()
            return (await db.categories.where("userId", "==", userId).get())
        } catch (error) {
            await errorToast(error.code)
        }
    }
    static async updateCategory(category: Categories, uid: string, file?: File) {
        try {
            if (file) category.fileLocation = await this.uploadCategoryFile(file)
            await db.categories.doc(uid).update(category)
            await presentToast("Categoría editada correctamente", "tertiary")
        } catch (error) {
            await errorToast(error.code)
        }
    }
    static async deleteCategory(categoryId: string) {
        try {
            await db.categories.doc(categoryId).delete();
            await presentToast("La categoría se eliminó correctamente", "tertiary")
            /// TODO: Eliminar el archivo subido
        } catch (error) {
            await errorToast(error.code)
        }
    }
}