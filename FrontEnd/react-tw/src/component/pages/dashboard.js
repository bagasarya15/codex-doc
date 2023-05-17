import React from 'react';

const Dashboard = () => {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      {/* <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-70 shadow-lg">
            <img src='./img/aset1.webp'></img>
            <p className='font-bold '>ROG Phone 6 Diablo Immortal Edition</p>
            <p>Harga ASUS</p>
          </div>
          <div className="rounded bg-white h-40 shadow-lg">
            <img src='./img/aset2.webp'></img>
            <p>ROG Phone 6 BATMAN Edition</p>
          </div>
          <div className="rounded bg-white h-40 shadow-lg">
            <img src='./img/aset3.webp'></img>
            <p>ROG Phone 6 Pro</p>
          </div>
        </div> */}

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-lg">
          <img
            src="./img/aset1.webp"
            class="w-full h-48 object-cover object-center"
          ></img>
          <div class="p-4">
            <p class="text-lg font-semibold mb-2">
              ROG Phone 6 Diablo Immortal Edition
            </p>
            <div class="border-t-1 border border-black-500"></div>
            <p class="text-gray-700 mt-2">Harga Asus</p>
            <p class="text-red-700 mb-2">Rp 16.999.000</p>
            <div class="border-t-1 border border-black-500"></div>
            <ul class="list-none mt-2">
              <li>Qualcomm Snapdragon 8+ Gen 1</li>
              <li>LPDDR5 18GB</li>
              <li>UFS3.1 512GB</li>
              <li>Baterai 6000mAh</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg">
          <img
            src="./img/aset2.webp"
            class="w-full h-48 object-cover object-center"
          ></img>
          <div class="p-4">
            <p class="text-lg font-semibold mb-2">
              ASUS Zenbook S 13 OLED (UX5304)
            </p>
            <div class="border-t-1 border border-black-500"></div>
            <p class="text-gray-700 mt-2">Harga Asus</p>
            <p class="text-red-700 mb-2">Rp 22.999.000</p>
            <div class="border-t-1 border border-black-500"></div>
            <ul class="list-none mt-2">
              <li>Windows 11 Pro - ASUS</li>
              <li>13th Gen Intel® Core™ i7 Processor</li>
              <li>13.3” 2.8K OLED HDR NanoEdge</li>
              <li>Up to 1 TB SSD</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg">
          <img
            src="./img/aset3.webp"
            class="w-full h-48 object-cover object-center"
          ></img>
          <div class="p-4">
            <p class="text-lg font-semibold mb-2">ROG Phone 6 Pro</p>
            <div class="border-t-1 border border-black-500"></div>
            <p class="text-gray-700 mt-2">Harga Asus</p>
            <p class="text-red-700 mb-2">Rp 18.999.000</p>
            <div class="border-t-1 border border-black-500"></div>
            <ul class="list-none mt-2">
              <li>Qualcomm Snapdragon 8+ Gen 1</li>
              <li>LPDDR5 18GB</li>
              <li>UFS3.1 512GB</li>
              <li>Baterai 6000mAh</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div class="bg-white rounded-lg shadow-lg">
          <img
            src="./img/aset4.webp"
            class="w-full h-48 object-cover object-center"
          ></img>
          <div class="p-4">
            <p class="text-lg font-semibold mb-2">
              ROG Strix Scar 16 (2023) G634JY-I949M6T-O
            </p>
            <div class="border-t-1 border border-black-500"></div>
            <p class="text-gray-700 mt-2">Harga Asus</p>
            <p class="text-red-700 mb-2">Rp 71.999.000</p>
            <div class="border-t-1 border border-black-500"></div>
            <ul class="list-none mt-2">
              <li>NVIDIA® GeForce RTX™ 4090</li>
              <li>13th Gen Intel® Core™ i9-13980HX</li>
              <li>16 inch, Refresh Rate:240Hz</li>
              <li>2TB PCIe® 4.0 NVMe™ M.2 SSD</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg">
          <img
            src="./img/aset5.webp"
            class="w-full h-48 object-cover object-center"
          ></img>
          <div class="p-4">
            <p class="text-lg font-semibold mb-2">
              Zenbook S 13 Flip OLED (UP5302, 12th Gen Intel)
            </p>
            <div class="border-t-1 border border-black-500"></div>
            <p class="text-gray-700 mt-2">Harga Asus</p>
            <p class="text-red-700 mb-2">Rp 23.999.000</p>
            <div class="border-t-1 border border-black-500"></div>
            <ul class="list-none mt-2">
              <li>Windows 11 - ASUS</li>
              <li>Intel® Iris® Xe graphics</li>
              <li>13.3" 16:10 2.8K OLED NanoEdge</li>
              <li>Long-lasting 67 Wh battery</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg">
          <img
            src="./img/aset6.webp"
            class="w-full h-48 object-cover object-center"
          ></img>
          <div class="p-4">
            <p class="text-lg font-semibold mb-2">
              ROG Flow X13 (2022) GV301RC-R735A6T-O
            </p>
            <div class="border-t-1 border border-black-500"></div>
            <p class="text-gray-700 mt-2">Harga Asus</p>
            <p class="text-red-700 mb-2">Rp 25.999.000</p>
            <div class="border-t-1 border border-black-500"></div>
            <ul class="list-none mt-2">
              <li>GeForce RTX™ 3050 Laptop GPU</li>
              <li>AMD Ryzen™ 7 6800HS</li>
              <li>13.4 inch, Refresh Rate:120Hz</li>
              <li>512GB PCIe® 4.0 NVMe™ M.2 SSD</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid col-1 bg-white h-80 shadow-xl mt-32"></div>
    </>
  );
};

export default Dashboard;
