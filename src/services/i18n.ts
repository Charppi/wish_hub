import localforage from 'localforage'
import { labels } from '../i18n/labels';

interface Langs {

}

export default class I18nService {
    static lang: "es" | "en" | "pl" = "es"
    static async selectLabels() {
        const currentLang = await this.getCurrentLang()
        if (currentLang) this.lang = currentLang
        else await localforage.setItem("currentLang", "es");
        return labels[this.lang]
    }
    static async getCurrentLang(): Promise<any> {
        return (await localforage.getItem("currentLang")) as "es" | "en" | "pl";
    }
    static async setLang(lang: "es" | "en" | "pl") {
        await localforage.setItem("currentLang", lang)
    }
}