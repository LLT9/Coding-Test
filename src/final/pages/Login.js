import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user = 
    {
      password: "123",
      email: "admin@admin.com",
    }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    if (user.password===password && email === user.email) {
      setUser({name, email, password})
      return navigate("/dashboard")
    }
  }

  return (
      <section className='section'>
        <form className='form' onSubmit={handleSubmit}>
          <h5>login</h5>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              name
            </label>
            <input
              type='text'
              className='form-input'
              id='name'
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div classNdetailame='form-row'>
            <label htmlFor='email' className='form-label'>
              email
            </label>
            <input
              type='email'
              className='form-input'
              id='email'
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='password' className='form-label'>
            password
            </label>
            <input
              type='password'
              className='form-input'
              id='password'
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <button type='submit' className='btn btn-block'>
            Login
          </button>
        </form>
      </section>
  );
};
export default Login;