import { Disclosure } from "@headlessui/react"
import { useNavigate } from "react-router-dom"

const VerifyEmail = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-10 border border-purple-500 rounded-[50px] p-10 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div className="text-center">
        <i className="fa-solid fa-envelope-circle-check text-blue-600 text-5xl"></i>
      </div>
      <h1 className="my-4 text-center text-3xl font-semibold text-gray-700">
        Verify email to proceed
      </h1>
      <p className="text-center text-lg text-gray-500 font-light">
        We just sent an email to: [
        <span className="font-semibold">display email in Bold</span>]<br />
        Please check your email and click on the link provided to verify your
        account.
      </p>
      <div>
        <div className="w-full px-4 pt-16">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Change Email</span>
                    {open ? (
                      <i className="fa-solid fa-chevron-down"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-up"></i>
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                    <div className="flex items-center justify-between">
                      <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <i className="fa-solid fa-envelope text-gray-500"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <button className="bg-gray-50 rounded-full py-3 px-8 hover:bg-purple-400 hover:text-white">
                        Update and Resend
                      </button>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>I need help verifying my email</span>
                    {open ? (
                      <i className="fa-solid fa-chevron-down"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-up"></i>
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 space-y-4">
                    <div className="">
                      <h3 className="text-md text-gray-500 font-semibold">
                        Why do we ask for email confirmation?
                      </h3>
                      <p>
                        Email confirmation is an important security check that
                        helps prevent other people from signing up for an
                        Volunteasy account using your email address.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-md text-gray-500 font-semibold">
                        How do I confirm my email address?
                      </h3>
                      <p>
                        We sent you an email with a link to click on. If you
                        aren't able to click the link, copy the full URL from
                        the email and paste it into a new web browser window.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-md text-gray-500 font-semibold">
                        If you haven't receieved the confirmation email, please:
                      </h3>
                      <p>
                        Check the junk email or spam filter in your email
                        account. Make sure your email address is entered
                        correctly.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/signup/org/flow-1")}
          className="bg-purple-600 text-white px-10 py-4 text-xl rounded-full hover:bg-purple-700"
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  )
}

export default VerifyEmail
