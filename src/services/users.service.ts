import { auth, db } from "../firebase";
import localforage from "localforage"
import { confirmation, errors, errorHandler, presentLoading, presentToast, errorToast } from "./utils.service";
import { Users } from "../models/users";

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
    static async signUp(_: Users) {
        const loader = await presentLoading()
        try {
            const { user } = await auth.createUserWithEmailAndPassword(_.email, _.password!);
            _.uid = user?.uid
            await db.users.doc(_.uid).set(_)
            presentToast("Usuario creado correctamente. Bienvenido a Wishub xd.")
        } catch (error) {
            errorToast(error.code)
        } finally {
            await loader.dismiss()
        }
    }
}