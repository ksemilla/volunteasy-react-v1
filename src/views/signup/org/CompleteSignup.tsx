import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material"

const CompleteSignup = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = handleSubmit((_data) => {
    navigate("/signup/org/verify-email")
  })

  return (
    <div className="mt-10 border border-[#8a3bc4] rounded-[50px] py-2 px-32 sm:mx-auto sm:w-full sm:max-w-2xl">
      <h1 className="my-4 text-center text-xl font-semibold text-gray-700">
        Complete Sign Up
      </h1>
      <form className="space-y-6" onSubmit={onSubmit} noValidate>
        <div>
          <div className="mt-2">
            <TextField
              fullWidth
              {...register("first_name", { required: true })}
              error={errors?.first_name ? true : false}
              helperText={errors?.first_name ? "This field is required" : false}
              placeholder="First Name"
            />
          </div>
          <div className="mt-4">
            <TextField
              fullWidth
              {...register("org_name", { required: true })}
              error={errors?.org_name ? true : false}
              helperText={errors?.org_name ? "This field is required" : false}
              placeholder="Organisation Name"
            />
          </div>
          <div className="mt-4">
            <TextField
              type="password"
              fullWidth
              {...register("password", { required: true })}
              error={errors?.password ? true : false}
              helperText={errors?.password ? "This field is required" : false}
              placeholder="Create Password"
              InputProps={{
                endAdornment: (
                  <i className="fa-solid fa-eye-slash text-gray-400"></i>
                ),
              }}
            />
          </div>
          <div className="mt-4">
            <TextField
              type="password"
              fullWidth
              {...register("confirm_password", {
                required: true,
                validate: {
                  equalWithPassword: (v, fv) => v === fv.password,
                },
              })}
              error={errors?.confirm_password ? true : false}
              helperText={
                errors?.confirm_password?.type === "required"
                  ? "This field is required"
                  : errors?.confirm_password?.type === "equalWithPassword"
                  ? "Must be equal with password"
                  : ""
              }
              placeholder="Confirm Password"
              InputProps={{
                endAdornment: (
                  <i className="fa-solid fa-eye-slash text-gray-400"></i>
                ),
              }}
            />
          </div>
        </div>

        <p className="text-center text-xs text-gray-500">
          By clicking Sign Up, you agree <br />
          to <span className="text-[#8a3bc4] font-semibold">
            Terms of Use
          </span>{" "}
          and{" "}
          <span className="text-[#8a3bc4] font-semibold">Privacy Policy</span>
        </p>

        <div>
          <Button type="submit" variant="contained" disableElevation fullWidth>
            Sign Up
          </Button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold leading-6 text-[#8a3bc4] hover:text-purple-500"
        >
          Login
        </Link>
      </p>
    </div>
  )
}

export default CompleteSignup
