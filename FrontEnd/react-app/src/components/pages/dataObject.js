import React, { useState } from 'react'

const DataObject = (props) => {
    const [person, setPerson]= useState({
        nama: "Zufar",
        alamat: "Jogja",
        usia: 20
    })

    const changeHandler = (e) => {
        setPerson(prev => {
            return {...prev, [e.target.name]:[e.target.value]}
        })
    }
    return (
        <div>
            <div>
                <input type='text' name="nama" onChange={changeHandler}></input>
                <input type='text' name="alamat" onChange={changeHandler}></input>
                <input type='text' name="usia" onChange={(e)=>setPerson(prev=> {return {...prev,usia:e.target.value} })}></input>
            </div>
            <p>Nama: {person.nama}</p>
            <p>Alamat: {person.alamat}</p>
            <p>Usia : {person.usia}</p>
        </div>
    )
}

export default DataObject