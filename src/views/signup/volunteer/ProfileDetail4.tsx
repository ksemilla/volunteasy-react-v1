import { Combobox, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"

const people = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Accounting" },
  { id: 3, name: "Support" },
  { id: 4, name: "Engineering" },
  { id: 5, name: "Nurse" },
  { id: 6, name: "Health Care" },
]

export default function ProfileDetail4() {
  const [skills, setSkills] = useState<string[]>([])
  const [selected, setSelected] = useState<{ id: number; name: string }>({
    id: 0,
    name: "",
  })
  const [query, setQuery] = useState("")
  const filteredPeople =
    query === ""
      ? people.filter(
          (person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, "")) &&
            !skills.includes(person.name)
        )
      : people.filter(
          (person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, "")) &&
            !skills.includes(person.name)
        )

  useEffect(() => {
    if (selected.name) {
      setSkills((prevState) => [...prevState, selected.name])
    }
  }, [selected])

  return (
    <div className="max-w-5xl m-auto text-center mt-6">
      <p className="py-5 text-gray-700">4 of 6</p>
      <h1 className="text-purple-600 text-4xl">Skills! Add your skills</h1>
      <p className="max-w-2xl m-auto mt-10 text-gray-500 text-xl font-light">
        Your skills show organisations what you can offer. It's important to
        select from the predefined dropdown as well as entering any others you
        feel necessary.
      </p>
      <div className="max-w-xl m-auto mt-14 space-y-4">
        <h3>Pre Defined skills</h3>
        <div className="">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="border relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(person: { id: number; name: string }) =>
                    person.name
                  }
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search Skill"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <i className="fa-solid fa-chevron-down"></i>
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <i className="fa-solid fa-check"></i>
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>

        <div className="flex gap-2 border rounded p-4 flex-wrap">
          {skills.map((s, i) => (
            <span
              key={s}
              className="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
            >
              {s}
              <button
                type="button"
                className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
                onClick={() => {
                  setSkills((prevState) =>
                    prevState.filter((_, idx) => idx !== i)
                  )
                }}
              >
                <span className="sr-only">Remove</span>
                <svg
                  viewBox="0 0 14 14"
                  className="h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75"
                >
                  <path d="M4 4l6 6m0-6l-6 6" />
                </svg>
                <span className="absolute -inset-1" />
              </button>
            </span>
          ))}
        </div>
        <div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-left font-medium leading-6 text-gray-900"
            >
              Other Skills
            </label>
            <div className="">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter your skills here"
                />
              </div>
              <p className="text-gray-500 font-light text-xs text-right">
                Max 15 skills
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg m-auto  mt-32 flex items-center justify-between">
        <Link
          to="/signup/volunteer/profile-detail-3"
          className="inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 border shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>

        <Link
          to="/signup/volunteer/profile-detail-5"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Next, add projects
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  )
}
