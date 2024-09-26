import PropTypes from 'prop-types'
const Tarea = ({ id, tarea, completada, borrarTarea, completarTarea }) => {

    return (
        <div>
            <div style={{ border: '2px solid black', padding: '2px'}}>
                <h3> Tarea numero: {id}</h3>
                <p> Descripcion: {tarea}</p>
                <button
                    onClick={() => completarTarea(id)} style={{ backgroundColor: completada ? 'green' : "#0d6efd", color: "black"}}>
                    {completada ? "Completada" : "Completar"}
                </button>
                <button onClick={() => borrarTarea(id)}>Borrar</button>
            </div>
        </div>

    )
}
Tarea.propTypes = {
    id: PropTypes.number,
    tarea: PropTypes.string,
    completada: PropTypes.bool,
    borrarTarea: PropTypes.func,
}
export default Tarea

