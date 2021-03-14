import { Routers } from "../models/routers"

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

interface LangUIMessages {
    routers: {
        selectZoneToSearch: string
        confirmCreation: string
        savedSuccessfully: string
    }
}

interface LangUIErrors {
    general: {
        allFieldsAreRequired: string
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
    }
}


interface LangMenuInterface {
    home: string,
    customers: string,
    signout: string
    zones: string
    routers: string
}

export interface PagesInterface {
    home: string
    customers: string
    zones: string
    routers: string
}

export type PagesNames = "home" | "customers" | "zones" | "routers"

export const es: LangBodyInterface = {
    name: "Español",
    shortName: "es",
    menu: {
        home: "Inicio",
        customers: "Clientes",
        zones: "Zonas",
        signout: "Cerrar sesión",
        routers: "Routers"
    },
    pages: {
        home: "Inicio",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Routers"
    },
    messages: {
        routers: {
            selectZoneToSearch: "Seleccionar zona",
            confirmCreation: "¿Estás seguro de crear el router?",
            savedSuccessfully: "Router guardado exitosamente"
        }
    },
    errors: {
        general: {
            allFieldsAreRequired: "ASegúrese de llenar los campos requeridos"
        },
        routers: {
            selectZoneToSearch: "Seleccione una zona por favor"
        }
    },
    forms: {
        routers: {
            name: "Nombre:",
            ip: "IP:",
            password: "Contraseña:",
            port: "Puerto:",
            user: "Usuario:",
            createButton: "Crear"
        }
    }
}

export const en: LangBodyInterface = {
    name: "English",
    shortName: "en",
    menu: {
        home: "Home",
        customers: "Customers",
        zones: "Zones",
        routers: "Routers",
        signout: "Sign Out"
    },
    pages: {
        home: "Home",
        customers: "Customers",
        zones: "Zones",
        routers: "Routers"
    },
    messages: {
        routers: {
            selectZoneToSearch: "Select zone",
            confirmCreation: "Are you sure to create this router?",
            savedSuccessfully: "Router saved successfully"
        }
    },
    errors: {
        general: {
            allFieldsAreRequired: "Please ensure to fill the required fields"
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

        }
    }
}

export const pl: LangBodyInterface = {
    name: "Portuguese",
    shortName: "pl",
    menu: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Routers",
        signout: "Sair"
    },
    pages: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Routers"
    },
    messages: {
        routers: {
            selectZoneToSearch: "Selecione a zona",
            confirmCreation: "Tem certeza de que deseja criar o roteador?",
            savedSuccessfully: "Roteador salvo corretamente"
        }
    },
    errors: {
        general: {
            allFieldsAreRequired: "Certifique-se de preencher os campos obrigatórios"
        },
        routers: {
            selectZoneToSearch: "Selecione uma zona"
        }
    },
    forms: {
        routers: {
            name: "Nome:",
            ip: "IP:",
            password: "Senha:",
            port: "Porta:",
            user: "Do utilizador:",
            createButton: "Criar"
        }
    }
}

export const labels: LabelsInterface = { es, en, pl }