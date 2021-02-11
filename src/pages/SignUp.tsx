import { IonPage, IonContent, IonBackButton, IonButtons, IonTitle, IonToolbar, IonHeader } from '@ionic/react'
import React from 'react'

export const SignUp = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Crear cuenta</h2>
            </IonContent>
        </IonPage>
    )
}
