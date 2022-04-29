import { useRouter } from "next/router";
import React from "react";

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="navbar fixed bg-base-100 group-focus-within:bg-base-300 shadow-sm">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => {
            router.push("/");
          }}
        >
          ModelHub
        </a>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal p-0">
          <div>
            <li>
              <a>New</a>
            </li>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded">
                <img
                  src="https://avatars.githubusercontent.com/u/72839543?v=4"
                  className="w-full h-full rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
