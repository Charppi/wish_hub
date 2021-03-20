import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Wifi } from '../../models/wifi'
import UsersService from '../../services/users.service'
import { ListItem } from '../utils/ListItem'

export const WifiList: React.FC<{ onClickUpdate(wifi: Wifi): void }> = ({ onClickUpdate }) => {

    const [wifiList, setWifiList] = useState<Wifi[]>([])

    const getWifiRouters = () => {
        const unsubscriber = db.wifi.where("userId", "==", UsersService.currentUid()).onSnapshot(snapshot => {
            const wifiList: Wifi[] = []
            snapshot.docs.forEach(doc => {
                wifiList.push({ ...doc.data(), uid: doc.id })
            })
            setWifiList(wifiList)
        })
        return unsubscriber
    }

    useEffect(() => {
        const unsubscriber = getWifiRouters()
        return () => unsubscriber()
    }, [])

    return <ListItem readProperty="user" entries={wifiList} onClickUpdate={onClickUpdate}></ListItem>
}
