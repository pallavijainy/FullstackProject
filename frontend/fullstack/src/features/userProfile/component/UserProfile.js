import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Auth/AuthSlice";

export default function UserProfile() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <h1 className="text-4xl">Name:- {user.email}</h1>
      <h1 className="text-2xl">street Addresses</h1>
      <div>
        {user.address.map((el) => (
          <li className="flex justify-between gap-x-6 py-5 border-solid border-2 border-gray-200 px-5">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {el.fullname}
              </p>

              <p className="text-sm leading-6 text-gray-900">{el.city}</p>
              <p className="text-sm leading-6 text-gray-900">{el.region}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
