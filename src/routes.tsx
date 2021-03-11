import { home, homeOutline, map, mapOutline, people, peopleOutline } from "ionicons/icons";
import { Clients } from './pages/Clients'
import { DashboardHome } from "./pages/DashboardHome";
import { Zones } from "./pages/Zones";

export interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: "home" | "customers" | "zones";
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
        url: '/administracion/customers',
        iosIcon: peopleOutline,
        mdIcon: people,
        Component: <Clients />
    },
    {
        title: "zones",
        url: '/administracion/zones',
        iosIcon: mapOutline,
        mdIcon: map,
        Component: <Zones />
    }
]
