import {useState} from 'react';

function Label({type, 
    labelName='helloWorld', 
    className='formLabel', 
    inputShow=true, 
    onClick,
    id}) 
    
    {
    const [value, setValue] = useState(labelName);
    function inputChange(e) {
        setValue(e.target.value);
    }
    return <div class='row'>
        <div class='alwaysShowing'>
            <label style={{
                margin: '10px'
            }}>{type}{value}</label>
            <button onClick={() => onClick(id)}>edit</button>
        </div>
        {(inputShow) && <input onChange={inputChange}></input>}
    </div>
}

export  {Label};