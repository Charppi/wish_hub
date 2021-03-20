import { LangBodyInterface } from "./labels";

export const en: LangBodyInterface = {
    name: "English",
    shortName: "en",
    menu: {
        home: "Home",
        customers: "Customers",
        zones: "Zones",
        routers: "Routers",
        signout: "Sign Out",
        olts: "Olt's"
    },
    pages: {
        home: "Home",
        customers: "Customers",
        zones: "Zones",
        routers: "Routers",
        olts: "Olt's"
    },
    messages: {
        routers: {
            selectZoneToSearch: "Select zone",
            confirmCreation: "Are you sure to save this router?",
            savedSuccessfully: "Router saved successfully"
        },
        olts: {
            confirmCreation: "Are you sure to save this OLT?",
            savedSuccessfully: "Olt saved successfully"
        },
        customers: {
            confirmCreation: "Are you sure to save this customer?",
            savedSuccessfully: "Customer saved successfully"
        }
    },
    errors: {
        general: {
            allFieldsAreRequired: "Please ensure to fill the required fields",
            internalError: "An internal error has ocurred. Try again later please."
        },
        routers: {
            selectZoneToSearch: "Select a zone please"
        }
    },
    forms: {
        createButton: "Save",
        routers: {
            name: "Name:",
            ip: "IP:",
            password: "Password:",
            port: "Port:",
            user: "User:"
        },
        olts: {
            IPTvModule: "Module IPTV",
            OLTHardwareVersion: "Hardware version",
            OLTSoftwareVersion: "Software version",
            SNMPReadOnlyCommunity: "SNMP Read Only",
            SNMPReadWriteCommunity: "SNMP Read & Write",
            SNMPUDPPort: "SNMP Port",
            SupportedPONTypes: "Supported PON  Type",
            ip: "Ip",
            name: "Name",
            password: "Telnet password",
            port: "Telnet TCP port",
            username: "Telnet username",
        },
        customers: {
            address: "Address",
            dni: "DNI",
            email: "Email",
            lastNames: "Last Names",
            names: "Names",
            neighborhood: "Neighborhood",
            phone: "Phone",
            postalCode: "Postal code",
        }
    }
}
