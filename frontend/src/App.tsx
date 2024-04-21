import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Layout } from './Layout'
import { queryClient } from './query/common.query'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function App() {


  return (
    <>
      {/* hello */}
      {/* <div id="layout">
        <NavRoutes />
      </div> */}
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient} >
        <Layout/>
      </QueryClientProvider>
      {/* </SideBarContext.Provider> */}
      </LocalizationProvider>
    </>
  )
}

export default App
