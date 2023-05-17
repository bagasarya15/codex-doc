import React from 'react';

const Category = () => {
  const data = [
    { src: './img/category1.webp', name: 'Smartphone' },
    { src: './img/category2.webp', name: 'Laptop' },
    { src: './img/category3.webp', name: 'Display / Dekstop' },
    { src: './img/category4.webp', name: 'Accesoris' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mt-24">
      {(data || []).map((mn) => (
        <div class="bg-gray-200 p-4">
          <img src={mn.src}></img>
          <h3 class="text-sm font-semibold">{mn.name}</h3>
          {/* <ul>
              {(mn.spec||[]).map((sp)=>
              <li>{sp}</li>)}
            </ul> */}
        </div>
      ))}
    </div>
  );
};

export default Category;
