import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";

const translationEn = {welcome: "Welcome!"};

const translationCn = {welcome: "歡迎"};

i18n
  .use(initReactI18next)
  .init({
    resources:{
      en: {translation: translationEn},
      cn: {translation: translationCn},
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {escapeValue: false},
    
  })

const Home = () => {
    const { t, i18n } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value);
    }

    return (

        <div>
            
            <section className='section'>
            
                <h2>{t('welcome')}</h2>
                <select name="language" onChange={onChange}>
                    <option value="en">English</option>
                    <option value="cn">Chinese</option>
                </select>
            </section>

        </div>
    );
  };


  export default Home;