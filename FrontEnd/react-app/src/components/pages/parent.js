import React, {useState} from "react";
import ChildFunct from "./chilld";

const ParentFunct = (props) =>{
    const [bunga, setNamaBunga] = useState('Matahari')
    const [nama, setNama] = useState('')

    const ubahNamaBunga=(namaBunga)=>{
        setNamaBunga(namaBunga)
    }

    return(
        <div>
            <label>Nama Bunga: {bunga}</label>
            <div>
            <h5>Pengirim : <input type="text" onChange={(e)=>setNama(e.target.value)}></input></h5>
            </div>
            <ChildFunct fungsiUbah={ubahNamaBunga} namaPengirim={nama}/>
        </div>
    )
}

export default ParentFunct