import { IonButton, IonCheckbox, IonItem, IonItemDivider, IonLabel, IonList, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonTitle } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import { Olts, supportedPON, supportedPONTypes } from '../../models/olts'
import { confirmation, presentToast } from '../../services/utils.service'
import { LangContext } from '../LangProvider'
import { FormSelect } from '../utils/FormSelect'
import { FormTextInput } from '../utils/FormTextInput'
import OltsService from "../../services/olts.service"
import { SubmitButton } from '../utils/SubmitButton'


export const OltsForm: React.FC<{ oltForUpdate: Olts | null }> = ({ oltForUpdate }) => {
    const [context] = useContext(LangContext)
    const [olt, setOlt] = useState<Olts | null>(null)
    const {
        IPTvModule,
        OLTHardwareVersion,
        OLTSoftwareVersion,
        SNMPReadOnlyCommunity,
        SNMPReadWriteCommunity,
        SNMPUDPPort,
        SupportedPONTypes,
        ip,
        name,
        password,
        port,
        username,
    } = context.forms.olts

    const selectEntries = [{
        uid: supportedPON.epon, name: supportedPON.epon
    },
    {
        uid: supportedPON.gpon_epon, name: supportedPON.gpon_epon
    },
    {
        uid: supportedPON.gpon, name: supportedPON.gpon
    }]

    const handleSaveOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        confirmation(context.messages.olts.confirmCreation, async () => {
            const saved = await (oltForUpdate ? OltsService.update(olt!) : OltsService.create(olt!))
            await presentToast(saved ? context.messages.olts.savedSuccessfully : context.errors.general.internalError)
        })
    }

    useEffect(() => {
        setOlt(oltForUpdate)
    }, [oltForUpdate])

    return <form action="" onSubmit={handleSaveOrUpdate}>
        <FormTextInput value={olt?.name} onIonChange={(val) => setOlt({ ...olt!, name: val })} label={name} />
        <FormTextInput value={olt?.ip} onIonChange={(val) => setOlt({ ...olt!, ip: val })} label={ip} />
        <FormTextInput value={olt?.port} onIonChange={(val) => setOlt({ ...olt!, port: val })} label={port} />
        <FormTextInput value={olt?.username} onIonChange={(val) => setOlt({ ...olt!, username: val })} label={username} />
        <FormTextInput inputType="password" value={olt?.password} onIonChange={(val) => setOlt({ ...olt!, password: val })} label={password} />
        <FormTextInput value={olt?.SNMPReadOnlyCommunity} onIonChange={(val) => setOlt({ ...olt!, SNMPReadOnlyCommunity: val })} label={SNMPReadOnlyCommunity} />
        <FormTextInput value={olt?.SNMPReadWriteCommunity} onIonChange={(val) => setOlt({ ...olt!, SNMPReadWriteCommunity: val })} label={SNMPReadWriteCommunity} />
        <FormTextInput value={olt?.SNMPUDPPort} onIonChange={(val) => setOlt({ ...olt!, SNMPUDPPort: val })} label={SNMPUDPPort} />
        <FormTextInput value={olt?.OLTHardwareVersion} onIonChange={(val) => setOlt({ ...olt!, OLTHardwareVersion: val })} label={OLTHardwareVersion} />
        <FormTextInput value={olt?.OLTSoftwareVersion} onIonChange={(val) => setOlt({ ...olt!, OLTSoftwareVersion: val })} label={OLTSoftwareVersion} />
        <IonItem lines="none">
            <IonLabel>{IPTvModule}</IonLabel>
            <IonCheckbox onIonChange={(e) => setOlt({ ...olt!, IPTvModule: e.detail.checked })}></IonCheckbox>
        </IonItem>
        <FormSelect
            readProperty="name"
            value={olt?.supportedPONTypes || supportedPON.epon}
            entries={selectEntries}
            onIonChange={(value: supportedPONTypes) => setOlt({ ...olt!, supportedPONTypes: value })}
            label={SupportedPONTypes} />
        <SubmitButton />
    </form>
}