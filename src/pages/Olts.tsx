import React, { useContext, useState } from 'react'
import { LangContext } from '../components/LangProvider'
import { Modal } from '../components/Modal'
import { OltsForm } from '../components/olts/OltsForm'
import { OltsList } from '../components/olts/OltsList'
import Page from '../components/Page'
import { Olts as OltsI } from '../models/olts'

export const Olts: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const [olt, setOlt] = useState<OltsI | null>(null)

    return <Page name="olts" create={() => {
        setOlt(null)
        setShowModal(true)
    }}>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
            <OltsForm oltForUpdate={olt} />
        </Modal>
        <OltsList onClickUpdate={(olt) => {
            setOlt(olt)
            setShowModal(true)
        }} />
    </Page>
}