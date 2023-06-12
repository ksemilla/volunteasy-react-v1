import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { classNames } from "../../utils"

import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

const steps = [
  { name: "Basic Info", href: "/signup/org/flow-1", status: "complete" },
  { name: "Contact", href: "/signup/org/flow-2", status: "complete" },
  { name: "Details", href: "/signup/org/flow-3", status: "upcoming" },
]

const people = [
  { id: 1, name: "Org Type 1" },
  { id: 2, name: "Org Type 2" },
  { id: 3, name: "Org Type 3" },
]

const industryList = [
  { id: 1, name: "Industry 1" },
  { id: 2, name: "Industry 2" },
  { id: 3, name: "Industry 3" },
]

const OrgSignupFlow2 = () => {
  const [selected, setSelected] = useState<{ id: number; name: string }>(
    people[0]
  )
  const [selectedIndustry, setSelectedIndustry] = useState<{
    id: number
    name: string
  }>(industryList[0])
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = handleSubmit((_data) => {
    navigate("/signup/org/flow-1")
  })
  return (
    <div className="mt-10 border border-purple-500 rounded-[50px] p-10 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div className="my-4">
        <nav aria-label="Progress" className="h-[70px]">
          <ol role="list" className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(
                  stepIdx !== steps.length - 1 ? "flex-1" : "",
                  "relative"
                )}
              >
                {step.status === "complete" ? (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div
                        className={classNames(
                          "h-0.5 w-full",
                          stepIdx === 0 ? "bg-purple-600" : "bg-gray-200"
                        )}
                      />
                    </div>
                    <Link
                      to={step.href}
                      className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-600 bg-purple-600 hover:bg-purple-900"
                    >
                      <span className="absolute top-10 whitespace-nowrap text-purple-500">
                        {step.name}
                      </span>
                    </Link>
                  </>
                ) : step.status === "current" ? (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <Link
                      to={step.href}
                      className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-600 bg-white"
                      aria-current="step"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-purple-600"
                        aria-hidden="true"
                      />
                      <span className="absolute top-10 whitespace-nowrap text-purple-500">
                        {step.name}
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <Link
                      to={step.href}
                      className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                        aria-hidden="true"
                      />
                      <span className="absolute top-10 whitespace-nowrap text-gray-500">
                        {step.name}
                      </span>
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <form>
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-10">
            <div className="space-y-4 pb-12 sm:pb-0">
              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Organisation Name
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="w-full block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Organisation Type
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <div className="relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6">
                            <span className="block truncate">
                              {selected?.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <i className="fa-solid fa-chevron-down"></i>
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {people.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-purple-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "block truncate"
                                        )}
                                      >
                                        {person.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-purple-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <i className="fa-solid fa-check"></i>
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Logo
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <div className="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <i className="fa-solid fa-image text-4xl text-gray-500"></i>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-purple-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2 hover:text-purple-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Industry
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <Listbox
                    value={selectedIndustry}
                    onChange={setSelectedIndustry}
                  >
                    {({ open }) => (
                      <>
                        <div className="relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6">
                            <span className="block truncate">
                              {selectedIndustry?.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <i className="fa-solid fa-chevron-down"></i>
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {industryList.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-purple-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "block truncate"
                                        )}
                                      >
                                        {person.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-purple-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <i className="fa-solid fa-check"></i>
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Founded
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="w-full block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter the year your organisation was founded"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Website
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="fa-solid fa-globe text-gray-500"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      placeholder="https://www.example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Linkedin
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="fa-brands fa-linkedin text-gray-500"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Facebook
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="fa-brands fa-facebook text-gray-500"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Twitter
                </label>
                <div className="mt-2 sm:col-span-9 sm:mt-0">
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="fa-brands fa-twitter text-gray-500"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrgSignupFlow2
