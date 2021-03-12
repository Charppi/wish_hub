import { db } from "../firebase";
import { Zones } from "../models/zones";
import UsersService from "./users.service";
import { errorToast, presentLoading, presentToast } from "./utils.service";

export default class ZonesService {
    static async createZone(zone: Zones) {
        const loader = await presentLoading()
        try {
            zone.userId = UsersService.currentUid()
            await db.zones.add(zone)
            presentToast("Zona creada correctamente")
        } catch (error) {
            errorToast(error.code)
        } finally {
            await loader.dismiss()
        }
    }
    static async updateZone(zone: Zones) {
        const loader = await presentLoading()
        try {
            await db.zones.doc(zone.uid!).update(zone)
            presentToast("Zona editada correctamente")
        } catch (error) {
            errorToast(error.code)
        } finally {
            await loader.dismiss()
        }
    }
}