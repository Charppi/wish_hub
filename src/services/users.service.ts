import { auth, db } from "../firebase";
import localforage from "localforage"
import { confirmation, errors, firebaseErrors, presentLoading, presentToast } from "./utils.service";

export default class UsersService {
    static async signIn(email: string, password: string) {
        const loading = await presentLoading()
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            const userData = await db.collection("users").doc(user?.uid).get()
            await localforage.setItem("userData", { ...userData.data(), uid: user?.uid })
        } catch (error) {
            await presentToast(firebaseErrors(error.code), "danger")
        } finally {
            loading.dismiss()
        }
    }
    static async getCurrentUserData() {
        const uid = auth.currentUser?.uid
        if (!uid) throw errors.user_not_found
        return this.getUserDataById(uid);
    }
    static async getUserDataById(uid: string) {
        try {
            return ((await db.collection("users").doc(uid).get()).data()) as { name: string, email: string }
        } catch (error) {
            throw error
        }
    }
    static async signOut() {
        confirmation("¿Estas seguro de que deseas cerrar sesión", async () => {
            const loading = await presentLoading()
            try {
                await auth.signOut()
            } catch (error) {
                await presentToast(firebaseErrors(error.code), "danger")
            } finally {
                loading.dismiss()
            }
        })
    }
}