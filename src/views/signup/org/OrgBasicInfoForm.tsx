import { useRef, useState } from "react"
import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export default function OrgBasicInfoForm(props: {
  setPanelIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    trigger,
    control,
  } = useFormContext()

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [logoName, setLogoName] = useState("")
  const handleUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    if (e?.target?.files?.[0]) {
      setLogoName(e?.target?.files?.[0].name)
    }
  }

  return (
    <div className="space-y-12 sm:space-y-12">
      <Box sx={{ maxWidth: "600px", margin: "auto", marginLeft: "10px" }}>
        <div className="space-y-4 pb-12 sm:pb-0">
          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Organisation Name
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                size="small"
                fullWidth
                {...register("org_name", { required: true })}
                error={errors?.org_name ? true : false}
                helperText={errors?.org_name ? "This field is required" : false}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Organisation Type
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <Controller
                control={control}
                name="org_type"
                rules={{ required: true }}
                defaultValue=""
                render={({ field: { ref, ...rest } }) => (
                  <Select
                    fullWidth
                    size="small"
                    error={errors?.org_type ? true : false}
                    inputRef={ref}
                    {...rest}
                  >
                    <MenuItem value="Org Type 1">Org Type 1</MenuItem>
                    <MenuItem value="Org Type 2">Org Type 2</MenuItem>
                    <MenuItem value="Org Type 3">Org Type 3</MenuItem>
                  </Select>
                )}
              />
              {errors?.org_type && (
                <FormHelperText
                  sx={{
                    marginTop: "4px",
                    marginLeft: "14px",
                    color: "#d32f2f",
                  }}
                >
                  This field is required
                </FormHelperText>
              )}
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="cover-photo"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Logo
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                disabled
                fullWidth
                value={logoName}
                type="text"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton component="label">
                      <i className="fa-solid fa-arrow-up-from-bracket text-sm"></i>
                      <input
                        ref={inputRef}
                        type="file"
                        hidden
                        onChange={handleUpload}
                        name="[licenseFile]"
                      />
                    </IconButton>
                  ),
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Industry
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <Controller
                control={control}
                name="industry"
                rules={{ required: true }}
                defaultValue=""
                render={({ field: { ref, ...rest } }) => (
                  <Select
                    fullWidth
                    size="small"
                    error={errors?.industry ? true : false}
                    inputRef={ref}
                    {...rest}
                  >
                    <MenuItem value="Industry 1">Industry 1</MenuItem>
                    <MenuItem value="Industry 2">Industry 2</MenuItem>
                    <MenuItem value="Industry 3">Industry 3</MenuItem>
                  </Select>
                )}
              />
              {errors?.industry && (
                <FormHelperText
                  sx={{
                    marginTop: "4px",
                    marginLeft: "14px",
                    color: "#d32f2f",
                  }}
                >
                  This field is required
                </FormHelperText>
              )}
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Founded
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                type="text"
                size="small"
                fullWidth
                {...register("founded")}
                error={errors?.founded ? true : false}
                helperText={errors?.founded ? "This field is required" : false}
                placeholder="Enter the year your Organisation was founded"
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
              Website
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                type="text"
                size="small"
                fullWidth
                {...register("website")}
                error={errors?.website ? true : false}
                helperText={errors?.website ? "This field is required" : false}
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Linkedin
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                type="text"
                size="small"
                fullWidth
                {...register("linkedin")}
                error={errors?.linkedin ? true : false}
                helperText={errors?.linkedin ? "This field is required" : false}
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Facebook
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                type="text"
                size="small"
                fullWidth
                {...register("facebook")}
                error={errors?.facebook ? true : false}
                helperText={errors?.facebook ? "This field is required" : false}
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
            <label
              htmlFor="username"
              className="text-right block font-medium leading-6 text-gray-700 sm:pt-1.5 sm:col-span-4"
            >
              Twitter
            </label>
            <div className="mt-2 sm:col-span-8 sm:mt-0">
              <TextField
                type="text"
                size="small"
                fullWidth
                {...register("twitter")}
                error={errors?.twitter ? true : false}
                helperText={errors?.twitter ? "This field is required" : false}
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
            trigger(undefined, { shouldFocus: true })
            navigate("/signup/org/verify-email")
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
                props.setPanelIndex(1)
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
