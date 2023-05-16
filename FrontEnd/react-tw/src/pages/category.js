import React from 'react'

const Category = () => {
  return (
    <div class="grid grid-cols-4 gap-4 mt-24">
      <div class="bg-gray-200 p-4">
        <img src='./img/category1.webp'></img>
        <h3 class="text-sm font-semibold">Smartphone</h3>
      </div>
      <div class="bg-gray-200 p-4">
        <img src='./img/category2.webp'></img>
        <h3 class="text-sm font-semibold">Laptop</h3>
      </div>
      <div class="bg-gray-200 p-4">
        <img src='./img/category3.webp'></img>
        <h3 class="text-sm font-semibold">Display / Dekstop</h3>
      </div>
      <div class="bg-gray-200 p-4">
        <img src='./img/category4.webp'></img>
        <h3 class="text-sm font-semibold">Accesoris</h3>
      </div>
    </div>
  )
}

export default Category