import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Customers } from '../../models/customers'
import UsersService from '../../services/users.service'
import { LangContext } from '../LangProvider'
import { FormSelect } from '../utils/FormSelect'

export const CustomersSelect: React.FC<{ onIonChange(customerId: string): void, value?: string }> = ({ onIonChange, value }) => {

    const initialState = ""
    const [customers, setCustomers] = useState<Customers[]>([])
    const [localValue, setLocalValue] = useState(initialState)
    const [ctx] = useContext(LangContext)

    const getCustomers = () => {
        const unsb = db.customers.where("userId", "==", UsersService.currentUid()).onSnapshot(async snapshot => {
            const customers: Customers[] = []
            snapshot.docs.forEach(doc => customers.push({ ...doc.data(), uid: doc.id }))
            setCustomers(customers)
        })
        return unsb
    }

    const handleSelectChange = (customerId: string) => {
        setLocalValue(customerId)
        onIonChange(customerId)
    }

    useEffect(() => {
        setLocalValue(value || "")
    }, [value])

    useEffect(() => {
        const unsubs = getCustomers()
        return () => unsubs()
    }, [])

    return <FormSelect label={ctx.forms.wifi.customerId} value={localValue} readProperty="names" entries={customers} onIonChange={handleSelectChange} />
}
