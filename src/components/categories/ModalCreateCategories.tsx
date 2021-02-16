import { IonButton, IonContent, IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useRef, useState } from 'react'
import Categories from '../../services/categories.service';
import { confirmation, presentLoading, presentToast } from '../../services/utils.service';

export const ModalCreateCategories: React.FC = () => {
    const [file, setFile] = useState<{ name: string, file?: File }>({ name: "Seleccionar archivo" });
    const [categoryName, setCategoryName] = useState("")
    const fileRef = useRef<HTMLInputElement>(null)

    const handleFileChange = () => {
        if (fileRef.current?.files) setFile({ name: fileRef.current.files[0].name, file: fileRef.current.files[0] })
    }

    return <IonContent className="ion-padding">
        <IonItem className="ion-margin-bottom">
            <IonLabel>Nombre:</IonLabel>
            <IonInput value={categoryName} placeholder="Gases medicinales" onIonChange={(e) => setCategoryName(e.detail.value!)} />
        </IonItem>
        <IonItem className="ion-margin-bottom" style={{ cursor: "pointer" }} onClick={() => fileRef.current && fileRef.current.click()}>
            <IonLabel>Archivo seleccionado:</IonLabel>
            <span>{file.name}</span>
        </IonItem>
        {file.file && <IonButton color="danger" expand="block" fill="outline" onClick={() => {
            setFile({ name: "Seleccionar archivo" })
        }}>Quitar archivo</IonButton>}
        <input onChange={handleFileChange} ref={fileRef} hidden type="file" accept="application/pdf" />
        <IonButton fill="outline" expand="block" color="tertiary" onClick={() => {
            confirmation("¿Desea guardar la categoría?", async () => {
                const laoder = await presentLoading("Creando categoría...")
                await Categories.create({ name: categoryName }, file.file!)
                await laoder.dismiss()
            })
        }}>Guardar categoría</IonButton>
    </IonContent >
}
