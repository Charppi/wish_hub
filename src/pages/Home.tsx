import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonButton, IonIcon, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid } from '@ionic/react'
import { chevronForwardCircleOutline } from 'ionicons/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from './SignUp'

export const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonButton title="Iniciar sesion">
                            <IonIcon slot="icon-only" icon={chevronForwardCircleOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>WispHub</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">WispHub</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeMd="6" sizeSm="12">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Administra tus Wisp y OLT's desde
                        </IonCardSubtitle>
                                    <IonCardTitle>
                                        WispHub
                        </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <p>
                                        Sistema de administarcion de Wisp y OLT's en la nube
                                    </p>
                                </IonCardContent>
                                <IonCardContent>
                                    <Link style={{ textDecoration: "none" }} to="/signin">
                                        <IonButton expand="block" color="primary" fill="outline">Ingresar</IonButton>
                                    </Link>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <SignUp />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
