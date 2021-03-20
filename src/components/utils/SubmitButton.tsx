import { IonButton } from "@ionic/react"
import React, { useContext } from "react"
import { LangContext } from "../LangProvider"

export const SubmitButton: React.FC = () => {
    const [ctx] = useContext(LangContext)
    return <IonButton className="ion-margin" type="submit">{ctx.forms.createButton}</IonButton>
}