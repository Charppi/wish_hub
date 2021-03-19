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
import React, { useContext, useEffect, useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';

import UsersService from '../services/users.service';
import { presentLoading } from '../services/utils.service';
import { Users } from '../models/users';
import { labels } from '../i18n/labels';
import { LangContext } from './LangProvider';
import { appPages as routes } from '../routes'

const Menu: React.FC = () => {
  const [userData, setUserData] = useState<Users | null>(null);
  const [context, setContext] = useContext(LangContext)

  const handleSignOut = async () => UsersService.signOut()

  const getCurrentUserData = async () => {
    const loader = await presentLoading()
    const user = await UsersService.getCurrentUserData();
    setUserData(user)
    loader.dismiss()
  }

  const changeCurrentLang = async (lang: "en" | "es" | "pl") => {
    setContext(labels[lang])
  }

  useEffect(() => {
    getCurrentUserData()
  }, [])

  return <IonReactRouter>
    <IonSplitPane contentId="main">
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>{userData?.names}</IonListHeader>
            <IonNote>{userData?.email}</IonNote>
            <IonItem>
              <IonSelect value={context.shortName} onIonChange={(e) => { changeCurrentLang(e.detail.value!) }}>
                <IonSelectOption value="es">Español</IonSelectOption>
                <IonSelectOption value="en">English</IonSelectOption>
                <IonSelectOption value="pl">Portugués</IonSelectOption>
              </IonSelect>
            </IonItem>
            {routes.map((appPage, index) => {
              return <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{context.menu[appPage.title]}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            })}
            <IonMenuToggle autoHide={false}>
              <IonItem lines="none" style={{ cursor: "pointer" }} onClick={handleSignOut} detail={false}>
                <IonIcon slot="start" icon={logOut} />
                <IonLabel>{context.menu.signout}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main">
        {routes.map((route, i) => {
          return <Route key={i} path={route.url} render={() => route.Component} exact={true} />
        })}
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>

};

export default Menu;
