import { albums, albumsOutline, chatbubble, chatbubbleOutline, clipboard, clipboardOutline, cube, cubeOutline, personCircle, personCircleOutline, warningOutline, warningSharp } from "ionicons/icons";
import { Answers } from "./pages/Answers";
import { Categories } from "./pages/Categories";
import { Orders } from "./pages/Orders";
import { Products } from "./pages/Products";
import { Profile } from "./pages/Profile";

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    Component: React.FC
}

export const appPages: AppPage[] = [
    {
        title: 'Productos',
        url: '/administracion/productos',
        iosIcon: cubeOutline,
        mdIcon: cube,
        Component: Products
    },
    {
        title: 'Categorías',
        url: '/administracion/categorias',
        iosIcon: albumsOutline,
        mdIcon: albums,
        Component: Categories
    },
    {
        title: 'Respuestas',
        url: '/administracion/respuestas',
        iosIcon: chatbubbleOutline,
        mdIcon: chatbubble,
        Component: Answers
    },
    {
        title: 'Ordenes',
        url: '/administracion/ordenes',
        iosIcon: clipboardOutline,
        mdIcon: clipboard,
        Component: Orders
    },
    {
        title: 'Perfil',
        url: '/administracion/perfil',
        iosIcon: personCircle,
        mdIcon: personCircleOutline,
        Component: Profile
    }
];


