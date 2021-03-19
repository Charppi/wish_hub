import { IonModal, IonContent, IonButton, IonToolbar, IonBackButton, IonButtons, IonTitle, IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'
import React from 'react'

export const Modal: React.FC<{ showModal: boolean, onClose: Function, }> = ({ showModal, children, onClose }) => {
    return <IonModal isOpen={showModal} onDidDismiss={() => onClose()}>
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton onClick={() => onClose()}>
                    <IonIcon icon={close} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
        <IonContent>
            {children}
        </IonContent>
    </IonModal>
}
