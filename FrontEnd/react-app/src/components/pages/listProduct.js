import React, { useState } from 'react'
import '../../App.css';

function ListProduct() {
    const ProdutList = [
        {id:1, nama: "Laptop", harga: 2000, jumlah: 9, likes: 0},
        {id:2, nama: "Mouse", harga: 500, jumlah: 20, likes: 0},
        {id:3, nama: "Lemari", harga: 1000, jumlah: 5, likes: 0},
        {id:4, nama: "Sepeda", harga: 5000, jumlah: 3, likes: 0},
        {id:5, nama: "Kemeja", harga: 850, jumlah: 12, likes: 0},
        
    ]

    const [product, setProduct] = useState(ProdutList)

    const tambah = (id) => {
        setProduct([
            ...product.map((produk)=>{
                if (produk.id === id){
                    produk.jumlah = produk.jumlah +1
                    return produk
                }
                return produk
            })
        ])    
    }

    const like = (id) => {
        setProduct([
            ...product.map((produk)=>{
                if (produk.id === id){
                    produk.likes = produk.likes +1
                    return produk
                }
                return produk
            })
        ])    
    }

    const kurang = (id) => {
        setProduct([
            ...product.map((produk)=>{
                if (produk.id === id){
                    produk.jumlah = produk.jumlah -1
                    return produk
                }
                return produk
            })
        ])    
    }

    let i = 1
    return (
        <div className='body-product'>
            <h3>DAFTAR PRODUK</h3>
            <table className='table-product'>
                <tr>
                    <th>No</th>
                    <th>Nama Produk</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                    <th>Like</th>
                    <th>Aksi</th>
                </tr>
                
                {product.map(produk=>(
                    <tr>
                        <td>{i++}</td>
                        <td>{produk.nama}</td>
                        <td>{produk.harga}</td>
                        <td>{produk.jumlah}</td>
                        <td>{produk.likes}</td>
                        <td>
                            <button onClick={()=>kurang(produk.id)}>-</button>
                            <button className='list-plus' onClick={()=>tambah(produk.id)}>+</button>
                            <button className="like-class" onClick={()=>like(produk.id)}>Like</button>
                        </td>
                        
                        
                        
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ListProduct