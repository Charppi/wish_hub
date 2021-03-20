import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Customers } from '../../models/customers'
import UsersService from '../../services/users.service'
import { presentLoading } from '../../services/utils.service'
import { ListItem } from '../utils/ListItem'

export const CustomersList: React.FC<{ onClickUpdate(customer: Customers): void }> = ({ onClickUpdate }) => {

    const [customers, setCustomers] = useState<Customers[]>([])

    const getCustomers = () => {
        const unsubscriber = db.customers.where("userId", "==", UsersService.currentUid()).onSnapshot(async snapshot => {
            const loader = await presentLoading()
            const customers: Customers[] = []
            snapshot.docs.forEach(doc => {
                customers.push({ ...doc.data(), uid: doc.id })
            })
            setCustomers(customers)
            loader.dismiss()
        })
        return unsubscriber
    }

    useEffect(() => {
        const unsubscriber = getCustomers()
        return () => unsubscriber()
    }, [])

    return <ListItem readProperty="names" onClickUpdate={onClickUpdate} entries={customers} />
}
