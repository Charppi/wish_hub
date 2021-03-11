import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useContext, useEffect, useState } from 'react';
import { capitalize } from '../services/utils.service';
import { LangContext } from './LangProvider';

const Page: React.FC<{ name: "home" | "customers", create?: Function }> = ({ name, children, create }) => {

  const [context] = useContext(LangContext)

  const [pageName, setPageName] = useState("")

  const getLangLabels = async () => {
    const pageName = context.pages[name]
    setPageName(pageName)
  }

  useEffect(() => {
    getLangLabels()
  }, [context])

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
          <IonTitle>{pageName.length && capitalize(pageName)}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pageName.length && capitalize(pageName)}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Page;
