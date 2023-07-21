import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { selectUserInfo, UpdateUserAsync } from "../UserProfileSlice";

export default function UserProfile() {
  const [formOpen, setFormOpen] = useState(-1);
  const [addnewad, setAddNew] = useState(false);
  const user = useSelector(selectUserInfo);
  console.log(user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleRemove = (index) => {
    console.log("called delte button");
    const newuser = { ...user, address: [...user.address] };

    newuser.address.splice(index, 1);
    dispatch(UpdateUserAsync(newuser));
  };

  const handleEdit = (index) => {
    setFormOpen(index);
    const addresses = user.address[index];

    setValue("fullname", addresses.fullname);
    setValue("email", addresses.email);
    setValue("phone", addresses.phone);
    setValue("street", addresses.street);
    setValue("city", addresses.city);
    setValue("region", addresses.region);
    setValue("postal", addresses.postal);
  };

  const onSubmit = (data, index) => {
    console.log(data, "data of pal");
    console.log(index, "index ofpal");
    const newuser = { ...user, address: [...user.address] };

    newuser.address.splice(index, 1, data);
    dispatch(UpdateUserAsync(newuser));
    setFormOpen(-1);
  };

  const handleAdd = () => {
    console.log("call add button");
    setAddNew(true);
    setFormOpen(-1);
    reset();
  };
  const handleNew = (data) => {
    console.log("add new data");
    dispatch(UpdateUserAsync({ ...user, address: [...user.address, data] }));
    reset();
    setAddNew(false);
  };
  return (
    <div>
      {/* <h1 className="text-4xl">Name:- {user.email}</h1> */}
      <h1 className="text-2xl">street Addresses</h1>
      <button
        onClick={handleAdd}
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add New Adress
      </button>
      {addnewad ? (
        <form
          noValidate
          className="bg-white px-5 py-5"
          onSubmit={handleSubmit(handleNew)}
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12 px-5">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 ">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("fullname", {
                        required: "Full Name is required",
                      })}
                      id="fullname"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      {...register("phone", {
                        required: "Phone No. is required",
                      })}
                      type="tel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("street", {
                        required: "street-address is required",
                      })}
                      id="street"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("city", {
                        required: "City is required",
                      })}
                      id="city"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("region", {
                        required: "Region is required",
                      })}
                      id="region"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("postal", {
                        required: "Postal-code is required",
                      })}
                      id="postal"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                onClick={() => reset()}
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Reset
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Adress
              </button>
            </div>
          </div>
        </form>
      ) : null}
      <div>
        {user?.address.map((el, index) => (
          <div>
            <div>
              {formOpen === index ? (
                <form
                  noValidate
                  className="bg-white px-5 py-5"
                  onSubmit={handleSubmit((data) => {
                    onSubmit(data, index);
                  })}
                >
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12 px-5">
                      <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                        Personal Information
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600 ">
                        Use a permanent address where you can receive mail.
                      </p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="fullname"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Full name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("fullname", {
                                required: "Full Name is required",
                              })}
                              id="fullname"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              {...register("email", {
                                required: "Email is required",
                              })}
                              type="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone
                          </label>
                          <div className="mt-2">
                            <input
                              id="phone"
                              {...register("phone", {
                                required: "Phone No. is required",
                              })}
                              type="tel"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="street"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Street address
                          </label>

                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("street", {
                                required: "street-address is required",
                              })}
                              id="street"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            City
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("city", {
                                required: "City is required",
                              })}
                              id="city"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            State / Province
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("region", {
                                required: "Region is required",
                              })}
                              id="region"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="postal"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            ZIP / Postal code
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("postal", {
                                required: "Postal-code is required",
                              })}
                              id="postal"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        onClick={() => setFormOpen(-1)}
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Update address
                      </button>
                    </div>
                  </div>
                </form>
              ) : null}
            </div>
            <li
              key={index}
              className="flex justify-between gap-x-6 py-5 border-solid border-2 border-gray-200 px-5"
            >
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {el.fullname}
                </p>

                <p className="text-sm leading-6 text-gray-900">{el.city}</p>
                <p className="text-sm leading-6 text-gray-900">{el.region}</p>
              </div>
              <button
                onClick={() => handleEdit(index)}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Edit
              </button>

              <button
                onClick={() => handleRemove(index)}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
