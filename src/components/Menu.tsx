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
  IonSplitPane,
} from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
import { logOut } from 'ionicons/icons';
import './Menu.css';
import React, { useEffect, useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';

import * as Routes from "../routes"
import UsersService from '../services/users.service';
import { Answers } from '../pages/Answers';
import Page from './Page';

interface MenuState {
  name: string
  email: string
}

const Menu: React.FC = () => {
  const [userData, setUserData] = useState<MenuState>({ email: "", name: "" });

  const handleSignOut = async () => UsersService.signOut()

  const getCurrentUserData = async () => {
    const user = await UsersService.getCurrentUserData();
    setUserData(user)
  }

  useEffect(() => {
    getCurrentUserData()
  }, [])

  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main" type="overlay">
          <IonContent>
            <IonList id="inbox-list">
              <IonListHeader>{userData.name}</IonListHeader>
              <IonNote>{userData.email}</IonNote>
              {Routes.appPages.map((appPage, index) => {
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
          <Route path="/" exact={true}>
            <Redirect to="/administracion/bot" />
          </Route>
          <Route path="/administracion/:name" exact={true}>
            <Page />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>


  );
};

export default Menu;
