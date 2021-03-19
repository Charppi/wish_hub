export interface Olts {
    uid?: string
    userId?: string
    name: string
    ip: string
    port: string
    username: string
    password: string
    SNMPReadOnlyCommunity: string
    SNMPReadWriteCommunity: string
    SNMPUDPPort: string
    IPTvModule: boolean
    OLTHardwareVersion: string
    OLTSoftwareVersion: string
    supportedPONTypes: supportedPONTypes
}

export type supportedPONTypes = "GPON" | "EPON" | "GPON+EPON"

export enum supportedPON {
    gpon = "GPON",
    epon = "EPON",
    gpon_epon = "GPON+EPON",
}