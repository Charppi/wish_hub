import { db } from "../firebase";
import { Customers } from "../models/customers";
import UsersService from "./users.service";
import { errorToast, presentLoading } from "./utils.service";

export default class CustomersService {
    static async create(customer: Customers): Promise<boolean> {
        const loader = await presentLoading()
        try {
            customer.userId = UsersService.currentUid()
            await db.customers.add(customer)
        } catch (error) {
            return false
        } finally {
            loader.dismiss()
        }
        return true
    }
    static async update(customer: Customers): Promise<boolean> {
        const loader = await presentLoading()
        try {
            await db.customers.doc(customer.uid).update(customer)
        } catch (error) {
            return false
        } finally {
            loader.dismiss()
        }
        return true
    }
}