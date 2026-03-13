import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'


//alertas
import Alert1 from './components/Alerts/Alert1';
import Alert2 from './components/Alerts/Alert2';

//inputs
import Input1 from './components/inputTexts/Input1';
import Input2 from './components/inputTexts/Input2';

function App() {
  return (
    <>
    <h1>20 componentes bootstrap y react wowwwww</h1>

    <Alert1
    titulo={"alerta de ejemplo jeje"}
    />
    <Alert2
    titulo={"alerta con un link se supone"}
    link={"aca jeje"}
    />

    <Input1
    tituloInput={"correo"}
    />

    <Input2
    input2={"Contraseña"}
    />
    </>
  )
}

export default App
