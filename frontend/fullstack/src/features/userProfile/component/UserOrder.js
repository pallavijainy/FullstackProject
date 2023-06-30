import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../Auth/AuthSlice";
import { UsersAllOrdersAsync, userAllOrder } from "../UserProfileSlice";

export default function UsersOrdersAll() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userorder = useSelector(userAllOrder);
  console.log(userorder);

  useEffect(() => {
    dispatch(UsersAllOrdersAsync(user.id));
  }, [dispatch]);

  return (
    <>
      <div className="bg-white">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 pt-3 pl-5">
          My Orders
        </h1>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {userorder?.map((el) => (
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 pt-3 pl-5">
                    Order # {el.id}
                  </h1>
                  <li key={el.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      {el.products.map((el) => (
                        <img
                          src={el.images[0]}
                          alt={""}
                          className="h-full w-full object-cover object-center"
                        />
                      ))}
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to={`/productdetail/${el.id}`}>
                              {el.user.email}
                            </Link>
                          </h3>
                          <p className="ml-4">Total:- {el.totalAmount}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Total Item:- {el.totalItem}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Payment Method:- {el.paymentMethod}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Status:- {el.status}
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
        </div>
      </div>
    </>
  );
}
