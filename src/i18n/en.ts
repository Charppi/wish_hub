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
        routers: {
            name: "Name:",
            ip: "IP:",
            password: "Password:",
            port: "Port:",
            user: "User:",
            createButton: "Create"

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
            username: "Telnet username"
        }
    }
}
