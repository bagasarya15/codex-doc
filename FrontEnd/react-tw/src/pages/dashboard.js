import React from 'react'

const Dashboard = () => {
  return (
    <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-lg">
            <img src='./img/aset1.jpg'></img>
            <p className='italic'>Mechanical Keyboard Type 1</p>
          </div>
          <div className="rounded bg-white h-40 shadow-lg">
            <img src='./img/aset2.jpg'></img>
            <p className='italic'>Mechanical Keyboard Type 2</p>
          </div>
          <div className="rounded bg-white h-40 shadow-lg">
            <img src='./img/aset3.jpg'></img>
            <p className='italic'>Mechanical Keyboard Type 3</p>
          </div>
        </div>

        <div className="grid col-1 bg-white h-96 shadow-xl mt-32">
          <img src='./img/aset4.jpg'></img>
        </div>
    </>
  )
}

export default Dashboard