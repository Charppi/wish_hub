import localforage from 'localforage'
import { labels, Langs } from '../i18n/labels';



export default class I18nService {
    static async selectLabels() {
        let lang: Langs = "es"
        const currentLang = await this.getCurrentLang()
        if (currentLang) lang = currentLang
        else await localforage.setItem("currentLang", "en");
        return labels[lang]
    }
    static async getCurrentLang(): Promise<any> {
        return (await localforage.getItem("currentLang")) as Langs;
    }
    static async setLang(lang: Langs) {
        await localforage.setItem("currentLang", lang)
    }
}