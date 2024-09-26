import PropTypes from 'prop-types'
import { useState } from 'react'

const Formulario = ({ agregarTarea }) => {
    const [tareaIngresada, setTareaIngresada] = useState('');
    const HandlerTareaNueva = (event) => {
        setTareaIngresada(event.target.value);
    }
    const Submit = (event) => {
        event.preventDefault();
        const nuevaTarea = {
            tarea: tareaIngresada,
            completada: false,
        }
        agregarTarea(nuevaTarea);
        setTareaIngresada('')
    }
    return (
        <>
            <h3>Tareas</h3>
            <form onSubmit={Submit}>
                    <div>
                        <input value={tareaIngresada} onChange={HandlerTareaNueva} placeholder='Ingrese descripcion de tarea'/> 
                    </div>
                    <div>
                        <button variant="primary" type="submit" >Agregar</button>
                    </div>

            </form>
        </>
    )
}

Formulario.propTypes = {
    agregarTarea: PropTypes.func,
}


export default Formulario