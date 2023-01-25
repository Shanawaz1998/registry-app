import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



function Registry()
{

    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false)

    useEffect(()=>
    {
        if(textInput.length > 10)
        {
            setError(true)
        }
        else{
            setError(false)
        }
    }, [textInput])

    const addItem = (e) =>
    {
        e.preventDefault();  
        if(error) return;
        const tempData = [...registryData];
        tempData.push(textInput);
        setRegistryData(tempData)
        setTextInput("")
    }

    const removeItem = (index) =>
    {
        if(error) return;
        let newData = [...registryData];
        newData.splice(index,1);
        setRegistryData(newData)
    }
    const editItem = (index) =>
    {
        if(error) return;
        let newData = [...registryData];
        newData[index] = textInput;
        setRegistryData(newData)
    }

    console.log(registryData)
    return (
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to goto home</Link>
            <form onSubmit={addItem}>
                <label>text input :
                    <input type="text" value={textInput} onChange ={(e) => setTextInput(e.target.value)}/>
                </label>
                <br />
                {error ? <span style={{color: "red"}}>Lenght of the text exceded by 10 letters</span> : null}
                <input type="submit" value="submit"/>
                {registryData.map((item, index) =>
                {
                    return <li key={index}>{item}<button onClick={() => removeItem(index)}>Delete</button>
                    <button onClick={() => editItem(index)}>Edit</button></li>
                })}
            </form>
        </div>
    )
}

export default Registry; 