import React, { useState } from "react";

const Calculator = (props) => {
    const [input1, setInput1]=useState(0)
    const [input2, setInput2]=useState(0)
    const [hasil, setHasil]=useState(0)

    const perkalian = () => {
        setHasil(Number(input1) * Number(input2))
    }

    return (
        <div>
            <h5><input type='number' onChange={(e)=>setInput1(e.target.value)}></input></h5>
            <div>
                <button onClick={perkalian}> x </button>
                <button className="class-bagi" onClick={()=>setHasil(Number(input1) / Number(input2))}> / </button>
                <button className="class-tambah" onClick={()=>setHasil(Number(input1) + Number(input2))}> + </button>
                <button onClick={()=>setHasil(Number(input1) - Number(input2))}> - </button>
            </div>
            <h5><input type='number' onChange={(e)=>setInput2(e.target.value)}></input></h5>
            <h1 className="class-hasil">Hasil : {hasil} </h1>
        </div>
    )
}

export default Calculator