import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Layout } from './Layout'
import { queryClient } from './query/common.query'

function App() {


  return (
    <>
      {/* hello */}
      {/* <div id="layout">
        <NavRoutes />
      </div> */}
      <QueryClientProvider client={queryClient} >
        <Layout/>
      </QueryClientProvider>
      {/* </SideBarContext.Provider> */}
    </>
  )
}

export default App
