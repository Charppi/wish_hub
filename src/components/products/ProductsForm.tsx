import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Categories } from '../../models/categories'
import { Products } from '../../models/products'
import ProductsService from '../../services/products.service'
import { presentLoading } from '../../services/utils.service'

export const ProductsForm: React.FC<{ currentCategory: Categories, forUpdate: Products, onCreateOrUpdate(): void }> = ({ currentCategory, forUpdate, onCreateOrUpdate }) => {

    const [product, setProduct] = useState<Products>()

    useEffect(() => {
        if (currentCategory) {
            setProduct(product => ({
                ...product!,
                categoryId: currentCategory.id!,
                userId: currentCategory.userId!
            }))
        }
    }, [currentCategory])

    useEffect(() => {
        if (forUpdate) setProduct(forUpdate!)
        else setProduct(product => ({ ...product, name: "", price: "", description: "" }))
    }, [forUpdate])

    const handleSaveOrUpdate = async () => {
        const loader = await presentLoading()
        if (forUpdate) {
            await ProductsService.updateProduct(product!, forUpdate.id!)
        } else {
            await ProductsService.createProduct(product!)
        }
        handleResetForm()
        onCreateOrUpdate()
        await loader.dismiss()
    }

    const canCreate = () => {
        if (product && product.description && product.categoryId && product.name) return true
        return false
    }

    const handleResetForm = () => {
        setProduct({ ...product!, name: "", description: "", price: "0" })
    }

    return (
        <form action="" onReset={handleResetForm}>
            <IonItem>
                <IonLabel>Nombre:</IonLabel>
                <IonInput onIonChange={(e) => { setProduct({ ...product!, name: e.detail.value! }) }} value={product?.name} type="text" />
            </IonItem>
            <IonItem>
                <IonLabel>Precio:</IonLabel>
                <IonInput onIonChange={(e) => { setProduct({ ...product!, price: (e.detail.value!) }) }} value={product?.price} type="number" />
            </IonItem>
            <IonItem>
                <IonLabel>Descripción:</IonLabel>
                <IonTextarea onIonChange={(e) => {
                    setProduct({ ...product!, description: e.detail.value! })
                }} value={product?.description}></IonTextarea>
            </IonItem>
            <IonButtons className="ion-margin-top">
                <IonButton disabled={!canCreate()} onClick={handleSaveOrUpdate}>Guardar producto</IonButton>
                <IonButton type="reset">Limpiar</IonButton>
            </IonButtons>
        </form>
    )
}