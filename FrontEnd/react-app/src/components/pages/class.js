import React, { Component } from 'react';
class TampilNama extends Component {
    state = { nama: '' } 

    tampilNama = (e) => {
        this.setState({nama: e.target.value})
    }
    
    showAlert = () => {
        alert(`Halo, ${this.state.nama}!`);
    }
    
    render() { 
        return (
            <div>
                <p>Input Your Name</p>
                <label>Nama : {this.state.nama}</label>
                <input type='text' onChange={this.tampilNama} />
                <button onClick={this.showAlert}>Tampilkan Nama</button>
            </div>
        );
    }
    
}

export default TampilNama;