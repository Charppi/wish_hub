import { IonButton, IonButtons, IonInput, IonItem, IonLabel, IonText } from "@ionic/react";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Routers } from "../../models/routers";
import RoutersService from "../../services/routers.service";
import { confirmation, presentLoading, presentToast } from "../../services/utils.service";
import { LangContext } from "../LangProvider";

export const RoutersForm: React.FC<{ forUpdateRouter: Routers | null, zoneId: string | null }> = ({ forUpdateRouter, zoneId }) => {
    const [router, setRouter] = useState<Routers | null>(null);
    const [context] = useContext(LangContext)

    useEffect(() => {
        if (forUpdateRouter) setRouter(forUpdateRouter)
    }, [forUpdateRouter])

    const handleSaveRouter = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        confirmation(context.messages.routers.confirmCreation, async () => {
            const loader = await presentLoading()
            let saved = false
            if (forUpdateRouter) saved = await RoutersService.updateRouter(router!)
            else saved = await RoutersService.createRouter(router!, zoneId!)
            presentToast(saved ? context.messages.routers.savedSuccessfully : context.errors.general.allFieldsAreRequired)
            await loader.dismiss()
        })
    }

    return <form onSubmit={handleSaveRouter}>
        <IonItem>
            <IonLabel position="floating">{context.forms.routers.name}</IonLabel>
            <IonInput required onIonChange={(e) => setRouter({ ...router!, name: e.detail.value! })} value={router?.name} />
        </IonItem>
        <IonItem>
            <IonLabel position="floating">{context.forms.routers.user}</IonLabel>
            <IonInput required onIonChange={(e) => setRouter({ ...router!, user: e.detail.value! })} value={router?.user} />
        </IonItem>
        <IonItem>
            <IonLabel position="floating">{context.forms.routers.password}</IonLabel>
            <IonInput required onIonChange={(e) => setRouter({ ...router!, password: e.detail.value! })} type="password" value={router?.password} />
        </IonItem>
        <IonItem>
            <IonLabel position="floating">{context.forms.routers.port}</IonLabel>
            <IonInput required onIonChange={(e) => setRouter({ ...router!, port: e.detail.value! })} type="number" value={router?.port} />
        </IonItem>
        <IonButton type="submit" className="ion-margin-top" fill="outline">{context.forms.createButton}</IonButton>
    </form>
}