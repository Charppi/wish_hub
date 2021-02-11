import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { capitalize } from '../services/utils.service';

const Page: React.FC = ({ children }) => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{capitalize(name)}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding-horizontal" fullscreen>
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
