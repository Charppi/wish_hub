import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import { confirmation } from '../../services/utils.service'
import ZonesService from '../../services/zones.service'

export const ZonesForm: React.FC = () => {

    const [name, setName] = useState("")

    const handleSubmit = async () => {
        await ZonesService.createZone(name)
    }

    return <form action="" onSubmit={(e) => {
        e.preventDefault();
        confirmation(`¿Está seguro de crear la zona ${name}?`, async () => {
            await handleSubmit()
        })
    }}>
        <IonItem>
            <IonLabel>Nombre</IonLabel>
            <IonInput value={name} onIonChange={(e) => { setName(e.detail.value!) }} type="text" />
        </IonItem>
        <IonButton type="submit" className="ion-margin-top" expand="block">Guardar</IonButton>
    </form>
}
