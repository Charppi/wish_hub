import { home, homeOutline, people, peopleOutline } from "ionicons/icons";
import { Clients } from './pages/Clients'
import { DashboardHome } from "./pages/DashboardHome";

export interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: "home" | "customers";
    Component: any
}


export const appPages: AppPage[] = [
    {
        title: "home",
        url: '/administracion/home',
        iosIcon: homeOutline,
        mdIcon: home,
        Component: <DashboardHome />
    },
    {
        title: "customers",
        url: '/administracion/clientes',
        iosIcon: peopleOutline,
        mdIcon: people,
        Component: <Clients />
    }
]
