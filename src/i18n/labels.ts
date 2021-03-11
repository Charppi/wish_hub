interface LabelsInterface {
    es: LangBodyInterface,
    en: LangBodyInterface,
    pl: LangBodyInterface
}

export interface LangBodyInterface {
    name: string
    shortName: string,
    menu: LangMenuInterface
    pages: PagesInterface
}

interface LangMenuInterface {
    home: string,
    customers: string,
    signout: string
    zones: string
}

export interface PagesInterface {
    home: string
    customers: string
    zones: string
}

export const es: LangBodyInterface = {
    name: "Español",
    shortName: "es",
    menu: {
        home: "Inicio",
        customers: "Clientes",
        zones: "Zonas",
        signout: "Cerrar sesión"
    },
    pages: {
        home: "Inicio",
        customers: "Clientes",
        zones: "Zonas"
    }
}

export const en: LangBodyInterface = {
    name: "English",
    shortName: "en",
    menu: {
        home: "Home",
        customers: "Customers",
        zones: "Zones",
        signout: "Sign Out"
    },
    pages: {
        home: "Home",
        customers: "Customers",
        zones: "Zones"
    }
}

export const pl: LangBodyInterface = {
    name: "Portuguese",
    shortName: "pl",
    menu: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas",
        signout: "Sair"
    },
    pages: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas"
    }
}

export const labels: LabelsInterface = { es, en, pl }