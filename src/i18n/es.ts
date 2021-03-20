import { LangBodyInterface } from "./labels";

export const es: LangBodyInterface = {
    name: "Español",
    shortName: "es",
    menu: {
        home: "Inicio",
        customers: "Clientes",
        zones: "Zonas",
        signout: "Cerrar sesión",
        routers: "Routers",
        olts: "Olt's"
    },
    pages: {
        home: "Inicio",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Routers",
        olts: "Olt's"
    },
    messages: {
        routers: {
            selectZoneToSearch: "Seleccionar zona",
            confirmCreation: "¿Estás seguro de guardar el router?",
            savedSuccessfully: "Router guardado exitosamente"
        },
        olts: {
            confirmCreation: "¿Estás seguro de guardar la OLT?",
            savedSuccessfully: "Olt guardada exitosamente"
        },
        customers: {
            confirmCreation: "¿Estás seguro de guardar el cliente?",
            savedSuccessfully: "Cliente guardado exitosamente"
        }
    },
    errors: {
        general: {
            allFieldsAreRequired: "Asegúrese de llenar los campos requeridos",
            internalError: "Un error interno ha sucedido. Intente de nuevo mas tarde por favor."
        },
        routers: {
            selectZoneToSearch: "Seleccione una zona por favor"
        }
    },
    forms: {
        createButton: "Guardar",
        routers: {
            name: "Nombre:",
            ip: "IP:",
            password: "Contraseña:",
            port: "Puerto:",
            user: "Usuario:"
        },
        olts: {
            IPTvModule: "Módulo IPTV",
            OLTHardwareVersion: "Versión del hardware",
            OLTSoftwareVersion: "Versión del software",
            SNMPReadOnlyCommunity: "SNMP Solo lectura",
            SNMPReadWriteCommunity: "SNMP Lectura y escritura",
            SNMPUDPPort: "Puerto SNMP",
            SupportedPONTypes: "Tipos de PON soportados",
            ip: "Ip",
            name: "Nombre",
            password: "Contraseña Telnet",
            port: "Puerto TCP Telnet",
            username: "Usuario Telnet"
        },
        customers: {
            address: "Dirección",
            dni: "Identificación",
            email: "Correo",
            lastNames: "Apellidos",
            names: "Nombre",
            neighborhood: "Barrio",
            phone: "Teléfono",
            postalCode: "Código postal"
        }
    }
}
