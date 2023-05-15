import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Input } from '../../components/FormElement';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../slice/authSlice';
import LoginImg from '../../assets/Login.png';

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isLogin, loginError } = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();
  const defaultVal = useRef({
    username: '',
    password: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultVal.current,
    mode: 'onTouched',
  });
  const submit = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center flex-md-row flex-column-reverse container-vh'>
        <div className='col-md-5 col-12 d-flex mb-md-0 mb-4'>
          <form onSubmit={handleSubmit(submit)} className='col'>
            <h2 className='mb-3'> {t('登入')}</h2>
            <div
              className={`alert alert-danger ${
                loginError ? 'd-block' : 'd-none'
              }`}
              role='alert'
            >
              {t('登入錯誤訊息')}
            </div>
            <div className='mb-3'>
              <Input
                register={register}
                errors={errors}
                id='username'
                type='text'
                labelText={t('帳號')}
                rules={{
                  required: {
                    value: true,
                    message: t('必填'),
                  },
                }}
              />
            </div>
            <div className='mb-3'>
              <Input
                register={register}
                errors={errors}
                id='password'
                type='password'
                labelText={t('密碼')}
                rules={{
                  required: {
                    value: true,
                    message: t('必填'),
                  },
                  minLength: {
                    value: 6,
                    message: t('長度需大於6'),
                  },
                }}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              {t('登入')}
            </button>
          </form>
        </div>
        <div className='col-md-6 col-12'>
          <img
            src={LoginImg}
            alt='login'
            className='object-cover img-fluid mb-md-0 mb-4'
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
