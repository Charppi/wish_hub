import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Routers } from '../../models/routers'
import UsersService from '../../services/users.service'
import { LangContext } from '../LangProvider'
import { FormSelect } from '../utils/FormSelect'

export const RoutersSelect: React.FC<{ onIonChange(routerId: string): void, value?: string }> = ({ onIonChange, value }) => {

    const initialState = ""
    const [routers, setRouters] = useState<Routers[]>([])
    const [localValue, setLocalValue] = useState(initialState)
    const [ctx] = useContext(LangContext)

    const getRouters = () => {
        const unsb = db.routers.where("userId", "==", UsersService.currentUid()).onSnapshot(async snapshot => {
            const routers: Routers[] = []
            snapshot.docs.forEach(doc => routers.push({ ...doc.data(), uid: doc.id }))
            setRouters(routers)
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
        const unsubs = getRouters()
        return () => unsubs()
    }, [])

    return <FormSelect label={ctx.forms.wifi.routerId} value={localValue} readProperty="name" entries={routers} onIonChange={handleSelectChange} />
}
