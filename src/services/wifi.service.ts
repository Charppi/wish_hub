import { db } from "../firebase";
import { Wifi } from "../models/wifi";
import UsersService from "./users.service";
import { presentLoading } from "./utils.service";

export default class WifiService {
    static async create(wifi: Wifi) {
        const loader = await presentLoading()
        try {
            wifi.userId = UsersService.currentUid()
            await db.wifi.add(wifi)
        } catch (error) {
            loader.dismiss()
            return false
        } finally {
            loader.dismiss()
        }
        return true
    }
    static async update(wifi: Wifi) {
        const loader = await presentLoading()
        try {
            await db.wifi.doc(wifi.uid).update(wifi)
        } catch (error) {
            loader.dismiss()
            return false
        } finally {
            loader.dismiss()
        }
        return true
    }
}