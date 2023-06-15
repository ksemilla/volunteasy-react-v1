import { Box } from "@mui/material"
import { useState } from "react"
import OrgSignupStepper from "./OrgSignupStepper"
import OrgBasicInfoForm from "./OrgBasicInfoForm"
import { FormProvider, useForm } from "react-hook-form"
import OrgContactForm from "./OrgContactForm"
import OrgDetailsForm from "./OrgDetailsForm"
import { useNavigate } from "react-router-dom"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

export default function OrgSignupFlow() {
  const navigate = useNavigate()
  const [panelIndex, setPanelIndex] = useState(0)
  const methods = useForm({ mode: "onChange" })

  const onSubmit = methods.handleSubmit((_data) => {
    navigate("/dashboard/org")
  })

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
      <div className="mt-10 border border-purple-500 rounded-[50px] p-10">
        <Box sx={{ maxWidth: "600px", margin: "auto", marginBottom: "20px" }}>
          <OrgSignupStepper
            activeIndex={panelIndex}
            setPanelIndex={setPanelIndex}
          />
        </Box>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <TabPanel value={panelIndex} index={0}>
              <OrgBasicInfoForm setPanelIndex={setPanelIndex} />
            </TabPanel>

            <TabPanel value={panelIndex} index={1}>
              <OrgContactForm setPanelIndex={setPanelIndex} />
            </TabPanel>

            <TabPanel value={panelIndex} index={2}>
              <OrgDetailsForm setPanelIndex={setPanelIndex} />
            </TabPanel>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
