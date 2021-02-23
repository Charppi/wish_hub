import { IonButton, IonButtons, IonCard, IonCardContent, IonIcon, IonInput, IonItem, IonList } from '@ionic/react'
import { pencilOutline, trash } from 'ionicons/icons';
import React, { useEffect, useState } from 'react'
import { Categories } from "../../models/categories"
import CategoriesService from '../../services/categories.service';
import { confirmation, presentLoading } from '../../services/utils.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../../firebase';
import UsersService from '../../services/users.service';


export const CategoriesList: React.FC<{ onUpdate(category: Categories): void }> = ({ onUpdate }) => {

    const [categories, setCategories] = useState<Categories[]>([])

    const deleteCategory = async (categoryId: string) => {
        confirmation(`¿Desea eliminar la categoría? Se borrarán los productos que pertenezcan a ella también.`, async () => {
            await CategoriesService.deleteCategory(categoryId);
        })
    }

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

    return <IonCard>
        <IonCardContent>
            <IonList>
                {categories && categories.map((category, k) => {
                    return <IonItem lines="none" detail={false} key={k}>
                        <a target="_blank" href={category.fileLocation}>{category.name}</a>
                        <IonButtons slot="end">
                            <IonButton shape="round" onClick={() => { onUpdate(category) }}>
                                <IonIcon slot="icon-only" icon={pencilOutline} />
                            </IonButton>
                            <IonButton shape="round" onClick={() => { deleteCategory(category.id!) }}>
                                <IonIcon slot="icon-only" icon={trash} />
                            </IonButton>
                        </IonButtons>
                    </IonItem>
                })}
            </IonList>
        </IonCardContent>
    </IonCard>

}