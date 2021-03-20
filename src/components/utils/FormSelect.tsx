import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react"
import React, { useEffect, useState } from "react"


export const FormSelect: React.FC<{
    entries: any[],
    label?: string,
    onIonChange(value: string): void,
    value?: string,
    readProperty: string
}> = ({ entries, label, onIonChange, value, readProperty }) => {

    const [localValue, setLocalValue] = useState("")

    const handleSelectChange = (value: string) => {
        setLocalValue(value)
        onIonChange(value)
    }

    useEffect(() => {
        if (value) setLocalValue(value)
    }, [value])

    return <IonItem lines="none">
        {label && <IonLabel position="floating">{label}</IonLabel>}
        <IonSelect value={localValue} onIonChange={(e) => { handleSelectChange(e.detail.value!) }}>
            {entries.map((entry, k) => <IonSelectOption key={k} value={entry.uid} >{entry[readProperty]}</IonSelectOption>)}
        </IonSelect>
    </IonItem>
}