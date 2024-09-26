import { useState } from 'react'
import ArrayTareas from './components/ArrayTareas'
import Formulario from './components/formulario'
import ListaTareas from './components/ListaTareas'

function App() {

  const [tareas, setTareas] = useState(ArrayTareas)
  const [contadorId, setContadorId] = useState(ArrayTareas.length)

  const agregarTarea = (nuevaTarea) => {
    const objetoTarea = {
      id: contadorId + 1,
      ...nuevaTarea,
    }
    setTareas([...tareas, objetoTarea])
    setContadorId(contadorId + 1)
  }

  const borrarTarea = (tareaId) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id!== tareaId);
    setTareas(nuevasTareas)
}

const completarTarea = (tareaId) => {
  const nuevasTareas = tareas.map((tarea) =>
    tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea )
  setTareas(nuevasTareas)
}

  return (
    <>
      <Formulario agregarTarea={agregarTarea} />
      <ListaTareas ArrayTareas={tareas} borrarTarea={borrarTarea} completarTarea={completarTarea} />
    </>
  )
}
export default App
