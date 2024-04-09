import React from 'react';
import './loginform.css'; 
import { TiShoppingCart,FaUser,FaLock } from "react-icons/ti"; 

const loginform = () => {
  return (
    <div className='wrapper'>
        <form action="">
        <TiShoppingCart />
            <h1>YOUR OWN SHOP</h1>
            <div className="input-box">
                <input type="text"placeholder='Email'required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password"placeholder='password'required />
                <FaLock className='icon'/>
            </div>

            <div className="forgot-password">
                <label ><input type="checkbox" />Recordar contraseña</label>
                <a href="#">olvido la contraseña?</a>
            </div>

            <button type="submit">Ingresar</button>

            <div className="register-link">
                <p>No tienes Cuenta? <a href="#">Crear Cuenta</a></p>
            </div>
        </form>
       
    </div>
  );
};

export default loginform;