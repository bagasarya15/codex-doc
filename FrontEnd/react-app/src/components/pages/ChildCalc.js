import React, {useState} from 'react'
// import '../App.css';

const ChildCalc = ({functInput1, functInput2, functHasil, functPerkalian, functPembagian, functTambah, functKurang}) => {
    return (
    <div>
        <div>
            <input type='number' onChange={(e)=>functInput1(e.target.value)}></input>
            <input type='number' onChange={(e)=>functInput2(e.target.value)}></input>
            <div>
                <button onClick={functPerkalian}> x </button>
                <button className='class-bagi' onClick={functPembagian}> / </button>
                <button className='class-tambah' onClick={functTambah}> + </button>
                <button onClick={functKurang}> - </button>
            </div>
            <h5 className="class-hasil">Hasil : {functHasil} </h5>
        </div>
    </div>
    )
}


export default ChildCalc