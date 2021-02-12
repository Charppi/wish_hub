import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Dashboard } from '../pages/Dashboard';
import { appPages } from '../routes';
import { capitalize } from '../services/utils.service';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [content, setContent] = useState<React.FC>(Dashboard)

  const searchContent = () => {
    return appPages.find(page => page.url.endsWith(name))?.Component || Dashboard
  }

  useEffect(() => {
    setContent(searchContent())
  }, [name])



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
        {content}
      </IonContent>
    </IonPage>
  );
};

export default Page;
