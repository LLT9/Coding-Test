import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logout } from '../../slice/authSlice';
function Layout() {
  const [lang, setLang] = useState('中文');
  const dispath = useDispatch();
  const { t, i18n } = useTranslation();
  const { isLogin } = useSelector((state) => {
    return state.auth;
  });
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className='container'>
        <div className='header'>
          <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
              <NavLink className='navbar-brand' to='/'>
                <img
                  src='https://technine.io/wp-content/uploads/2022/01/technine-logo-horizontal-half-1.png'
                  alt='technine'
                  width='200'
                  height='36'
                />
              </NavLink>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse justify-content-end'
                id='navbarNav'
              >
                <ul className='navbar-nav'>
                  {isLogin ? (
                    <li className='nav-item dropdown'>
                      <Link
                        className='nav-link dropdown-toggle'
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        {t('會員')}
                      </Link>
                      <ul className='dropdown-menu'>
                        <li>
                          <NavLink className='dropdown-item' to='/profile'>
                            {t('會員資料')}
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            className='dropdown-item'
                            onClick={() => {
                              dispath(logout());
                            }}
                          >
                            {t('登出')}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/login'>
                        {t('登入')}
                      </NavLink>
                    </li>
                  )}

                  <li className='nav-item dropdown'>
                    <Link
                      className='nav-link dropdown-toggle'
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      {lang}
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            lang === '中文' ? 'active' : ''
                          }`}
                          onClick={() => {
                            changeLanguage('zh');
                            setLang('中文');
                          }}
                        >
                          中文
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            lang === 'English' ? 'active' : ''
                          }`}
                          onClick={() => {
                            changeLanguage('en');
                            setLang('English');
                          }}
                        >
                          English
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Outlet></Outlet>
      <div className='footer bg-light py-3 text-center'>
        <a href='https://storyset.com/user' className='text-black-50 link'>
          User illustrations by Storyset
        </a>
      </div>
    </>
  );
}
export default Layout;
