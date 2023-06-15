import { Disclosure } from "@headlessui/react"
import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const VerifyEmail = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <div className="mt-10 border border-purple-500 rounded-[50px] p-10 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div className="text-center mb-10">
        <i className="fa-solid fa-envelope-circle-check text-blue-600 text-7xl"></i>
      </div>
      <h1 className="my-4 text-center text-3xl text-gray-700">
        Verify email to proceed
      </h1>
      <p className="text-center text-lg text-gray-500 font-extralight">
        We just sent an email to: [
        <span className="font-semibold">display email in Bold</span>]<br />
        Please check your email and click on the link provided to verify your
        account.
      </p>
      <div>
        <div className="w-full px-4 pt-16">
          <div className="mx-auto rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex max-w-md m-auto w-full items-center space-x-2 rounded-lg  px-4 py-2 text-left text-md font-medium text-[#8a3bc4] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {open ? (
                      <div className="bg-[#8a3bc4] w-6 h-5 rounded flex items-center justify-center text-white">
                        <i className="fa-solid fa-chevron-up"></i>
                      </div>
                    ) : (
                      <div className="bg-[#8a3bc4] w-6 h-5 rounded flex items-center justify-center text-white">
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    )}
                    <span>Change Email</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="max-w-lg m-auto w-full pt-4 pb-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-8">
                      <TextField
                        type="text"
                        size="small"
                        fullWidth
                        {...register("email")}
                        error={errors?.email ? true : false}
                        placeholder="Enter Email"
                        sx={{
                          flex: 1,
                          "& input::placeholder": {
                            fontSize: "12px",
                          },
                        }}
                      />
                      <Button
                        sx={{
                          backgroundColor: "#f8f6fb",
                          color: "gray",
                          fontWeight: 200,
                          flex: 1,
                          borderRadius: "999px",
                          border: "1px solid #c4c3c5",
                        }}
                        size="large"
                      >
                        Update and Resend
                      </Button>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex max-w-md m-auto w-full items-center space-x-2 rounded-lg  px-4 py-2 text-left text-md font-medium text-[#8a3bc4] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {open ? (
                      <div className="bg-[#8a3bc4] w-6 h-5 rounded flex items-center justify-center text-white">
                        <i className="fa-solid fa-chevron-up"></i>
                      </div>
                    ) : (
                      <div className="bg-[#8a3bc4] w-6 h-5 rounded flex items-center justify-center text-white">
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    )}
                    <span>I need help verifying my email</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-center text-sm text-gray-500 space-y-4">
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
        <Button
          onClick={() => navigate("/signup/org/flow")}
          variant="contained"
          disableElevation
          sx={{ borderRadius: "999px" }}
        >
          Resend Verification Email
        </Button>
      </div>
    </div>
  )
}

export default VerifyEmail
