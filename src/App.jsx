import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Ranberator from './Pages/Ranberator'
import Ranpointator from './Pages/Ranpointator'
import ErrorPage from './Pages/Error Page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='/ranberator' element={<Ranberator />} />
        <Route path='/ranpointator' element={<Ranpointator />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
