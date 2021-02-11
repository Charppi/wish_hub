import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonButton, IonIcon, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid } from '@ionic/react'
import { chevronForwardCircleOutline } from 'ionicons/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import support from "../assets/support.gif"

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
                    <IonTitle>Wabot</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Wabot</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow className="ion-justify-content-center ion-align-items-center">
                        <IonCol sizeMd="6" sizeSm="12">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Automatiza tus ventas usando
                        </IonCardSubtitle>
                                    <IonCardTitle>
                                        Wabot
                        </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iste voluptatum temporibus id perferendis voluptate officia culpa, nesciunt animi dicta sunt quae molestiae quaerat autem nam neque sapiente, impedit odit.
        </p>
                                </IonCardContent>
                                <IonCardContent>
                                    <Link style={{ textDecoration: "none" }} to="/signup">
                                        <IonButton expand="block" color="tertiary" fill="outline" >Crear cuenta</IonButton>
                                    </Link>
                                    <Link style={{ textDecoration: "none" }} to="/signin">
                                        <IonButton expand="block" color="primary" fill="outline">Iniciar sesion</IonButton>
                                    </Link>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
