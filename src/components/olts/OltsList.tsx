import React, { useEffect, useState } from "react"
import { db } from "../../firebase"
import { Olts } from "../../models/olts"
import UsersService from "../../services/users.service"
import { ListItem } from "../utils/ListItem"

export const OltsList: React.FC<{ onClickUpdate(old: Olts): void }> = ({ onClickUpdate }) => {

    const [olts, setOlts] = useState<Olts[]>([])

    const getOlts = () => {
        const unsubscriber = db.olts.where("userId", "==", UsersService.currentUid()).onSnapshot(snapshot => {
            const olts: Olts[] = []
            snapshot.docs.forEach(doc => {
                olts.push({ ...doc.data(), uid: doc.id })
            })
            setOlts(olts)
        })
        return unsubscriber
    }

    useEffect(() => {
        const unsubscriber = getOlts()
        return () => unsubscriber()
    }, [])


    return <ListItem readProperty="name" entries={olts!} onClickUpdate={onClickUpdate} />
}