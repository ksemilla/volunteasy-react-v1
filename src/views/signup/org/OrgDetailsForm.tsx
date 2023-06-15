import { Box, Button, TextField } from "@mui/material"
import { useFormContext } from "react-hook-form"

export default function OrgDetailsForm(props: {
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
        <div className="space-y-4 pb-12 sm:pb-0">
          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Headline Summary
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("summary")}
                error={errors?.summary ? true : false}
                helperText={errors?.summary ? "This field is required" : false}
                multiline
                rows={5}
                placeholder="Summarise your Organisation in a few sentences"
                sx={{
                  "& textarea::placeholder": {
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
              About
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("about")}
                error={errors?.about ? true : false}
                helperText={errors?.about ? "This field is required" : false}
                multiline
                rows={5}
                placeholder="Tell the Volunteers about your Organisation and its origins"
                sx={{
                  "& textarea::placeholder": {
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
              Objectives
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("objectives")}
                error={errors?.objectives ? true : false}
                helperText={
                  errors?.objectives ? "This field is required" : false
                }
                multiline
                rows={5}
                placeholder="Describe how your Organisation helps (your beneficiaries), how your Organisation helps them (your services), and why your help matters (your impact)"
                sx={{
                  "& textarea::placeholder": {
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
              Activities
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("activities")}
                error={errors?.activities ? true : false}
                helperText={
                  errors?.activities ? "This field is required" : false
                }
                multiline
                rows={5}
                placeholder="Describe what your Organisation does to meet its objectives"
                sx={{
                  "& textarea::placeholder": {
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
                props.setPanelIndex(1)
              }
            })
          }}
          size="large"
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ borderRadius: "999px" }}
          disableElevation
          size="large"
        >
          Next
        </Button>
      </Box>
    </div>
  )
}
