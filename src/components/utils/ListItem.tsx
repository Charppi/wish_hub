import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react"
import { pencil } from "ionicons/icons"
import React from "react"

export const ListItem: React.FC<{ entries: any[], onClickUpdate(data: any): void, readProperty: string }> = ({ entries, onClickUpdate, readProperty }) => {

    return <IonList>
        {entries.map((entry, k) => <IonItem lines="none" key={k}>
            <IonLabel>{entry[readProperty]}</IonLabel>
            <IonButtons>
                <IonButton slot="end" onClick={() => onClickUpdate(entry)}>
                    <IonIcon slot="icon-only" icon={pencil} />
                </IonButton>
            </IonButtons>
        </IonItem>)}
    </IonList>
}