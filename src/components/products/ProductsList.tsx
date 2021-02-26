import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonList, IonText } from '@ionic/react'
import { pencil, trash } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Categories } from '../../models/categories'
import { Products } from '../../models/products'
import ProductsService from '../../services/products.service'
import { confirmation, presentLoading } from '../../services/utils.service'


export const ProductsList: React.FC<{ currentCategory?: Categories, handleUpdate(product: Products): void }> = ({ currentCategory, handleUpdate }) => {

    const [products, setProducts] = useState<Products[]>([]);

    const getProducts = (categoryId: string) => {
        db.products.where("categoryId", "==", categoryId).onSnapshot(async snapshot => {
            const loader = await presentLoading()
            const products: Products[] = []
            snapshot.forEach(product => {
                products.push({ ...product.data(), id: product.id })
            })
            setProducts(products)
            await loader.dismiss()
        })
    }

    const hanleDeleteProduct = (productId: string) => {
        confirmation("¿Está seguro de que desea eliminar el producto seleccionado?", async () => {
            const loader = await presentLoading()
            await ProductsService.deleteProduct(productId)
            await loader.dismiss()
        })
    }

    useEffect(() => {
        if (currentCategory) {
            getProducts(currentCategory.id!)
        }
    }, [currentCategory])

    return currentCategory ? <IonContent>
        <IonText>
            <h2 className="ion-margin-horizontal">{currentCategory.name}</h2>
        </IonText>
        {products.length > 0 && <IonList>
            {products.map((product, k) => {
                return <IonItem key={k} lines="none">
                    <IonLabel>{product.name}</IonLabel>
                    <IonButtons>
                        <IonButton onClick={() => handleUpdate(product)} slot="end">
                            <IonIcon icon={pencil} slot="icon-only" />
                        </IonButton>
                        <IonButton slot="end" onClick={() => hanleDeleteProduct(product.id!)}>
                            <IonIcon icon={trash} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                </IonItem>
            })}
        </IonList>}
    </IonContent> : <></>

}
