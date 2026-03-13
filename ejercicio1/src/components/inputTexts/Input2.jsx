import React from 'react'

const Input2 = ({input2}) =>{
    return(
    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</span>
        <input type="text" class="form-control" placeholder={input2} aria-label="Username" aria-describedby="addon-wrapping"/>
    </div>
    )
}
export default Input2;