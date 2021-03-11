import { db } from "../firebase";
import { Zones } from "../models/zones";
import UsersService from "./users.service";
import { errorToast, presentLoading, presentToast } from "./utils.service";

export default class ZonesService {
    static async createZone(name: string) {
        const loader = await presentLoading()
        try {
            const zone: Zones = { userId: UsersService.currentUid(), name }
            await db.zones.add(zone)
            presentToast("Zona creada correctamente")
        } catch (error) {
            errorToast(error.code)
        } finally {
            await loader.dismiss()
        }
    }
}