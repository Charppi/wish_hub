import { home, homeOutline, people, peopleOutline } from "ionicons/icons";
import { Clients } from './pages/Clients'
import { DashboardHome } from "./pages/DashboardHome";
import I18nService from './services/i18n';

export interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    Component: any
}


export const appPages = async (): Promise<AppPage[]> => {
    const lang = await I18nService.selectLabels()
    
    return [
        {
            title: lang.menu.home,
            url: '/administracion/',
            iosIcon: homeOutline,
            mdIcon: home,
            Component: <DashboardHome />
        },
        {
            title: lang.menu.customers,
            url: '/administracion/clientes',
            iosIcon: peopleOutline,
            mdIcon: people,
            Component: <Clients />
        }
    ]
};
