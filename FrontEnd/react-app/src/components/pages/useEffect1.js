import React, { useEffect, useState } from 'react'

const UseEffect1 = (props) => {

    const[nama, setNama] = useState('')
    const[tampil, setTampil] = useState(false)
    useEffect(()=>{
        alert('Helloww  ')
    },[tampil])

    // const[count, setCount] = useState(10)
    // useEffect(()=> {
    //     setTimeout(()=>{
    //         setCount(count -1)
    //     }, 1000)
    // },)

    return (
        <div>
            <h4>Nama : {nama}</h4> 
            <input type='text' onChange={(e)=>{setNama(e.target.value)}}></input>
            <button onClick={()=>setTampil(!tampil)}>Tampilkan Alert</button>
            {/* <h4>Kereta Akan Tiba Dalam Hitungan = {count}</h4> */}
        </div>
    )
}

export default UseEffect1