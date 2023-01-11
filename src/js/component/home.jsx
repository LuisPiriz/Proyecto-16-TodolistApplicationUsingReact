import React, {useState} from "react";
import { render } from "react-dom/cjs/react-dom.production.min";


const Home = () => {

	//declaracion de estados
	// espacio de memoria, la funcion que actualiza elvalor inicial
	const[notas,setNotas]=useState("")//1. creamos un estado del input notas
	const[todos,setTodos] = useState([]);

	// //4. procesamos todos los datos del formulario
	function enviarDatos(e) {
		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
	
		setTodos(todos.concat(notas));
		// console.log(notas);
		// console.log(todos);
	}

	const remover = (index) => {
		const nuevaLista = [...todos];
		nuevaLista.splice(index, 1);
		setTodos(nuevaLista);
	}
	// const[itemLeft,setItemLeft] = useState([]);

	// const itemCounter = (index) => {
	// 	setItemLeft(itemLeft.concat(todos.length));
	// }
	// console.log(itemLeft);
	

//create your first component
	return (
		<>
		<form className="container" onSubmit={enviarDatos}>
  <div className="mb-3">
    <h1 className="fw-bolder">to do list</h1>
    {/*2. definimos el evento ochange en el input */}
	<input type="text" className="form-control" id="input" aria-describedby="emailHelp" onChange={(e)=>{setNotas(e.target.value)}} />
  </div>

</form>
<div className="container" id="lista">
	<ul className="list-group m-3">
	{todos.map((term, index) => (
            <li className="list-group-item" key={index} value={term}>{term}
			<button type="button" className="btn-close float-end" aria-label="Close" onClick={()=>remover(index)}
			></button>
			</li>
          ))}
		<li id="itemLeft" className="list-group-item text-secondary fs-6">
			{todos.length} item left
		</li>
	</ul>
</div>

</>
	);
};
;
export default Home;
