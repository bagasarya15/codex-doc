import React, { useEffect, useState } from 'react' // rafce

const Latihan = () => {
    const [text, setText] = useState('')
    const [record, setRecord] = useState('')
    const [isAdd, setIsAdd]= useState(false)
    const [isUbah, setIsUbah]= useState(false)
    const [isDelete, setIsDelete]= useState(false)  

    const DeleteRecord = () => {
        setRecord('')
        setIsDelete(!isDelete)
    }

    useEffect(()=>{
        setText(record)
    }, [isAdd, isUbah, isDelete])

    return (
    <div>
        <input type="text" onChange={(e)=>setRecord(e.target.value)}></input>
        <button onClick={()=>setIsAdd(!isAdd)}>Add</button>
        <button onClick={()=>setIsUbah(!isUbah)}>Edit</button>
        <button onClick={DeleteRecord}>Delete</button>

        <div>
            <label>{text}</label>
        </div>
    </div>
    )
}

export default Latihan