import React from 'react'

const Login = () => {
    return (
        <div className='containerLogin'>
            <h1>Inicia Sesion</h1>
            <form>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input type="text" name="" id="email" />
                </div>
                <div>
                    <label htmlFor="contrasena">Contrasena</label>
                    <input type="password" id='contrasena' />
                </div>
                <button>Ingresar</button>
            </form>
        </div>
    )
}

export default Login