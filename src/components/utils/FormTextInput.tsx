import { IonInput, IonItem, IonLabel } from "@ionic/react"
import { TextFieldTypes } from "@ionic/core"
import React, { useEffect, useState } from "react"

export const FormTextInput: React.FC<{
    label?: string,
    inputType?: TextFieldTypes,
    onIonChange(value: string): void,
    required?: boolean,
    value?: string
}> = ({ label, inputType = "text", onIonChange, required = true, value }) => {

    const [localValue, setLocalValue] = useState("")

    const handleValueChange = (value: string) => {
        setLocalValue(value)
        onIonChange(value)
    }

    useEffect(() => {
        if (value) setLocalValue(value)
    }, [value])

    return <IonItem lines="none">
        {label && <IonLabel position="floating">{label}:</IonLabel>}
        <IonInput required={required} value={localValue} type={inputType} onIonChange={(e) => handleValueChange(e.detail.value!)} />
    </IonItem>
}