import { createI18n } from 'vue-i18n'

let lang = 'zh'
localStorage.setItem('lang', lang)

const i18n = createI18n({
    locale: lang,
    messages: {
        'zh': import('/@/i18n/languages/zh.json'),
        'en': import('/@/i18n/languages/en.json')
    }
})

export default i18n