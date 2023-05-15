import React, {useState} from 'react' //rafce
import ChildCalc from './ChildCalc'
// import '../App.css';

const ParentCalculator = () => {
    const [input1, setInput1]=useState(0)
    const [input2, setInput2]=useState(0)
    const [hasil, setHasil]=useState(0)

    const perkalian = () => {
        setHasil(Number(input1) * Number(input2))
    }

    const pembagian = () => {
        setHasil(Number(input1) / Number(input2))
    }

    const tambah = () => {
        setHasil(Number(input1) + Number(input2))
    }

    const kurang = () => {
        setHasil(Number(input1) - Number(input2))
    }

    return (
        <div>
            <ChildCalc functInput1 = {setInput1}  functInput2 = {setInput2} functHasil = {hasil} functPerkalian = {perkalian} functPembagian = {pembagian} functTambah = {tambah} 
            functKurang = {kurang} />
        </div>
    )
}

export default ParentCalculator