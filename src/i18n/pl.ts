import { LangBodyInterface } from "./labels";

export const pl: LangBodyInterface = {
    name: "Portuguese",
    shortName: "pl",
    menu: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Mikrotik",
        signout: "Sair",
        olts: "Olt's",
        wifi: "Wifi"
    },
    pages: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Mikrotik",
        olts: "Olt's",
        wifi: "Wifi"
    },
    messages: {
        routers: {
            selectZoneToSearch: "Selecione a zona",
            confirmCreation: "Tem certeza de que deseja criar o roteador?",
            savedSuccessfully: "Roteador salvo corretamente"
        },
        olts: {
            confirmCreation: "Tem certeza que eu salvo o OLT?",
            savedSuccessfully: "OLT salvou com sucesso"
        },
        customers: {
            confirmCreation: "Você tem certeza de salvar este cliente?",
            savedSuccessfully: "Cliente salvo com sucesso"
        },
        wifi: {
            confirmCreation: "Você tem certeza de salvar este roteador WiFi?",
            savedSuccessfully: "WiFi Router salvo com sucesso"
        }
    },
    errors: {
        general: {
            allFieldsAreRequired: "Certifique-se de preencher os campos obrigatórios",
            internalError: "Um erro interno aconteceu.Tente novamente mais tarde, por favor."
        },
        routers: {
            selectZoneToSearch: "Selecione uma zona"
        }
    },
    forms: {
        createButton: "Guarda",
        routers: {
            name: "Nome",
            ip: "IP",
            password: "Senha",
            port: "Porta",
            user: "Do utilizador",
        },
        olts: {
            IPTvModule: "Módulo Iptv",
            OLTHardwareVersion: "Versão doe hardware",
            OLTSoftwareVersion: "Versão do software",
            SNMPReadOnlyCommunity: "SNMP lido apenas",
            SNMPReadWriteCommunity: "SNMP Leia e Escreva",
            SNMPUDPPort: "Porta SNMP.",
            SupportedPONTypes: "Tipo de Pon suportado",
            ip: "Ip",
            name: "Nome",
            password: "Senha do telnet",
            port: "Porta TCP Telnet",
            username: "Nome de usuário do Telnet."
        },
        customers: {
            address: "Endereço",
            dni: "DNI",
            email: "O email",
            lastNames: "Últimos nomes",
            names: "Nomes",
            neighborhood: "Vizinhança",
            phone: "Telefone",
            postalCode: "Código postal"
        },
        wifi: {
            customerId: "Cliente",
            ip: "IP",
            mac: "MAC",
            model: "Modelo",
            password: "Senha",
            passwordSsid: "Senha da SSID.",
            ssdid: "SSID",
            user: "Do utilizador",
            routerId: "Router"
        }
    }
}
