import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import Page from '../components/Page'
import { ZonesForm } from '../components/zones/ZonesForm'
import { ZonesList } from '../components/zones/ZonesList'
import { Zones as ZonesI } from '../models/zones'

export const Zones: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [zoneForUpdate, setZoneForUpdate] = useState<ZonesI | null>(null)

    return (
        <Page name="zones" create={() => {
            setZoneForUpdate(null)
            setShowModal(true)
        }}>
            <Modal showModal={showModal} onClose={() => setShowModal(false)}>
                <ZonesForm zoneForUpdate={zoneForUpdate} />
            </Modal>
            <ZonesList onUpdate={(zone) => {
                setZoneForUpdate(zone);
                setShowModal(true)
            }} />
        </Page>
    )
}
