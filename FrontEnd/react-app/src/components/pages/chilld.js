import React from "react";

const ChildFunct = ({fungsiUbah, namaPengirim}) => {
    return(
        // <div>Nama: {props.namaawal} </div>

        <div>
            <h3>Pengirim Bunga: {namaPengirim}</h3>
            <button onClick={()=>fungsiUbah('Rose')}>Rose</button>
            <button onClick={()=>fungsiUbah('Mawar')}>Mawar</button>
            <button onClick={()=>fungsiUbah('Anggrek')} >Anggrek</button>
            <button onClick={()=>fungsiUbah('Melati')}>Melati</button>
        </div>
    )
}

export default ChildFunct