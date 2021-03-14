import { useContext, useState } from "react"
import { LangContext } from "../components/LangProvider"
import { Modal } from "../components/Modal"
import Page from "../components/Page"
import { RoutersForm } from "../components/routers/RoutersForm"
import { RouterList } from "../components/routers/RoutersList"
import { ZonesSelect } from "../components/zones/ZonesSelect"
import { Routers as RoutersI } from "../models/routers"
import { Zones } from "../models/zones"
import { presentToast } from "../services/utils.service"

export const Routers: React.FC = () => {
    const [context] = useContext(LangContext)
    const [showModal, setShowModal] = useState(false)
    const [routers, setRouters] = useState<RoutersI[]>([])
    const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
    const [selectedRouter, setSelectedRouter] = useState<RoutersI | null>(null);

    return <Page name="routers" create={() => {
        if (!selectedZoneId) return presentToast(context.errors.routers.selectZoneToSearch, "danger");
        setSelectedRouter(null)
        setShowModal(true)
    }}>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
            <RoutersForm forUpdateRouter={selectedRouter} zoneId={selectedZoneId} />
        </Modal>
        <ZonesSelect onSelect={(routers, zoneId) => {
            setRouters(routers); setSelectedZoneId(zoneId)
        }} />
        <RouterList routers={routers} onUpdateRouter={(router) => { setSelectedRouter(router); setShowModal(true) }} />
    </Page>
}