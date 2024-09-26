import React from 'react';
import PropTypes from 'prop-types';
import Tarea from './Tarea';

const ListaTareas = ({ ArrayTareas, borrarTarea, completarTarea }) => {
    return (
        <div>
            {ArrayTareas.map((tarea) => (
                <Tarea
                    key={tarea.id}
                    id = {tarea.id}
                    tarea={tarea.tarea}
                    completada={tarea.completada}
                    borrarTarea={borrarTarea}
                    completarTarea={completarTarea}
                />
            ))}
        </div>
    );
};

ListaTareas.propTypes = {
    ArrayTareas: PropTypes.array,
    borrarTarea: PropTypes.func,
    completarTarea: PropTypes.func,
};

export default ListaTareas;

//use el key en tarea porque sino me sale un error de console log