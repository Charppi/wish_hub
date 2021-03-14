import { db } from "../firebase";
import { Routers } from "../models/routers";
import { isValidObject, presentToast } from "./utils.service";

export default class RoutersService {
    static async createRouter(router: Routers, zoneId: string) {
        router.zoneId = zoneId
        if (!isValidObject(router, ["name", "user", "password", "ip", "port"])) return false
        await db.routers.add(router)
        return true
    }


    static async updateRouter(router: Routers) {
        if (!isValidObject(router, ["name", "user", "password", "ip", "port"])) return false
        await db.routers.doc(router.uid).update(router)
        return true
    }

}