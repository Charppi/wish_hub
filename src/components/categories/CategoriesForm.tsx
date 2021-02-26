import { IonButton, IonButtons, IonCard, IonCardContent, IonIcon, IonInput, IonItem, IonLabel, IonToolbar } from '@ionic/react'
import { add, attachOutline, backspaceOutline, saveOutline } from 'ionicons/icons'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Categories } from '../../models/categories'
import CategoriesService from '../../services/categories.service'
import { confirmation, presentLoading, presentToast } from '../../services/utils.service'

interface Props {
    forUpdate?: Categories
    onReset(): void
}

export const CategoriesForm: React.FC<Props> = ({ onReset, forUpdate }) => {
    const [category, setCategory] = useState<Categories>({ name: "" })
    const [currentFileName, setCurrentFileName] = useState<string>("")
    const [file, setFile] = useState<File>()

    const handleLoadFile = () => { getFileRef().click() }

    const getFileRef = () => document.getElementById("file") as HTMLInputElement

    const handleFileChange = () => {
        console.log("Cambió");

        const { files } = getFileRef()
        if (files && files.length > 0) {
            setFile(files[0])
            setCurrentFileName(files[0].name)
        } else {
            setFile(undefined)
            setCurrentFileName("")
        }
    }

    const handleResetFile = () => {
        setFile(undefined)
        setCurrentFileName("")
    }

    const handleSafeOrUpdate = async () => {
        if (!forUpdate?.id && !file) return await presentToast("Para crear una categoría debe seleccionar un archivo.", "danger")
        confirmation(`Se ${forUpdate?.id ? "actualizará" : "creará"} la categoría. ¿Desea continuar?`, async () => {
            const loader = await presentLoading()
            forUpdate?.id
                ? await CategoriesService.updateCategory(category!, forUpdate.id, file)
                : await CategoriesService.create({ name: category!.name }, file!)
            await loader.dismiss()
        })
    }

    const handleResetForm = () => {
        setCategory({ name: "" })
        setFile(undefined)
    }

    useEffect(() => {
        if (forUpdate?.id) {
            setCategory(forUpdate);
            setFile(undefined)
        }
    }, [forUpdate])

    return <>
        <IonItem lines="none">
            <IonLabel>Nombre:</IonLabel>
            <IonInput value={category?.name} onIonChange={(e) => setCategory({ ...category, name: e.detail.value! })} />
        </IonItem>
        {file && <IonItem>
            <IonLabel>Archivo:</IonLabel>
            <span className="ion-text">{currentFileName}</span>
        </IonItem>}
        <form action="" id="file-form" onReset={() => handleResetFile()}>
            <input type="file" hidden id="file" accept="application/pdf" onChange={handleFileChange} />
            {file && <IonButton expand="block" type="reset" color="danger" fill="outline">Quitar archivo</IonButton>}
        </form>
        <IonButton className="ion-margin-top" expand="block" fill="outline" color="tertiary" onClick={handleLoadFile}>
            Adjuntar archivo
            <IonIcon icon={attachOutline} />
        </IonButton>
        <IonButton className="ion-margin-top" expand="block" disabled={(category.name.length == 0)} fill="outline" onClick={handleSafeOrUpdate}>
            Guardar
            <IonIcon icon={saveOutline} />
        </IonButton>
    </>
}