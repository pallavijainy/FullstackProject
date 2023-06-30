import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ResetCartAsync } from "../../features/cart/CartSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/Auth/AuthSlice";
import { resetOrder } from "../../features/Order/OrderSlice";

const OrderSuccess = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    //reset cart
    dispatch(ResetCartAsync(user.id));
    //reset currentorder
    dispatch(resetOrder());
  }, [dispatch, user]);

  return (
    <>
      {!params.id && <Navigate to={"/"} replace={true}></Navigate>}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            Order Placed Success
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Order Placed #{params.id}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            see your order here ▶️ My orders
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderSuccess;
