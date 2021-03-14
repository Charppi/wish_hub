import React, { createContext, useEffect, useState } from 'react'
import { en, LangBodyInterface } from '../i18n/labels'
import I18nService from '../services/i18n'


export const LangContext = createContext<[LangBodyInterface, Function]>([en, () => { }])

export const LangProvider: React.FC = ({ children }) => {
    const [lang, setLang] = useState(en)

    const setLocaleLang = async () => {
        await I18nService.setLang(lang.shortName)
    }

    const getLocaleLang = async () => {
        const lang = await I18nService.selectLabels()
        setLang(lang)
    }

    useEffect(() => {
        setLocaleLang()
    }, [lang])

    useEffect(() => {
        getLocaleLang()
    }, [])

    return (
        <LangContext.Provider value={[lang, setLang]}>
            {children}
        </LangContext.Provider>
    )
}
