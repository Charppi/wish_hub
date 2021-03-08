import localforage from 'localforage'
import { labels } from '../i18n/labels';


export default class I18nService {
    static lang: "es" | "en" | "pl" = "es"
    static async selectLabels() {
        const currentLang = await this.getCurrentLang()
        if (currentLang) this.lang = currentLang
        else await localforage.setItem("currentLang", "es");
        return labels[this.lang]
    }
    static async getCurrentLangName() {
        return labels[await this.getCurrentLang()].name
    }
    static async getCurrentLang() {
        return (await localforage.getItem<"es" | "en" | "pl">("currentLang")) || "en";
    }
}