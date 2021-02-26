import React, { useState } from 'react'
import { CategoriesForm } from '../components/categories/CategoriesForm'
import { CategoriesList } from '../components/categories/CategoriesList'
import { Modal } from '../components/Modal'
import Page from '../components/Page'
import { Categories as CategoriesI } from "../models/categories"

export const Categories: React.FC = () => {

    const [category, setCategory] = useState<CategoriesI>()
    const [showModal, setShowModal] = useState(false)

    return <Page name="Categorías" create={() => setShowModal(true)}>
        <Modal showModal={showModal} name={category?.id ? "Editar categoría" : "Crear categoría"} onClose={() => setShowModal(false)}>
            <CategoriesForm forUpdate={category} onReset={() => setCategory({ name: "" })} />
        </Modal>
        <CategoriesList onUpdate={(category) => {
            setCategory(category)
            setShowModal(true)
        }} />
    </Page>
}