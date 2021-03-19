import React, { useContext, useState } from 'react'
import { LangContext } from '../components/LangProvider'
import { Modal } from '../components/Modal'
import { OltsForm } from '../components/olts/OltsForm'
import Page from '../components/Page'

export const Olts: React.FC = () => {
    const [showModal, setShowModal] = useState(false)

    return <Page name="olts" create={() => setShowModal(true)}>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
            <OltsForm />
        </Modal>
    </Page>
}