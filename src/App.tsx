import { ThemeProvider, createTheme } from "@mui/material"
import Router from "./routes"

const theme = createTheme({
  palette: {
    primary: {
      main: "#8a3bc4",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
