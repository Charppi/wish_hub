import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { Routers } from "../../models/routers";
import { Zones } from "../../models/zones";
import UsersService from "../../services/users.service";
import { presentLoading } from "../../services/utils.service";
import { LangContext } from "../LangProvider";

export const ZonesSelect: React.FC<{ onSelect(routers: Routers[], zoneId: string): void }> = ({ onSelect }) => {
    const [selectedZone, setSelectedZone] = useState<string | null>(null)
    const [zones, setZones] = useState<Zones[]>([])

    const getRouters = () => {
        if (selectedZone) {
            const unsubscriber = db.routers.where("zoneId", "==", selectedZone).onSnapshot(async snapshot => {
                const loader = await presentLoading()
                const routers: Routers[] = []
                snapshot.docs.forEach(router => {
                    routers.push({ ...router.data(), uid: router.id })
                })
                onSelect(routers, selectedZone)
                loader.dismiss()
            })
            return unsubscriber
        }
        return () => { }
    }

    const getZones = () => {
        const unsubscriber = db.zones.where("userId", "==", UsersService.currentUid()).onSnapshot(async snapshot => {
            const loader = await presentLoading()
            const zones: Zones[] = []
            snapshot.docs.forEach(zone => {
                zones.push({ ...zone.data(), uid: zone.id })
            })
            setZones(zones)
            loader.dismiss()
        })
        return unsubscriber
    }


    useEffect(() => {
        const unsubscriber = getRouters()
        return () => unsubscriber!()
    }, [selectedZone])


    useEffect(() => {
        const unsubscriber = getZones()
        return () => unsubscriber()
    }, [])

    const [context] = useContext(LangContext)

    return <IonItem>
        <IonLabel>{context.messages.routers.selectZoneToSearch}</IonLabel>
        <IonSelect onIonChange={(e) => setSelectedZone(e.detail.value)}>
            {zones.map((zone, k) => <IonSelectOption value={zone.uid} key={k}>{zone.name}</IonSelectOption>)}
        </IonSelect>
    </IonItem>
}