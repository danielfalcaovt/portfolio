import pt from './pt.json'
import en from './en.json'
import i18next from "i18next";

export default i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en,
        pt
    }
});