import { IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import { Modal } from '../Modal'

export const CustomersForm: React.FC = () => {

    const [showModal, setShowModal] = useState(false)

    return <Modal onClose={() => setShowModal(false)} showModal={showModal}>
        <form action="">
            <IonItem>
                <IonLabel>
                    Nombres:
                </IonLabel>
                <IonInput />
            </IonItem>
        </form>
    </Modal>

}
