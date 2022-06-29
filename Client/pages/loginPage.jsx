import React, { useState, useEffect } from 'react';
import { LoginPageFields } from '../components/loginPage/loginPageDumb';

const Login = () => {

  const serverRequst = async () => {
    const body =  
      {
        UserName: "qweKing",
        EMail: "kenzxc@gmail.com",
        role: "Client",
        password: "SSSr4nk",
      }

    let response = await fetch.post('http://carserviceboard.somee.com/api/Users/Register', { body });
    console.log(response);
    let responseJson = await response.json();
    console.log(responseJson);
  };

  useEffect(() => {
    // setIsLoginPage(isLoginPage);
    // serverRequst();
  }, []);

  const pageFormFields = LoginPageFields;

  return (
     <>
      <div className='mainLoginComponent'>
          <div className='loginComponent'>
              <p className='LoginPageMainText'>
                  Login
              </p>
              <form>
              <div>
              {pageFormFields.map((fields, index) => (
                <div key={index} className='loginFields'>
                    <input type='text' placeholder={fields.field} style={{ borderRadius: '7px', borderColor: 'black', borderWidth: '3px' }} />
                </div>
              ))}
              </div>
                <button className='login_btn'>
                    LogIn
                </button>
              </form>
          </div>
      </div>
     </>
  )
}
export default Login;
