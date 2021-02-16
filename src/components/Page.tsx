import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import { capitalize } from '../services/utils.service';

const Page: React.FC<{ name: string, create?: Function }> = ({ name, children, create }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {create && <IonButtons slot="secondary">
            <IonButton onClick={() => create()}>
              <IonIcon slot="icon-only" icon={add} />
            </IonButton>
          </IonButtons>}

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{capitalize(name)}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{capitalize(name)}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Page;
