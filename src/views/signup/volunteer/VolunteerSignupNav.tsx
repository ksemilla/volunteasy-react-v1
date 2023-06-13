import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"

export default function VolunteerSignupNav() {
  return (
    <div>
      <div className="px-5 py-2 flex justify-between items-center border-b border-gray-100">
        <div className="">
          <img src="/logo3.png" width={200} />
        </div>
        <div>
          <Example />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

function Example() {
  return (
    <div className="">
      <Menu as="div" className="relative text-left">
        <div className="flex items-center">
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img
              className="h-14 w-14 flex-shrink-0 rounded-full bg-gray-300 cursor-pointer border-2 border-transparent hover:border-2 hover:border-purple-600"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt=""
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-right justify-center`}
                  >
                    John Doe
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <i className="fa-solid fa-gear mr-2"></i>
                    ) : (
                      <i className="fa-solid fa-gear mr-2"></i>
                    )}
                    Close Account
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    ) : (
                      <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
