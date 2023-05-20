import Alert from '../alert';
import { useForm } from 'react-hook-form';
import apiMethod from '../../api/apiMethod';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const CreateProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const handleRegistration = async (data) => {
    const result = await apiMethod.create(data);
    const status = result.data.status;
    const message = result.data.message;

    if (status) {
      if (status == 200) {
        Alert.AlertSucces(message);
      } else {
        Alert.AlertError(message);
      }
      navigate('/product');
    }
  };

  const ValidationForm = {};

  return (
    <div>
      <p className="text-gray-700 text-3xl mb-5 font-bold">Create Product</p>
      <div class="border-t-1 border border-black-900"></div>

      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="max-w-xl bg-white py-6 px-3 m-auto w-full">
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <div className="col-span-1">
              <input
                name="name"
                placeholder="Nama Produk"
                autoComplete="off"
                {...register('name', ValidationForm.name)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
            </div>
            <div className="col-span-1">
              <input
                name="description"
                placeholder="Description"
                autoComplete="off"
                {...register('description', ValidationForm.description)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
            </div>
            <div className="col-span-1">
              <select
                class="bg-gray-50 border border-gray-300 w-full py-2 px-2 text-gray-800 rounded-lg"
                name="category_id"
                {...register('category_id', ValidationForm.category_id)}
              >
                <option value="">Choose a category</option>
                {/* {props.userRole.map((ur) => (
                                <option key={ur.id} value={ur.id}>
                                  {ur.name}
                                </option>
                              ))} */}
                <option value='1'> Makanan </option>
                <option value='2'> Minuman </option>
              </select>
            </div>
            <div className="col-span-1">
              <input
                name="price"
                placeholder="Price"
                autoComplete="off"
                {...register('price', ValidationForm.price)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
            </div>
            <div className="col-span-1">
              <div class="shrink-0">
                <img
                  class="h-16 w-16 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                  alt="Current profile photo"
                />
              </div>
              <label class="block">
                <span class="sr-only">Choose product photo</span>
                <input
                  type="file"
                  name="image"
                  {...register('image', ValidationForm.image)}
                  class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-900
                    hover:file:bg-blue-100 mt-3"
                />
              </label>
            </div>
          </div>

          <div class="border-t-1 border border-black-900 mt-5"></div>

          <div className="flex-row space-x-4 mt-4 text-right">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              Submit
            </button>

            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => navigate('/product')}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
