import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import welcomeImg from '../../assets/Welcome.png';
function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isLogin } = useSelector((state) => {
    return state.auth;
  });

  return (
    <div className='container'>
      <div className='row align-items-center flex-md-row flex-column-reverse container-vh'>
        <div className='col-md-6 col-12 mb-md-0 mb-5'>
          <h1>{t('歡迎來到頁面入口')}</h1>
          {!isLogin ? (
            <>
              <h3 className='mb-3'>{t('登入以繼續')}</h3>
              <button
                type='button'
                className='btn btn-primary btn-lg px-4 py-2'
                onClick={() => {
                  navigate('/login');
                }}
              >
                {t('登入')}
              </button>
            </>
          ) : (
            <h3 className='mb-3'>{t('歡迎回來')}</h3>
          )}
        </div>
        <div className='col-md-6 col-12'>
          <img src={welcomeImg} alt='welcome' className='img-fluid' />
        </div>
      </div>
    </div>
  );
}

export default Home;
