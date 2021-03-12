import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonList, IonLoading } from '@ionic/react'
import { pencil } from 'ionicons/icons';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { Zones } from '../../models/zones';
import UsersService from '../../services/users.service';

export const ZonesList: React.FC<{ onUpdate(zone: Zones): void }> = ({ onUpdate }) => {
    const [zones, setZones] = useState<Zones[]>([])
    const [isBusy, setIsBusy] = useState(true)

    const getZones = () => {
        const userId = UsersService.currentUid()
        return db.zones.where("userId", "==", userId).onSnapshot(snapshot => {
            const zones: Zones[] = []
            snapshot.docs.forEach(zone => {
                zones.push({ ...zone.data(), uid: zone.id })
            })
            setZones(zones)
        })
    }

    useEffect(() => {
        const unsubscriber = getZones()
        return () => unsubscriber()
    }, [])

    return zones.length > 0 ? <IonList>
        {zones.map((zone, k) => {
            return <IonItem lines="none" key={k}>
                <IonLabel>{zone.name}</IonLabel>
                <IonButtons>
                    <IonButton color="default" slot="end" onClick={() => onUpdate(zone)}>
                        <IonIcon slot="icon-only" icon={pencil}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonItem>
        })}
    </IonList> : <IonLoading isOpen={isBusy} onDidDismiss={() => setIsBusy(false)} ></IonLoading>
}
