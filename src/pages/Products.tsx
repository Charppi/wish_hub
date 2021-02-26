import { IonCol, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { CategoriesSelect } from '../components/categories/CategoriesSelect'
import { Modal } from '../components/Modal'
import Page from '../components/Page'
import { ProductsForm } from '../components/products/ProductsForm'
import { ProductsList } from '../components/products/ProductsList'
import { Categories } from '../models/categories'
import { Products as ProductsI } from '../models/products'
import { presentToast } from '../services/utils.service'


export const Products: React.FC = () => {

    const [currentCategory, setCurrentCategory] = useState<Categories>()
    const [forUpdate, setForUpdate] = useState<ProductsI>()
    const [showModal, setShowModal] = useState(false)

    return <Page name="Productos" create={async () => {
        if (!currentCategory) {
            await presentToast("Seleccionar una categoría primero", "danger")
        } else {
            setShowModal(true)
            setForUpdate(undefined)
        }
    }}>
        <CategoriesSelect onSelectCategory={(category => setCurrentCategory(category))} />
        <ProductsList currentCategory={currentCategory!} handleUpdate={(product) => {
            setForUpdate(product)
            setShowModal(true)
        }} />
        <Modal showModal={showModal} onClose={() => setShowModal(false)} name={forUpdate ? `Editar ${forUpdate.name}` : "Crear producto"}>
            <ProductsForm onCreateOrUpdate={() => setShowModal(false)} currentCategory={currentCategory!} forUpdate={forUpdate!} />
        </Modal>
    </Page >

}
