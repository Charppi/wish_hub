import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  IonSplitPane,
} from '@ionic/react';

import { Route } from 'react-router-dom';
import { logOut } from 'ionicons/icons';
import './Menu.css';
import React, { useEffect, useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';

import UsersService from '../services/users.service';
import { appPages, AppPage } from "../routes"
import { presentLoading } from '../services/utils.service';
import { Users } from '../models/users';
import I18nService from '../services/i18n';

const Menu: React.FC = () => {
  const [userData, setUserData] = useState<Users | null>(null);
  const [routes, setRoutes] = useState<AppPage[]>([]);
  const [currentLangName, setCurrentLangName] = useState<string | null>(null)

  const handleSignOut = async () => UsersService.signOut()

  const getCurrentUserData = async () => {
    const loader = await presentLoading()
    const user = await UsersService.getCurrentUserData();
    setUserData(user)
    loader.dismiss()
  }

  const getRoutes = async () => {
    const routes = await appPages()
    const currentLangName = await I18nService.getCurrentLangName()
    setCurrentLangName(currentLangName)
    setRoutes(routes)
  }



  useEffect(() => {
    getCurrentUserData()
    getRoutes()
  }, [])

  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main" type="overlay">
          <IonContent>
            <IonList id="inbox-list">
              <IonListHeader>{userData?.names}</IonListHeader>
              <IonNote>{userData?.email}</IonNote>
              <IonItem>
                <IonLabel>Idioma actual</IonLabel>
                <IonSelect value={currentLangName}>
                  <IonSelectOption value={currentLangName}>Español</IonSelectOption>
                  <IonSelectOption>English</IonSelectOption>
                  <IonSelectOption>Portugues</IonSelectOption>
                </IonSelect>
              </IonItem>
              {routes.map((appPage, index) => {
                return <IonMenuToggle key={index} autoHide={false}>
                  <IonItem routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              })}
              <IonMenuToggle autoHide={false}>
                <IonItem style={{ cursor: "pointer" }} onClick={handleSignOut} detail={false}>
                  <IonIcon slot="start" icon={logOut} />
                  <IonLabel>Cerrar sesion</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          {routes.map((routes, i) => {
            return <Route key={i} path={routes.url} render={() => routes.Component} exact={true} />
          })}
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>


  );
};

export default Menu;
