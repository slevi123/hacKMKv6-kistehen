import './App.css'
import { SideBarContext } from './context/context.sidebar'
import { Layout } from './Layout'
import { NavRoutes } from './NavRoutes'

function App() {


  return (
    <>
      {/* hello */}
      <div id="layout">
        <NavRoutes />
      </div>
        {/* <Layout/>s */}
      {/* </SideBarContext.Provider> */}
    </>
  )
}

export default App
