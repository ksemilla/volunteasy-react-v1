import { useTheme } from "@mui/material/styles"
import { Box, Stack, Typography } from "@mui/material"

const steps = ["Basic Info", "Contact", "Details"]

export default function OrgSignupStepper(props: {
  activeIndex: number
  setPanelIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  const theme = useTheme()
  return (
    <nav aria-label="Progress">
      <Stack direction="row" sx={{ height: "36px" }}>
        {steps.map((step, idx) => (
          <Box
            key={step}
            sx={{
              flexGrow: idx !== steps.length - 1 ? 1 : 0,
              position: "relative",
            }}
          >
            <Box
              sx={{
                color: theme.palette.primary.main,
                border: `1px solid`,
                width: "20px",
                height: "20px",
                backgroundColor:
                  props.activeIndex >= idx
                    ? theme.palette.primary.main
                    : "white",
                borderRadius: "999px",
                position: "absolute",
                left: "-10px",
                zIndex: 1,
                cursor: "pointer",
                "&:hover": {
                  filter: "brightness(90%)",
                },
              }}
              // onClick={() => props.setPanelIndex(idx)}
            />
            <Box
              sx={{
                color: theme.palette.primary.main,
                border: "1px solid",
                position: "relative",
                top: "10px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transform: "translate(-50%)",
                  top: "20px",
                  color: "gray",
                }}
                fontSize={12}
              >
                {step}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </nav>
  )

  // return (
  //   <nav aria-label="Progress" className="h-[70px]">
  //     <ol role="list" className="flex items-center">
  //       {steps.map((step, stepIdx) => (
  //         <li
  //           key={step.name}
  //           className={classNames(
  //             stepIdx !== steps.length - 1 ? "flex-1" : "",
  //             "relative"
  //           )}
  //         >
  //           {step.status === "complete" ? (
  //             <>
  //               <div
  //                 className="absolute inset-0 flex items-center"
  //                 aria-hidden="true"
  //               >
  //                 <div
  //                   className={classNames(
  //                     "h-0.5 w-full ",
  //                     steps?.[stepIdx + 1]?.status === "complete"
  //                       ? "bg-purple-500"
  //                       : "bg-gray-200"
  //                   )}
  //                 />
  //               </div>
  //               <Link
  //                 to={step.href}
  //                 className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-purple-600 bg-purple-600 hover:bg-purple-900"
  //               >
  //                 <span className="absolute top-8 whitespace-nowrap text-gray-500 text-sm">
  //                   {step.name}
  //                 </span>
  //               </Link>
  //             </>
  //           ) : (
  //             <>
  //               <div
  //                 className="absolute inset-0 flex items-center"
  //                 aria-hidden="true"
  //               >
  //                 <div className="h-0.5 w-full bg-gray-200" />
  //               </div>
  //               <Link
  //                 to={step.href}
  //                 className="group relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
  //               >
  //                 <span
  //                   className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
  //                   aria-hidden="true"
  //                 />
  //                 <span className="absolute top-8 whitespace-nowrap text-gray-500 text-sm">
  //                   {step.name}
  //                 </span>
  //               </Link>
  //             </>
  //           )}
  //         </li>
  //       ))}
  //     </ol>
  //   </nav>
  // )
  // return (
  //   <Box sx={{ width: "100%" }}>
  //     <Stepper activeStep={0} alternativeLabel>
  //       {steps.map((label) => (
  //         <Step key={label}>
  //           <StepLabel>
  //             <span className="text-xs">{label}</span>
  //           </StepLabel>
  //         </Step>
  //       ))}
  //     </Stepper>
  //   </Box>
  // )
}
