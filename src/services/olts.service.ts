import { db } from "../firebase"
import { Olts as OltsI } from "../models/olts"
import UsersService from "./users.service"
import { presentLoading } from "./utils.service"

export default class OltsService {
    static async create(olt: OltsI) {
        const loader = await presentLoading()
        try {
            olt.userId = UsersService.currentUid()
            await db.olts.add(olt)
        } catch (error) {
            loader.dismiss()
            return true
        } finally {
            loader.dismiss()
        }
        return true
    }
}