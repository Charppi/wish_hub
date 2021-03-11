import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import Page from '../components/Page'
import { ZonesForm } from '../components/zones/ZonesForm'

export const Zones: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Page name="zones" create={() => setShowModal(true)}>
            <Modal showModal={showModal} onClose={() => setShowModal(false)}>
                <ZonesForm />
            </Modal>
        </Page>
    )
}
