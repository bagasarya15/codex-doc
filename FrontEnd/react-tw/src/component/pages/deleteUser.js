import React from 'react';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import apimethod from '../api/apiMethod';
import { useForm } from 'react-hook-form';
import Alert from './alert';

const DeleteUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (id) => {
    const result = await apimethod.deleteUser(id);
    const status = result.data.status;
    const message = result.data.message;

    if(status == 200){
      Alert.AlertSucces(message)
    }
    
    props.closeModal();
  };

  const registerOptions = {
    id: {required: 'id tidak ditemukan'},
  };

  return (
    <div>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete Confirm
                  </Dialog.Title>
                  <div class="border-t-1 border border-black-900 mt-3"></div>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
                          <div className="col-span-1">
                            <input type='hidden' 
                                name="id" 
                                defaultValue={props.userById.id} 
                                {...register('id', registerOptions.id,
                            )}/>
                            <p className='font-semibold mb-7 uppercase text-md text-rose-600'>Hapus data yang anda pilih ?</p>
                          </div>
                        </div>
                        <div class="border-t-1 border border-black-900 mt-3"></div>
                        <div className="flex-row space-x-4 mt-4 text-right">
                          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Ya !
                          </button>

                          <button
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={props.closeModal}
                          >
                            Batal
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DeleteUser;
