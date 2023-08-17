import './Form.css';
import { useState } from "react";

function Form({onLoadInfo}) {
    const [name, setName]=useState("");
    const [color, setColor]=useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameTrim = name.trim();

        if(nameTrim.length > 2 && color.length > 5){
            onLoadInfo({name, color});
        } else {
            alert("Por favor chequea que la información sea correcta");
        }

        setName("");
        setColor("");
    }

    return(
        <div className='form-color'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese su nombre" value={name} onChange={handleName} />
                <input type="text" placeholder="Ingresa tu color favorito en formato hex" value={color} onChange={handleColor} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;
