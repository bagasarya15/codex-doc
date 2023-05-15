import React, { useState } from 'react'


const Counter = (props) => {
    const [count, setCount] = useState(0)
    const [nama, setNama] = useState()

    const showNama = (e) => {
        setNama(e.target.value)
    }
    
    return (
        <div>
            Count: {count}
            <div>
                <button onClick={()=>setCount(count+1)}> + </button>
                <button onClick={()=>setCount(count-1)}> - </button>
            </div>

            <h4>Nama : {nama}</h4>
            <input type='text' onChange={showNama}></input>
            
            <div>
                <a href='https://chat.openai.com/'>Ingin buat calculator? tanya disini!</a>
            </div>
        </div>
    )
}

export default Counter
