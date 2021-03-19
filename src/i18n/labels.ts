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
    olts: GenericFormMessages
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
    routers: {
        name: string
        user: string
        password: string
        ip: string
        port: string
        createButton: string
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
    }
}


interface LangMenuInterface {
    home: string,
    customers: string,
    signout: string
    zones: string
    routers: string
    olts: string
}

export interface PagesInterface {
    home: string
    customers: string
    zones: string
    routers: string
    olts: string
}

export type PagesNames = "home" | "customers" | "zones" | "routers" | "olts"



export const labels: LabelsInterface = { es, en, pl }