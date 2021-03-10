interface LabelsInterface {
    es: LangBodyInterface,
    en: LangBodyInterface,
    pl: LangBodyInterface
}

export interface LangBodyInterface {
    name: string
    shortName: string,
    menu: LangMenuInterface
}

interface LangMenuInterface {
    home: string,
    customers: string,
    signout: string
}

export const labels: LabelsInterface = {
    es: {
        name: "Español",
        shortName: "es",
        menu: {
            home: "Inicio",
            customers: "Clientes",
            signout: "Cerrar sesión"
        }
    },
    en: {
        name: "English",
        shortName: "en",
        menu: {
            home: "Home",
            customers: "Customers",
            signout: "Sign Out"
        }
    },
    pl: {
        name: "Portuguese",
        shortName: "pl",
        menu: {
            home: "Começo",
            customers: "Clientes",
            signout: "Sair"
        }
    }
}