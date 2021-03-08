import { IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel, IonInput, IonButton, IonCardTitle, IonCardSubtitle } from '@ionic/react'
import React, { useState } from 'react'
import { Users } from '../models/users'
import UsersService from '../services/users.service'
import { presentToast } from '../services/utils.service'

export const SignUp: React.FC = () => {

    const [user, setUser] = useState<Users | null>(null)

    const handleCreateAccount = async () => {
        if (!user?.password || !user?.email || !user?.lastNames || !user?.names) return presentToast("Todos los campos son requeridos", "danger")
        if (user.password.length < 8) return presentToast("La contraseña debe tener por lo menos 8 caracteres", "danger");
        await UsersService.signUp(user)
    }
    return <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>Crear cuenta gratis</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            <form action="" onSubmit={(e) => { e.preventDefault(); handleCreateAccount() }}>
                <IonItem>
                    <IonLabel>Nombres:</IonLabel>
                    <IonInput required value={user?.names} onIonChange={(e) => { setUser({ ...user!, names: e.detail.value! }) }} />
                </IonItem>
                <IonItem>
                    <IonLabel>Apellidos:</IonLabel>
                    <IonInput required value={user?.lastNames} onIonChange={(e) => { setUser({ ...user!, lastNames: e.detail.value! }) }} />
                </IonItem>
                <IonItem>
                    <IonLabel>Correo:</IonLabel>
                    <IonInput required type="email" value={user?.email} onIonChange={(e) => { setUser({ ...user!, email: e.detail.value! }) }} />
                </IonItem>
                <IonItem>
                    <IonLabel>Contraseña:</IonLabel>
                    <IonInput required type="password" value={user?.password} onIonChange={(e) => { setUser({ ...user!, password: e.detail.value! }) }} />
                </IonItem>
                <IonButton type="submit" color="tertiary" fill="outline" expand="block">Crear cuenta</IonButton>
            </form>
        </IonCardContent>
    </IonCard>

}
