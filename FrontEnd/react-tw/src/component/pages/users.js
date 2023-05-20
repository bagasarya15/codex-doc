import React, { useEffect, useState, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import apiMethod from '../api/apiMethod';
import Content from './content';
import { BsThreeDotsVertical, BsPencil, BsTrash } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import AddUser from './users/createUser';
import EditUser from './users/updateUser';
import DeleteUser from './users/deleteUser';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/action/actionReducer';
import { Link } from 'react-router-dom';

const Users = (props) => {
  const [userById, setUserById] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  let { user, message, refresh } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const column = [
    { name: '#No' },
    { name: 'Username' },
    { name: 'Firstname' },
    { name: 'Lastname' },
    { name: 'Role' },
  ];

  useEffect(() => {
    dispatch(getAll());
  }, [refresh]);

  return (
    <div>
      <ToastContainer />
      {isOpen ? (
        <AddUser
          show={isOpen}
          userRole={userRole}
          closeModal={() => setIsOpen(false)}
        />
      ) : (
        ''
      )}

      {isEdit ? (
        <EditUser
          show={isEdit}
          userRole={userRole}
          userById={userById}
          closeModal={() => setIsEdit(false)}
        />
      ) : (
        ''
      )}

      {isDelete ? (
        <DeleteUser
          show={isDelete}
          userById={userById}
          closeModal={() => setIsDelete(false)}
        />
      ) : (
        ''
      )}

      <Content title="User" isOpen={() => setIsOpen(true)}>
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              {(column || []).map((col) => (
                <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">{col.name}</span>
                </th>
              ))}
              <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {(user || []).map((dt, index) => (
              <tr key={dt.id}>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {index + 1}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.username}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.customer.firstname}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.customer.lastname}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.role.name}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          Options
                          <BsThreeDotsVertical
                            className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-400 sm:flex"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-7 mt-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={`/edit-users/${dt.id}`}
                                  // onClick={ ()=> GetById(dt.id) }
                                  className={`${
                                    active
                                      ? 'bg-blue-100 text-blue-900'
                                      : 'text-blue-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsPencil
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsPencil
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {setUserById(dt); setIsDelete(true)}}
                                  className={`${
                                    active
                                      ? 'bg-blue-100 text-blue-900'
                                      : 'text-blue-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-black-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-black-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </div>
  );
};

export default Users;
