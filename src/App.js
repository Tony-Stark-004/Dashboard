import {colorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material"
import {Routes, Route} from 'react-router-dom'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard/Index'
import Team from './scenes/team/Index'
import Contacts from './scenes/contacts/Index'
import Invoices from './scenes/invoices/Index'
import Form from './scenes/form/index'
import Calendar from './scenes/calendar/index'
import FAQ from './scenes/faq/index'
import Bar from './scenes/bar/index'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import Geography from './scenes/geography'



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
              <Route exact path='/contacts' element={<Contacts />} />
              <Route exact path='/invoices' element={<Invoices />} />
              <Route exact path='/form' element={<Form />} />
              <Route exact path='/calendar' element={<Calendar />} />
              <Route exact path='/faq' element={<FAQ/>} />
              <Route exact path='/bar' element={<Bar />} />
              {/* <Route exact path='/line' element={<Line />} /> */}
              {/* <Route exact path='/pie' element={<Pie />} /> */}
              {/* <Route exact path='/geography' element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  
  );
}

export default App;
