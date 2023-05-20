import React, { useState, useEffect } from 'react';
import apiMethod from '../../api/apiMethod';
import { useForm } from 'react-hook-form';
import Alert from '../alert';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdate } from '../../../redux/action/actionReducer';
import { Link } from 'react-router-dom';


const EditUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams()

  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userById, setUserById] = useState('');

  let { user, message, refresh } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  
  const setFilter = () => {
      const filterUser = user.filter((item) => item.id == params.id); 
      setUserById(filterUser)
  };

  const handleRegistration = async (data) => {
    data.id = userById[0]?.id
    dispatch(userUpdate(data))
    navigate('/users');
  };

  const registerOptions = {
    username: { required: 'username is required' },
    // password: {
    //   required: 'password is required',
    //   minLength: {
    //     value: 5,
    //     message: 'password must have at least 8 characters',
    //   },
    // },
    firstname: { required: 'first name is required' },
    lastname: { required: 'last name is required' },
    role_id: { required: 'role required' },
  };

  useEffect(() => {
    setFilter()
  }, [refresh]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="max-w-xl bg-white py-6 px-3 m-auto w-full">
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <div className="col-span-1">
              <input
                name="username"
                placeholder="Username"
                autoComplete="off"
                {...register('username', registerOptions[0]?.username)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
                defaultValue={userById[0]?.username}
              />
              <span className="text-sm text-rose-600">
                {errors?.username && errors.username.message}
              </span>
            </div>
            <div className="col-span-1 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="pass-input"
                name="password"
                placeholder="Password"
                {...register('password', registerOptions.password)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-800 absolute top-1/2 right-2 transform -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <span className="text-sm text-rose-600">
                {errors?.password && errors.password.message}
              </span>
            </div>
            <div className="col-span-1">
              <input
                defaultValue={userById[0]?.customer.firstname}
                type="text"
                name="firstname"
                placeholder="Firstname"
                autoComplete="off"
                {...register('firstname', registerOptions.firstname)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <span className="text-sm text-rose-600">
                {errors?.firstname && errors.firstname.message}
              </span>
            </div>
            <div className="col-span-1">
              <input
                defaultValue={userById[0]?.customer.lastname}
                type="text"
                name="lastname"
                placeholder="Lastname"
                autoComplete="off"
                {...register('lastname', registerOptions.lastname)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <span className="text-sm text-rose-600">
                {errors?.lastname && errors.lastname.message}
              </span>
            </div>
            <div className="col-span-1">
              <select
                class="bg-gray-50 border border-gray-300 w-full py-2 px-2 text-gray-800 rounded-lg"
                name="role_id"
                {...register('role_id', registerOptions.role_id)}
              >
                <option value="1">Choose a role</option>
                {/* {Array.isArray(userRole) && userRole.map((ur) => (
                  <option key={ur.id} value={ur.id}>
                    {ur.name}
                  </option>
                ))} */}
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
              onClick={() => navigate('/users')}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
