import React from "react";
import PropTypes from "prop-types"

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                {/*Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (","). Si el separador es una cadena vacía todos los elementos son unidos sin ningún carácter entre ellos.*/}
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
        
    );
}


//Pasar props por default
Propiedades.defaultProps = {
    porDefecto: "Las Props",
}

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,
}