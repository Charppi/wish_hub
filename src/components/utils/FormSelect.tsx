import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react"
import React, { useEffect, useState } from "react"

interface SelectEntries { key: string | number, value: string | number }

export const FormSelect: React.FC<{
    entries: SelectEntries[],
    label?: string,
    onIonChange(value: string): void,
    value?: string
}> = ({ entries, label, onIonChange, value }) => {

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
            {entries.map((entry, k) => <IonSelectOption key={k} value={entry.key} >{entry.value}</IonSelectOption>)}
        </IonSelect>
    </IonItem>
}