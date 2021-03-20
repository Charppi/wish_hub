import { LangBodyInterface } from "./labels";

export const en: LangBodyInterface = {
    name: "English",
    shortName: "en",
    menu: {
        home: "Home",
        customers: "Customers",
        zones: "Zones",
        routers: "Mikrotik",
        signout: "Sign Out",
        olts: "Olt's",
        wifi: "Wifi"
    },
    pages: {
        home: "Home",
        customers: "Customers",
        zones: "Zones",
        routers: "Mikrotik",
        olts: "Olt's",
        wifi: "Wifi"
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
        },
        wifi: {
            confirmCreation: "Are you sure to save this Wifi Router?",
            savedSuccessfully: "Wifi Router saved successfully"
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
            name: "Name",
            ip: "IP",
            password: "Password",
            port: "Port",
            user: "User"
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
        },
        wifi: {
            customerId: "Customer",
            ip: "IP",
            mac: "MAC",
            model: "Model",
            password: "Password",
            passwordSsid: "SSID Password",
            ssdid: "SSID",
            user: "User",
            routerId: "Router"
        }
    }
}
