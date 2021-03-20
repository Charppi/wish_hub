import { IonButton, IonButtons, IonInput, IonItem, IonLabel, IonText } from "@ionic/react";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Routers } from "../../models/routers";
import RoutersService from "../../services/routers.service";
import { confirmation, presentLoading, presentToast } from "../../services/utils.service";
import { LangContext } from "../LangProvider";
import { FormTextInput } from "../utils/FormTextInput";
import { SubmitButton } from "../utils/SubmitButton";

export const RoutersForm: React.FC<{ forUpdateRouter: Routers | null, zoneId: string | null }> = ({ forUpdateRouter, zoneId }) => {
    const [router, setRouter] = useState<Routers | null>(null);
    const [context] = useContext(LangContext)
    const { ip, name, password, user, port } = context.forms.routers
    useEffect(() => {
        setRouter(forUpdateRouter)
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
        <FormTextInput value={router?.name} label={name} onIonChange={(val) => setRouter({ ...router!, name: val })} />
        <FormTextInput value={router?.user} label={user} onIonChange={(val) => setRouter({ ...router!, user: val })} />
        <FormTextInput value={router?.password} label={password} inputType="password" onIonChange={(val) => setRouter({ ...router!, password: val })} />
        <FormTextInput value={router?.port} label={port} inputType="number" onIonChange={(val) => setRouter({ ...router!, port: val })} />
        <SubmitButton />
    </form>
}