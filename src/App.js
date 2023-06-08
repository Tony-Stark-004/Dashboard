import {colorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material"
import {Routes, Route} from 'react-router-dom'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard/Index'
import Team from './scenes/team/Index'
// import Invoices from './scenes/invoices'
// import Contacts from './scenes/contacts'
// import Bar from './scenes/bar'
// import Form from './scenes/form'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
// import Calendar from './scenes/calendar'



function App() {
  const [theme, colorMode] = useMode()
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app"> 
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route exact path='/team' element={<Team />} />
              {/* <Route exact path='/invoices' element={<Invoices />} /> */}
              {/* <Route exact path='/contacts' element={<Contacts />} /> */}
              {/* <Route exact path='/bar' element={<Bar />} /> */}
              {/* <Route exact path='/form' element={<Form />} /> */}
              {/* <Route exact path='/line' element={<Line />} /> */}
              {/* <Route exact path='/pie' element={<Pie />} /> */}
              {/* <Route exact path='/faq' element={<FAQ/>} /> */}
              {/* <Route exact path='/geography' element={<Geography />} /> */}
              {/* <Route exact path='/calendar' element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  
  );
}

export default App;
