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
import { LangBodyInterface } from '../i18n/labels';

const Menu: React.FC = () => {
  const [userData, setUserData] = useState<Users | null>(null);
  const [routes, setRoutes] = useState<AppPage[]>([]);
  const [currentLang, setCurrentLang] = useState<LangBodyInterface | null>(null)

  const handleSignOut = async () => UsersService.signOut()

  const getCurrentUserData = async () => {
    const loader = await presentLoading()
    const user = await UsersService.getCurrentUserData();
    setUserData(user)
    loader.dismiss()
  }

  const getCurrentLangName = async () => {
    const currentLangName = await I18nService.selectLabels()
    setCurrentLang(currentLangName)
  }

  const getRoutes = async () => {
    const routes = await appPages()
    setRoutes(routes)
  }

  const changeCurrentLang = async (lang: "en" | "es" | "pl") => {
    await I18nService.setLang(lang);
    await initialize()
  }

  const initialize = async () => {
    await getCurrentLangName()
    await getCurrentUserData()
    await getRoutes()
  }



  useEffect(() => {

    initialize()

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
                <IonSelect value={currentLang?.shortName} onIonChange={(e) => { changeCurrentLang(e.detail.value!) }}>
                  <IonSelectOption value="es">Español</IonSelectOption>
                  <IonSelectOption value="en">English</IonSelectOption>
                  <IonSelectOption value="pl">Portugues</IonSelectOption>
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
                  <IonLabel>{currentLang?.menu.signout}</IonLabel>
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
