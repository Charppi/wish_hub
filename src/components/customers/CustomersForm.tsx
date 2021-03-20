import { IonButton } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import { Customers } from '../../models/customers'
import CustomersService from '../../services/customers.service'
import { confirmation, presentToast } from '../../services/utils.service'
import { LangContext } from '../LangProvider'
import { FormTextInput } from '../utils/FormTextInput'
import { SubmitButton } from '../utils/SubmitButton'

export const CustomersForm: React.FC<{ customerForUpdate: Customers | null }> = ({ customerForUpdate }) => {
    const [customer, setCustomer] = useState<Customers | null>(null)
    const [context] = useContext(LangContext)
    const { forms, messages, errors } = context
    const { names, lastNames, address, dni, email, neighborhood, phone, postalCode } = forms.customers

    const hadleSaveOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        confirmation(messages.customers.confirmCreation, async () => {
            const saved: boolean = await (customerForUpdate ? CustomersService.update(customer!) : CustomersService.create(customer!))
            await presentToast(saved ? messages.customers.savedSuccessfully : errors.general.internalError)
        })
    }

    useEffect(() => {
        setCustomer(customerForUpdate)
    }, [customerForUpdate])

    return <form action="" onSubmit={hadleSaveOrUpdate}>
        <FormTextInput label={names} onIonChange={(val) => { setCustomer({ ...customer!, names: val }) }} value={customer?.names} />
        <FormTextInput label={lastNames} onIonChange={(val) => { setCustomer({ ...customer!, lastNames: val }) }} value={customer?.lastNames} />
        <FormTextInput label={address} onIonChange={(val) => { setCustomer({ ...customer!, address: val }) }} value={customer?.address} />
        <FormTextInput label={dni} onIonChange={(val) => { setCustomer({ ...customer!, dni: val }) }} value={customer?.dni} />
        <FormTextInput label={email} onIonChange={(val) => { setCustomer({ ...customer!, email: val }) }} value={customer?.email} />
        <FormTextInput label={neighborhood} onIonChange={(val) => { setCustomer({ ...customer!, neighborhood: val }) }} value={customer?.neighborhood} />
        <FormTextInput label={phone} onIonChange={(val) => { setCustomer({ ...customer!, phone: val }) }} value={customer?.phone} />
        <FormTextInput label={postalCode} onIonChange={(val) => { setCustomer({ ...customer!, postalCode: val }) }} value={customer?.postalCode} />
        <SubmitButton />
    </form>

}
