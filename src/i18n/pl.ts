import { LangBodyInterface } from "./labels";

export const pl: LangBodyInterface = {
    name: "Portuguese",
    shortName: "pl",
    menu: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Routers",
        signout: "Sair",
        olts: "Olt's"
    },
    pages: {
        home: "Começo",
        customers: "Clientes",
        zones: "Zonas",
        routers: "Routers",
        olts: "Olt's"
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
        routers: {
            name: "Nome:",
            ip: "IP:",
            password: "Senha:",
            port: "Porta:",
            user: "Do utilizador:",
            createButton: "Criar"
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
        }
    }
}
