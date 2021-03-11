import React, { createContext, useState } from 'react'
import { en, LangBodyInterface } from '../i18n/labels'

export const LangContext = createContext<[LangBodyInterface, Function]>([en, () => { }])

export const LangProvider: React.FC = ({ children }) => {
    const [lang, setLang] = useState(en)
    return (
        <LangContext.Provider value={[lang, setLang]}>
            {children}
        </LangContext.Provider>
    )
}
