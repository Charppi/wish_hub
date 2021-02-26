import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonIcon, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import { search } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Categories } from '../../models/categories'
import UsersService from '../../services/users.service'
import { presentLoading } from '../../services/utils.service'
import { Modal } from '../Modal'

export const CategoriesSelect: React.FC<{ onSelectCategory(category: Categories): void }> = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState<Categories[]>([])
    const [showModal, setShowModal] = useState(false)

    const getCategories = () => {
        const unsubscriber = db.categories.where("userId", "==", UsersService.currentUid()).onSnapshot(async snapshot => {
            const loader = await presentLoading()
            const categories: Categories[] = []
            snapshot.docs.forEach(document => {
                categories.push({ ...document.data(), id: document.id })
            })
            setCategories(categories)
            await loader.dismiss()
        })
        return unsubscriber
    }

    useEffect(() => {
        const unsubscriber = getCategories()
        return () => {
            unsubscriber()
        }
    }, [])

    const handleSelectCategory = (categoryId: string) => {
        const category = categories.find(category => category.id === categoryId)
        onSelectCategory(category!)
        setShowModal(false)
    }

    // return 
    return <IonToolbar>
        <h5 className="ion-margin-horizontal">Seleccionar categoría</h5>
        <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>
                <IonIcon slot="icon-only" icon={search} />
            </IonButton>
        </IonButtons>
        <Modal showModal={showModal} onClose={() => setShowModal(false)} name="Seleccionar categoría">
            <IonList>
                {categories.map((category, k) => {
                    return <IonItem detail key={k} lines="none" onClick={() => { handleSelectCategory(category.id!) }}>
                        <IonLabel>{category.name}</IonLabel>
                    </IonItem>
                })}
            </IonList>
        </Modal>
    </IonToolbar>
}
