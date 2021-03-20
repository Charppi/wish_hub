import React, { useContext, useEffect, useState } from "react"
import { Wifi } from "../../models/wifi"
import { LangContext } from "../LangProvider"
import { SubmitButton } from "../utils/SubmitButton"
import { FormTextInput } from "../utils/FormTextInput"
import { confirmation, presentToast } from "../../services/utils.service"
import WifiService from "../../services/wifi.service"
import { CustomersSelect } from "../customers/CustomersSelect"
import { RoutersSelect } from "../routers/RouterSelect"

export const WifiForm: React.FC<{ wifiToUpdate: Wifi | null }> = ({ wifiToUpdate }) => {
    const [ctx] = useContext(LangContext)
    const [wifi, setWifi] = useState<Wifi | null>(null)
    const { ip, mac, model, password, passwordSsid, ssdid, user } = ctx.forms.wifi

    const handleSaveOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        confirmation(ctx.messages.wifi.confirmCreation, async () => {
            const saved: boolean = await (wifiToUpdate ? WifiService.update(wifi!) : WifiService.create(wifi!))
            presentToast(saved ? ctx.messages.wifi.savedSuccessfully : ctx.errors.general.internalError)
        })
    }

    useEffect(() => {
        setWifi(wifiToUpdate)
    }, [wifiToUpdate])

    return <form action="" onSubmit={handleSaveOrUpdate}>
        <FormTextInput label={ip} value={wifi?.ip} onIonChange={(val) => setWifi({ ...wifi!, ip: val })} ></FormTextInput>
        <FormTextInput label={model} value={wifi?.model} onIonChange={(val) => setWifi({ ...wifi!, model: val })} ></FormTextInput>
        <FormTextInput label={user} value={wifi?.user} onIonChange={(val) => setWifi({ ...wifi!, user: val })} ></FormTextInput>
        <FormTextInput label={password} value={wifi?.password} onIonChange={(val) => setWifi({ ...wifi!, password: val })} ></FormTextInput>
        <FormTextInput label={ssdid} value={wifi?.ssdid} onIonChange={(val) => setWifi({ ...wifi!, ssdid: val })} ></FormTextInput>
        <FormTextInput label={passwordSsid} value={wifi?.passwordSsid} onIonChange={(val) => setWifi({ ...wifi!, passwordSsid: val })} ></FormTextInput>
        <FormTextInput label={mac} value={wifi?.mac} onIonChange={(val) => setWifi({ ...wifi!, mac: val })} ></FormTextInput>
        <CustomersSelect value={wifi?.customerId} onIonChange={(customerId) => setWifi({ ...wifi!, customerId })} />
        <RoutersSelect value={wifi?.routerId} onIonChange={(routerId) => setWifi({ ...wifi!, routerId })} />
        <SubmitButton />
    </form >
}