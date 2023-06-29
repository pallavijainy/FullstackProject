import React, { useState } from "react";

import CartPage from "./CartPage";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import { UpdateUserAsync } from "./../features/Auth/AuthSlice";
import Cart from "../features/cart/Cart";
import {
  cartData,
  DeleteCartItemAsync,
  UpdateCartAsync,
} from "../features/cart/CartSlice";
import { Link } from "react-router-dom";
import { OrderAddedAsync } from "../features/Order/OrderSlice";

const CheckOut = () => {
  const [isAddress, setIsAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const user = useSelector(selectUser);
  console.log(user);
  const [open, setOpen] = useState(true);
  const products = useSelector(cartData);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(UpdateUserAsync({ ...user, address: [...user.address, data] }));
    reset();
  };

  const handleAddress = (e) => {
    // console.log(user.address[e.target.value]);
    setIsAddress(user.address[e.target.value]);
  };

  const handlePayment = (e) => {
    // console.log(e.target.value);
    setPaymentMethod(e.target.value);
  };

  //cartpage

  const totalAmount = products.reduce(
    (acc, el) => el.price * el.quantity + acc,
    0
  );

  const totalItem = products.reduce((acc, el) => el.quantity + acc, 0);

  const handleQnt = (e, product) => {
    dispatch(UpdateCartAsync({ ...product, quantity: +e.target.value }));
  };

  const handleRemove = (id) => {
    dispatch(DeleteCartItemAsync(id));
  };
  //

  //addorder
  const handleOrder = () => {
    let order = {
      products,
      totalAmount,
      totalItem,
      isAddress,
      paymentMethod,
      user,
    };
    dispatch(OrderAddedAsync(order));
  };
  //

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form
            noValidate
            className="bg-white px-5 py-5"
            onSubmit={handleSubmit(onSubmit)}
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
                        {...register("city", { required: "City is required" })}
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
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Address
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Choose from Existing Addresses.
                </p>

                <ul role="list">
                  {user.address.map((el, index) => (
                    <li
                      key={el.id}
                      className="flex justify-between gap-x-6 py-5 border-solid border-2 border-gray-200 px-5"
                    >
                      <div className="flex gap-x-4 ">
                        <input
                          id="address"
                          name="address"
                          type="radio"
                          onChange={(e) => handleAddress(e)}
                          value={index}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {el.fullname}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {el.street}
                          </p>
                          <p className="text-sm leading-6 text-gray-900">
                            {el.city}
                          </p>
                          <p className="text-sm leading-6 text-gray-900">
                            {el.region}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <p className="text-xs leading-5 text-gray-500">
                            phone: {el.phone}
                          </p>
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          {el.postal}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Payment Method
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Choose One.
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="cash"
                          name="payment"
                          type="radio"
                          onChange={(e) => handlePayment(e)}
                          value={"cash"}
                          checked={paymentMethod === "cash"}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="cash"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cash
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="card-payment"
                          name="payment"
                          type="radio"
                          onChange={(e) => handlePayment(e)}
                          value={"card"}
                          checked={paymentMethod === "card"}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="card-payment"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Card payment
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* //cart */}
        <div className="lg:col-span-2">
          <div className="bg-white">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 pt-3 pl-5">
              Cart
            </h1>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to={`/productdetail/${product.id}`}>
                                {product.title}
                              </Link>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty
                            </label>
                            <select
                              value={product.quantity}
                              onChange={(e) => handleQnt(e, product)}
                            >
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                              <option value={"3"}>3</option>
                              <option value={"4"}>4</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              onClick={() => handleRemove(product.id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${totalAmount}</p>
              </div>

              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total Items in Cart</p>
                <p>{totalItem} items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div
                onClick={handleOrder}
                className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Order now
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    <Link to={"/"}> Continue Shopping</Link>

                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
