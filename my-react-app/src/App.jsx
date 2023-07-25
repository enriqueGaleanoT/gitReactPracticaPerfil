import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Headers from './components/Headers'
import Body from './components/Body'
import  Image  from './components/Image'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div id = "divGlobal">
        {/* <Button nameButton = "Aceptar" descripcion = "Click para Aceptar!" subtitulo = "Es un subtitulo"></Button>  */}
        {/* descripcion se le manda al padre */}
        
        {/* <Button nameButton = "Agregar" descripcion = "Click para Agregar!" subtitulo = "Es un subtitulo de agregar"></Button> */}
        
        {/* <Button class ="pruebaEstilosAPP" nameButton = "Eliminar" descripcion = "Click para Eliminar!" subtitulo = "Es un subtitulo de Eliminar"></Button> */}
        {/*Pregunta para despues*/}

        {/* <Body parrafo ="Este es un parrafo"></Body> */}

        <Headers name="Segio"></Headers>
        <Image ImageURL = "./img/profile-icon-design-free-vector.jpg" userName="userImage"></Image>
        <Body texto = "foto de perfil"></Body>
        <Body edad ="23"></Body>
        <Button descripcion="take a car"></Button>


      </div>
  )
}

export default App
