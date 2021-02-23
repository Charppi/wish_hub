import { auth, db } from "../firebase";
import localforage from "localforage"
import { confirmation, errors, errorHandler, presentLoading, presentToast } from "./utils.service";

export default class UsersService {
    static async signIn(email: string, password: string) {
        const loading = await presentLoading()
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            const userData = await db.users.doc(user?.uid).get()
            await localforage.setItem("userData", { ...userData.data(), uid: user?.uid })
        } catch (error) {
            await presentToast(errorHandler(error.code), "danger")
        } finally {
            loading.dismiss()
        }
    }

    static currentUid() {
        return auth.currentUser?.uid!;
    }

    static async getCurrentUserData() {
        const uid = auth.currentUser?.uid
        if (!uid) throw errors.user_not_found
        return this.getUserDataById(uid);
    }
    static async getUserDataById(uid: string) {
        try {
            return (await db.users.doc(uid).get()).data()!
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
                await presentToast(errorHandler(error.code), "danger")
            } finally {
                loading.dismiss()
            }
        })
    }
    static async changeWhatsappStatus(userId: string, running: boolean) {
        await db.users.doc(userId).set({
            whatsappRunning: running
        }, { merge: true })
    }
}