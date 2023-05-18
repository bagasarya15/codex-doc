import React from 'react';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import apimethod from '../api/apiMethod';
import { useForm } from 'react-hook-form';
import Alert from './alert';

const EditUser = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const handleRegistration = async (data) => {
        const result = await apimethod.update(data);
        console.log(data);
        const status = result.data.status;
        const message = result.data.message;
    
        console.log(data)
        if(status){
          if(status == 200){
            Alert.AlertSucces(message)
          }else{
            Alert.AlertError(message)
          }
        }
        props.closeModal();
    };

    
    const registerOptions = {
    username: { required: 'username is required' },
    // password: {
    //     required: 'password is required',
    //     minLength: {
    //     value: 5,
    //     message: 'password must have at least 8 characters',
    //     },
    // },
    firstname: { required: 'first name is required' },
    lastname: { required: 'last name is required' },
    role_id: { required: 'role required' },
    id: { required: 'id required' },
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
                    Edit Users
                  </Dialog.Title>

                  <div class="border-t-1 border border-black-900 mt-3"></div>

                  <div className="">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full">
                        <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
                          <div className="col-span-1">
                            <input type='hidden' 
                                name="id" 
                                defaultValue={props.userById.id} 
                                {...register('id', registerOptions.id,
                            )}/>

                            <input
                              name="username"
                              placeholder="Username"
                              autoComplete="off"
                              defaultValue={props.userById.username}
                              {...register(
                                'username',
                                registerOptions.username,
                              )}
                              className="border w-full rounded-lg text-gray-800 py-2 px-2"
                            />
                            <span className="text-sm text-rose-600">
                              {errors?.username && errors.username.message}
                            </span>
                          </div>
                          <div className="col-span-1">
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              {...register(
                                'password',
                                // registerOptions.password,
                              )}
                              className="border w-full rounded-lg text-gray-800 py-2 px-2"
                            />
                            <span className="text-sm text-rose-600">
                              {errors?.password && errors.password.message}
                            </span>
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              name="firstname"
                              placeholder="Firstname"
                              autoComplete="off"
                              defaultValue={props.userById.customer.firstname}
                              {...register(
                                'firstname',
                                registerOptions.firstname,
                              )}
                              className="border w-full rounded-lg text-gray-800 py-2 px-2"
                            />
                            <span className="text-sm text-rose-600">
                              {errors?.firstname && errors.firstname.message}
                            </span>
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Lastname"
                              autoComplete="off"
                              defaultValue={props.userById.customer.lastname}
                              {...register(
                                'lastname',
                                registerOptions.lastname,
                              )}
                              className="border w-full rounded-lg text-gray-800 py-2 px-2"
                            />
                            <span className="text-sm text-rose-600">
                              {errors?.lastname && errors.lastname.message}
                            </span>
                          </div>

                          <div className='col-span-1'>                            
                            <select class="bg-gray-50 border border-gray-300 w-full py-2 px-2 text-gray-800 rounded-lg" name='role_id' {...register( 'role_id', registerOptions.role_id,)}>
                              <option value=''>Choose a role</option>
                              {props.userRole.map((ur) => (
                                <option key={ur.id} value={ur.id}>
                                  {ur.name}
                                </option>
                              ))}
                            </select>
                            <span className="text-sm text-rose-600">
                              {errors?.role_id && errors.role_id.message}
                            </span>
                          </div>
                        </div>
                        
                        <div class="border-t-1 border border-black-900 mt-5"></div>

                        <div className="flex-row space-x-4 mt-4 text-right">
                          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Submit
                          </button>

                          <button
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={props.closeModal}
                          >
                            Cancel
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
  )
}

export default EditUser