import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import UsersService from '../services/users.service'


export const SignIn: React.FC = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleCreateAccount = () => history.push("/signup")
    const handleForgetPassword = () => history.push("/forget-password")
    const handleLogin = () => UsersService.signIn(email, password)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonTitle className="ion-margin-vertical ion-text-center">
                    Iniciar sesion
                </IonTitle>
                <IonItem>
                    <IonLabel>Correo:</IonLabel>
                    <IonInput value={email} type="email" onIonChange={e => setEmail(e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Contraseña:</IonLabel>
                    <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value!)} />
                </IonItem>
                <IonButton onClick={handleLogin} color="tertiary" fill="outline" className="ion-margin-top" expand="block">Iniciar sesion</IonButton>
                <IonButton onClick={handleCreateAccount} color="primary" fill="clear" className="ion-margin-top" expand="block">Crear cuenta</IonButton>
                <IonButton onClick={handleForgetPassword} color="warning" fill="clear" className="ion-margin-top" expand="block">Olvidé mi contraseña</IonButton>
            </IonContent>
        </IonPage>
    )
}
