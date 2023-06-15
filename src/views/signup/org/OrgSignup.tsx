import { Button, Checkbox, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export default function OrgSignup() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((_data) => {
    navigate("/signup/org/complete-signup")
  })

  return (
    <div className="mt-10 border border-[#8a3bc4] rounded-[50px] p-10 sm:mx-auto sm:w-full sm:max-w-3xl">
      <h1 className="text-[#8a3bc4] text-4xl text-center">Get in touch!</h1>
      <p className="max-w-3xl m-auto mt-4 text-gray-900 text-md text-center text-sm">
        If you have any questions, would like a demo, or would like to sign up,
        simply just fill up your details below. Found &/or CEO will be in touch.
      </p>
      <div className="mt-20">
        <form onSubmit={onSubmit} noValidate>
          <div className="space-y-12 max-w-xl m-auto ml-0 sm:space-y-16">
            <div className="space-y-10">
              <div className="space-y-6 pb-12 sm:pb-0">
                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="full_name"
                    className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-3"
                  >
                    Full name
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <TextField
                      size="small"
                      fullWidth
                      {...register("full_name", { required: true })}
                      error={errors?.full_name ? true : false}
                      helperText={
                        errors?.full_name ? "This field is required" : false
                      }
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="email"
                    className="text-right block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Email address
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <TextField
                      size="small"
                      fullWidth
                      {...register("email", { required: true })}
                      error={errors?.email ? true : false}
                      helperText={
                        errors?.email ? "This field is required" : false
                      }
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="org_name"
                    className="text-right block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Organisation name
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <TextField
                      size="small"
                      fullWidth
                      {...register("org_name", { required: true })}
                      error={errors?.org_name ? true : false}
                      helperText={
                        errors?.org_name ? "This field is required" : false
                      }
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="job_title"
                    className="text-right block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Job title
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <TextField
                      size="small"
                      fullWidth
                      {...register("job_title", { required: true })}
                      error={errors?.job_title ? true : false}
                      helperText={
                        errors?.job_title ? "This field is required" : false
                      }
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="phone"
                    className="text-right block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Phone number
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <TextField
                      size="small"
                      fullWidth
                      {...register("phone", { required: true })}
                      error={errors?.phone ? true : false}
                      helperText={
                        errors?.phone ? "This field is required" : false
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-md m-auto relative flex items-start">
                <div className="flex h-6 items-center">
                  <Checkbox color="primary" />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <span id="comments-description" className="text-gray-500">
                    Receive exciting news and updates from Volunteasy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center">
            <Button
              variant="contained"
              sx={{ borderRadius: "999px" }}
              disableElevation
              size="large"
              type="submit"
            >
              Get in Touch
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
