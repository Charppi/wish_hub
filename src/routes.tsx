import { home, homeOutline, map, mapOutline, people, peopleOutline, wifi, wifiOutline, cellular, cellularOutline, radioOutline, radio } from "ionicons/icons";
import { PagesNames } from "./i18n/labels";
import { Customers } from './pages/Customers'
import { DashboardHome } from "./pages/DashboardHome";
import { Routers } from "./pages/Routers";
import { Zones } from "./pages/Zones";
import { Olts } from "./pages/Olts";
import { Wifi } from "./pages/Wifi";

export interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: PagesNames
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
        title: "zones",
        url: '/administracion/zones',
        iosIcon: mapOutline,
        mdIcon: map,
        Component: <Zones />
    },
    {
        title: "customers",
        url: '/administracion/customers',
        iosIcon: peopleOutline,
        mdIcon: people,
        Component: <Customers />
    },
    {
        title: "routers",
        url: '/administracion/routers',
        iosIcon: radioOutline,
        mdIcon: radio,
        Component: <Routers />
    },
    {
        title: "olts",
        url: '/administracion/olts',
        Component: <Olts />,
        iosIcon: cellularOutline,
        mdIcon: cellular
    },
    {
        title: "wifi",
        url: '/administracion/wifi',
        Component: <Wifi />,
        iosIcon: wifi,
        mdIcon: wifiOutline
    }
]
