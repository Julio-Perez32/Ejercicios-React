import React from 'react'

const Input1 = ({tituloInput}) =>{
    return(
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder={tituloInput} aria-label="Username"/>
    </div>
    )
};

export default Input1;
