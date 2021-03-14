import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import React, { } from "react";

import { Routers } from "../../models/routers";
import { pencil } from "ionicons/icons";

export const RouterList: React.FC<{ onUpdateRouter(r: Routers): void, routers: Routers[] }> = ({ onUpdateRouter, routers }) => {

    return routers.length > 0 ? <IonList>
        {
            routers.map((router, k) => (<IonItem key={k}>
                <IonLabel>{router.name}</IonLabel>
                <IonLabel>{router.ip}</IonLabel>
                <IonButtons slot="end">
                    <IonButton onClick={() => onUpdateRouter(router)}>
                        <IonIcon slot="icon-only" icon={pencil} />
                    </IonButton>
                </IonButtons>
            </IonItem>))
        }
    </IonList>
        : <div />
}


