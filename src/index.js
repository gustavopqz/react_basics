//Import react
import React from "react";
import ReactDOM from 'react-dom'

//Import components
import First from './components/First'
import Arrow from './components/Arrow'
import UsingParameters from './components/Parameters'
import ParametersArrow from './components/Parameters_arrow'
import ReturnDiv from "./components/ReturnDiv";
import ReturnFragment from './components/ReturnFragment'

//Rendering

//Simple render
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('hello_world'))

//First component
ReactDOM.render(<First/>, document.getElementById('first'))

//First component using arrow function
ReactDOM.render(<Arrow/>, document.getElementById('arrow'))

//Using parameters in components
ReactDOM.render(
    <UsingParameters nome="Gustavo"/>,
    document.getElementById('using_parameters')
)

//Using parameters in arrow functions
ReactDOM.render(
    <ParametersArrow ordinal="second"/>,
    document.getElementById('parameters_arrow')
)

//Return types

//Return div
ReactDOM.render(<ReturnDiv/>, document.getElementById('return_div'))

//Return fragment
ReactDOM.render(<ReturnFragment/>, document.getElementById('return_fragment'))