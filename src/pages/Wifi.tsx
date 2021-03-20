import React, { useState } from "react"
import { Modal } from "../components/Modal"
import Page from "../components/Page"
import { WifiForm } from "../components/wifi/WifiForm"
import { WifiList } from "../components/wifi/WifiList"
import { Wifi as WifiI } from "../models/wifi"

export const Wifi: React.FC = () => {
    const [wifi, setWifi] = useState<WifiI | null>(null)
    const [showModal, setShowModal] = useState(false)
    return <Page name="wifi" create={() => {
        setWifi(null);
        setShowModal(true)
    }}>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
            <WifiForm wifiToUpdate={wifi} />
        </Modal>
        <WifiList onClickUpdate={(wifi) => { setWifi(wifi); setShowModal(true) }} />
    </Page>
}