import { en } from "./en"
import { es } from "./es"
import { pl } from "./pl"

interface LabelsInterface {
    es: LangBodyInterface,
    en: LangBodyInterface,
    pl: LangBodyInterface
}

export type Langs = "en" | "es" | "pl"

export interface LangBodyInterface {
    name: string
    shortName: Langs,
    menu: LangMenuInterface
    pages: PagesInterface
    messages: LangUIMessages
    errors: LangUIErrors
    forms: LangUIForms
}

interface GenericFormMessages {
    confirmCreation: string,
    savedSuccessfully: string
}

interface LangUIMessages {
    routers: {
        selectZoneToSearch: string
        confirmCreation: string
        savedSuccessfully: string
    },
    olts: GenericFormMessages,
    customers: GenericFormMessages,
    wifi: GenericFormMessages
}

interface LangUIErrors {
    general: {
        allFieldsAreRequired: string,
        internalError: string
    }
    routers: {
        selectZoneToSearch: string
    }
}

interface LangUIForms {
    createButton: string
    routers: {
        name: string
        user: string
        password: string
        ip: string
        port: string
    },
    olts: {
        name: string
        ip: string
        port: string
        username: string
        password: string
        SNMPReadOnlyCommunity: string
        SNMPReadWriteCommunity: string
        SNMPUDPPort: string
        IPTvModule: string
        OLTHardwareVersion: string
        OLTSoftwareVersion: string
        SupportedPONTypes: string
    },
    customers: {
        names: string
        lastNames: string
        dni: string
        email: string
        address: string
        neighborhood: string
        postalCode: string
        phone: string
    },
    wifi: {
        ip: string
        model: string
        user: string
        password: string
        ssdid: string
        passwordSsid: string
        mac: string
        customerId: string
        routerId: string
    }
}


interface LangMenuInterface {
    home: string,
    customers: string,
    signout: string
    zones: string
    routers: string
    olts: string
    wifi: string
}

export interface PagesInterface {
    home: string
    customers: string
    zones: string
    routers: string
    olts: string
    wifi: string
}

export type PagesNames = "home" | "customers" | "zones" | "routers" | "olts" | "wifi"



export const labels: LabelsInterface = { es, en, pl }