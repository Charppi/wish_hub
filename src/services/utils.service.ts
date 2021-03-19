import { Color } from "@ionic/core"
import { v4 } from "uuid"
import { storage } from "../firebase";

export async function presentToast(message: string, color: Color = "primary") {
    const toast = document.createElement('ion-toast');
    toast.message = message
    toast.duration = 2000;
    toast.color = color
    document.body.appendChild(toast);
    return toast.present();
}

export function errorHandler(code: string): string {
    console.log(code);
    switch (code) {
        // Errores generales
        case "auth/operation-not-allowed":
            return "Operación no permitida"
        case "auth/too-many-requests":
            return "Demasiadas peticiones"
        case "auth/user-disabled":
            return "Usuario inhabilitado"
        case "auth/user-token-expired":
            return "Token del usuario expirado, por favor cierre sesión e ingrese nuevamente"
        case "auth/web-storage-unsupported":
            return "Este navegador no soporta el almacenamiento web o está desactivado"
        // Errores de autenticación
        case "auth/email-already-in-use":
            return "El correo ingresado ya está en uso"
        case "auth/email-already-exists":
            return "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único."
        case "auth/internal-error":
            return "El servidor de autenticación encontró un error inesperado cuando se intentaba procesar la solicitud"
        case "auth/invalid-email":
            return "El valor que se proporcionó para el correo no es válido"
        case "auth/invalid-password":
            return "La contraseña debe tener por lo meons 6 caracteres"
        case "auth/user-not-found":
            return "No existe ningún registro de usuario que corresponda al identificador proporcionado"
        case "permission-denied":
            return "Permiso denegado"
        case "storage/object-not-found":
            return "Objeto de almacenamiento no encontrado"
        //Errores de la aplicacion
        case "user-not-found":
            return "No se encontró datos del usuario requerido."
        case "wrong_phone":
            return "El teléfono con el que se escaneó el QR no está registrado como el bot. Si deseas cambiarlo hazlo desde las configuraciones."
        default:
            return "Error interno"
    }
}


export async function presentLoading(message = "") {
    const loading = document.createElement('ion-loading');
    loading.message = message
    document.body.appendChild(loading);
    await loading.present();
    return loading
}

export const errors = {
    user_not_found: "user-not-found",
    wrong_phone: "wrong_phone"
}

export const capitalize = (word: string) => {
    return word[0].toUpperCase() + word.slice(1);
}


export async function confirmation(message: string, handlerFunction: Function) {
    const alert = document.createElement('ion-alert');
    alert.message = message
    alert.buttons = [
        {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary'
        }, {
            text: 'Aceptar',
            handler: async () => {
                await handlerFunction()
            }
        }
    ];
    document.body.appendChild(alert);
    return await alert.present();
}

export async function uploadFile(file: File, folder: string) {
    return new Promise(async (resolve, reject) => {
        const name = setFileName(file.type)
        const upload = storage.child(`${folder}/${name}`).put(file)
        upload.then(snap => snap).then(() => {
            return resolve(upload.snapshot.ref.getDownloadURL())
        }).catch(e => reject(e))
    })
}

export function setFileName(type: string) {
    const extension = type.split("/")[1];
    return `${v4()}.${extension};`
}

export async function errorToast(code: string) {
    await presentToast(errorHandler(code), "danger")
}
export function numberFormat({ number, decimals = 0, dec_point = '.', thousands_sep = ',' }: { number: string; decimals?: number; dec_point?: string; thousands_sep?: string; }) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var s;
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        toFixedFix = function (n: number, prec: number) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

export async function isValidObject(object: object, keys: string[]) {
    for (const key in keys) {
        if (!Object.prototype.hasOwnProperty.call(object, key)) return false
    }
    return true
}