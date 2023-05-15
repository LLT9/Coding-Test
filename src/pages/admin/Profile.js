import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Profile() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isLogin } = useSelector((state) => {
    return state.auth;
  });
  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);
  return (
    <div className='container'>
      <div className='row my-5 container-vh'>
        <div className='col-lg-4'>
          <div className='card text-center mb-3'>
            <div className='text-center'>
              <img
                src='https://xsgames.co/randomusers/assets/avatars/pixel/0.jpg'
                class='card-img-top rounded-circle img-fluid'
                alt='userImg'
                style={{ width: '200px' }}
              />
            </div>
            <div class='card-body'>
              <h5 class='card-title mb-3'>John Doe</h5>
              <p class='card-text mb-0'>Full Stack Developer</p>
              <p class='card-text'>Bay Area, San Francisco, CA</p>
              <button type='button' className='btn btn-primary me-3'>
                {t('追蹤')}
              </button>
              <button type='button' className='btn btn-outline-primary'>
                {t('傳訊息')}
              </button>
            </div>
          </div>
          <ul class='list-group mb-lg-0 mb-3'>
            <li class='list-group-item d-flex justify-content-between align-items-start'>
              <div class='ms-2 me-auto'>
                <div class='text-primary'>
                  <i class='bi bi-globe-asia-australia me-2'></i>
                  Website
                </div>
              </div>
              <span class='muted-text'>https://bootodey.com</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-start'>
              <div class='ms-2 me-auto'>
                <div class='text-primary'>
                  <i class='bi bi-github me-2'></i>
                  Giuhub
                </div>
              </div>
              <span class='muted-text'>bootdey</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-start'>
              <div class='ms-2 me-auto'>
                <div class='text-primary'>
                  <i class='bi bi-twitter me-2'></i>
                  Twitter
                </div>
              </div>
              <span class='muted-text'>@bootdey</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-start'>
              <div class='ms-2 me-auto'>
                <div class='text-primary'>
                  <i class='bi bi-instagram me-2'></i>
                  Instagram
                </div>
              </div>
              <span class='muted-text'>bootdey</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-start'>
              <div class='ms-2 me-auto'>
                <div class='text-primary'>
                  <i class='bi bi-facebook me-2'></i>
                  Facebook
                </div>
              </div>
              <span class='muted-text'>bootdey</span>
            </li>
          </ul>
        </div>
        <div className='col-lg-8'>
          <div class='card mb-3'>
            <div class='card-body'>
              <div class='row'>
                <div class='col-sm-3'>
                  <h6 class='mb-0 text-primary'>{t('全名')}</h6>
                </div>
                <div class='col-sm-9'>Kenneth Valdez</div>
              </div>
              <hr />
              <div class='row'>
                <div class='col-sm-3'>
                  <h6 class='mb-0 text-primary'>{t('信箱')}</h6>
                </div>
                <div class='col-sm-9'>fip@jukmuh.al</div>
              </div>
              <hr />
              <div class='row'>
                <div class='col-sm-3'>
                  <h6 class='mb-0 text-primary'>{t('電話')}</h6>
                </div>
                <div class='col-sm-9'>(239) 816-9029</div>
              </div>
              <hr />
              <div class='row'>
                <div class='col-sm-3'>
                  <h6 class='mb-0 text-primary'>{t('手機')}</h6>
                </div>
                <div class='col-sm-9'>(320) 380-4539</div>
              </div>
              <hr />
              <div class='row'>
                <div class='col-sm-3'>
                  <h6 class='mb-0 text-primary'>{t('地址')}</h6>
                </div>
                <div class='col-sm-9'>Bay Area, San Francisco, CA</div>
              </div>
              <hr />
              <div class='row'>
                <div class='col-sm-12'>
                  <button class='btn btn-outline-primary '>{t('編輯')}</button>
                </div>
              </div>
            </div>
          </div>
          <div class='row gutters-sm'>
            <div class='col-sm-6 mb-3'>
              <div class='card h-100'>
                <div class='card-body'>
                  <h6 class='d-flex align-items-center text-primary mb-3'>
                    <i class='bi bi-kanban-fill me-2'></i>
                    {t('專案進度')}
                  </h6>
                  <small>Web Design</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '80%' }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>Website Markup</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '72%' }}
                      aria-valuenow='72'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>One Page</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '89%' }}
                      aria-valuenow='89'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>Mobile Template</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '55%' }}
                      aria-valuenow='55'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>Backend API</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '66%' }}
                      aria-valuenow='66'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-sm-6 mb-3'>
              <div class='card h-100'>
                <div class='card-body'>
                  <h6 class='d-flex align-items-center text-primary mb-3'>
                    <i class='bi bi-kanban-fill me-2'></i>
                    {t('專案進度')}
                  </h6>
                  <small>Web Design</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '80%' }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>Website Markup</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '72%' }}
                      aria-valuenow='72'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>One Page</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '89%' }}
                      aria-valuenow='89'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>Mobile Template</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '55%' }}
                      aria-valuenow='55'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <small>Backend API</small>
                  <div class='progress mb-3' style={{ height: '5px' }}>
                    <div
                      class='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '66%' }}
                      aria-valuenow='66'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
