interface LabelsInterface {
    es: LangBodyInterface,
    en: LangBodyInterface,
    pl: LangBodyInterface
}

export interface LangBodyInterface {
    name: string
    menu: LangMenuInterface
}

interface LangMenuInterface {
    home: string,
    customers: string
}

export const labels: LabelsInterface = {
    es: {
        name: "Español",
        menu: {
            home: "Inicio",
            customers: "Clientes"
        }
    },
    en: {
        name: "English",
        menu: {
            home: "Home",
            customers: "Customers"
        }
    },
    pl: {
        name: "Portuguese",
        menu: {
            home: "Começo",
            customers: "Clientes"
        }
    }
}