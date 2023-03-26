import React, { useState } from 'react'

const Contacto = () => {

    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setEnviado(true)
    }

    return (
        <div className='containerContacto'>
            <h1>Contactate con nosotros dejandonos un mensaje </h1>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre y Apellido</label>
                    <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="textarea">Agrega tu mensaje</label>
                    <textarea type="text" placeholder="..." id='textarea' onChange={(e) => setMensaje(e.target.value)} />
                </div>
                <button disabled={!nombre || !mensaje}>Enviar</button>
            </form>
            {enviado ? <p className='mensajeEnviado'>Mensaje enviado</p> : ""}
        </div>
    )
}

export default Contacto