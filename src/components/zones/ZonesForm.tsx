import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import { Zones } from '../../models/zones'
import { confirmation, presentToast } from '../../services/utils.service'
import ZonesService from '../../services/zones.service'
import { LangContext } from '../LangProvider'

export const ZonesForm: React.FC<{ zoneForUpdate: Zones | null }> = ({ zoneForUpdate }) => {
    const [context] = useContext(LangContext)
    const [zone, setZone] = useState<Zones | null>(null)
    useEffect(() => {
        setZone(zoneForUpdate)
    }, [zoneForUpdate])

    const handleSubmit = async () => {
        console.log(zone);
        if (zone?.uid) {
            await ZonesService.updateZone(zone!)
        } else {
            await ZonesService.createZone(zone!)
        }
    }

    return <form action="" onSubmit={(e) => {
        e.preventDefault();
        if (zone?.name.length == 0) return presentToast("Ingrese un nombre, por favor", "danger")
        confirmation(`¿Está seguro de crear la zona ${zone!.name}?`, async () => {
            await handleSubmit()
        })
    }}>
        <IonItem>
            <IonLabel>Nombre</IonLabel>
            <IonInput value={zone?.name} onIonChange={(e) => { setZone({ ...zone!, name: e.detail.value! }) }} type="text" />
        </IonItem>
        <IonButton type="submit" className="ion-margin-top" expand="block">{context.forms.createButton}</IonButton>
    </form>
}
