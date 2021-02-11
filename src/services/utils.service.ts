import { Color } from "@ionic/core"

export async function presentToast(message: string, color: Color = "primary") {
    const toast = document.createElement('ion-toast');
    toast.message = message
    toast.duration = 2000;
    toast.color = color
    document.body.appendChild(toast);
    return toast.present();
}

export function firebaseErrors(code: string): string {
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
        case "user-not-found":
            return "No se encontró datos del usuario requerido."
        default:
            return "Error interno"
    }
}


export async function presentLoading(message = "Por favor espere...") {
    const loading = document.createElement('ion-loading');
    loading.message = message
    document.body.appendChild(loading);
    await loading.present();
    return loading
}

export const errors = {
    user_not_found: "user-not-found"
}

export const capitalize = (word: string) => word[0].toUpperCase() + word.slice(1);