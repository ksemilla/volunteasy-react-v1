import { Box, Button, TextField, Typography } from "@mui/material"
import { useFormContext } from "react-hook-form"

export default function OrgContactForm(props: {
  setPanelIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext()

  return (
    <div className="space-y-12 sm:space-y-12">
      <Box sx={{ maxWidth: "600px", margin: "auto", marginLeft: "10px" }}>
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography fontSize={14}>
            The below information will not be publicly visible
          </Typography>
        </Box>
        <div className="space-y-4 pb-12 sm:pb-0">
          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Address Line 1 <sup style={{ color: "red" }}>*</sup>
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("address_line_1", { required: true })}
                error={errors?.address_line_1 ? true : false}
                helperText={
                  errors?.address_line_1 ? "This field is required" : false
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Address Line 2
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("address_line_2")}
                error={errors?.address_line_2 ? true : false}
                helperText={
                  errors?.address_line_2 ? "This field is required" : false
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Address Line 3
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("address_line_3")}
                error={errors?.address_line_3 ? true : false}
                helperText={
                  errors?.address_line_3 ? "This field is required" : false
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Town <sup style={{ color: "red" }}>*</sup>
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("town", { required: true })}
                error={errors?.town ? true : false}
                helperText={errors?.town ? "This field is required" : false}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Postcode <sup style={{ color: "red" }}>*</sup>
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("postcode", { required: true })}
                error={errors?.postcode ? true : false}
                helperText={errors?.postcode ? "This field is required" : false}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Contact Name <sup style={{ color: "red" }}>*</sup>
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("contact_name", { required: true })}
                error={errors?.contact_name ? true : false}
                helperText={
                  errors?.contact_name ? "This field is required" : false
                }
                placeholder="Enter the name of the individual who will own the account"
                sx={{
                  "& input::placeholder": {
                    fontSize: "12px",
                  },
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Contact Email <sup style={{ color: "red" }}>*</sup>
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("contact_email", { required: true })}
                error={errors?.contact_email ? true : false}
                helperText={
                  errors?.contact_email ? "This field is required" : false
                }
                placeholder="Enter the email of the individual who will own the account"
                sx={{
                  "& input::placeholder": {
                    fontSize: "12px",
                  },
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Phone Number <sup style={{ color: "red" }}>*</sup>
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("phone_number", { required: true })}
                error={errors?.phone_number ? true : false}
                helperText={
                  errors?.phone_number ? "This field is required" : false
                }
                placeholder="Enter the number of the individual who will own the account"
                sx={{
                  "& input::placeholder": {
                    fontSize: "12px",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Button
          type="button"
          variant="contained"
          sx={{ borderRadius: "999px" }}
          disableElevation
          onClick={() => {
            trigger(undefined, { shouldFocus: true }).then((res) => {
              if (res) {
                props.setPanelIndex(0)
              }
            })
          }}
          size="large"
        >
          Back
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ borderRadius: "999px" }}
          disableElevation
          onClick={() => {
            trigger(undefined, { shouldFocus: true }).then((res) => {
              if (res) {
                props.setPanelIndex(2)
              }
            })
          }}
          size="large"
        >
          Next
        </Button>
      </Box>
    </div>
  )
}
