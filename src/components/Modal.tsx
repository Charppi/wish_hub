import { IonModal, IonContent, IonButton, IonToolbar, IonBackButton, IonButtons, IonTitle, IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'
import React from 'react'

export const Modal: React.FC<{ showModal: boolean, onClose: Function, name: string }> = ({ showModal, children, onClose, name }) => {
    return <IonModal isOpen={showModal} onDidDismiss={() => onClose()}>
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton onClick={() => onClose()}>
                    <IonIcon icon={close} />
                </IonButton>
            </IonButtons>
            <IonTitle>{name}</IonTitle>
        </IonToolbar>
        <IonContent className="ion-padding">
            {children}
        </IonContent>
    </IonModal>
}
